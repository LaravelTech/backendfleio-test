import json
import logging
import sys

from cinderclient import exceptions as cinder_exceptions
from django.db import IntegrityError
from django.utils.translation import ugettext_lazy as _
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from fleio.activitylog.utils.activity_helper import activity_helper
from fleio.activitylog.utils.decorators import log_enduser_activity
from fleio.core.drf import CustomPermissions, EndUserOnly
from fleio.core.filters import CustomFilter
from fleio.core.models import Operation
from fleio.core.permissions.permissions_cache import permissions_cache
from fleio.core.validation_utils import validate_cloud_objects_limit
from fleio.openstack.models import VolumeBackup
from fleio.openstack.volume_backups.serializers import VolumeBackupCreateSerializer
from fleio.openstack.volume_backups.serializers import VolumeBackupRestoreSerializer
from fleio.openstack.volume_backups.serializers import VolumeBackupSerializer
from fleio.openstack.volume_backups.serializers import VolumeBackupUpdateSerializer
from fleio.openstack.volume_backups.tasks import sync_volume_backup_extra_details
from fleio.openstack.volume_backups.utils import get_volumes_available_for_restoration_queryset
from fleio.openstack.volume_backups.utils import has_full_backup_for_incremental_backup
from fleio.openstack.volumes.operations import VolumeRestoration
from fleio.openstack.volumes.serializers import OpenStackVolumeSerializer
from fleio.openstack.volumes.volume_status import VolumeBackupStatus, VolumeStatus
from fleio.utils.model import statuses_dict_to_statuses_choices
from ..exceptions import APIBadRequest, handle
from ..models import Volume
from ..osapi import OSApi

LOG = logging.getLogger(__name__)


@log_enduser_activity(
    category_name='openstack', object_name='volume backup'
)
class VolumeBackupViewSet(viewsets.ModelViewSet):
    serializer_class = VolumeBackupSerializer
    serializer_map = {
        'create': VolumeBackupCreateSerializer,
        'restore': VolumeBackupRestoreSerializer,
        'update': VolumeBackupUpdateSerializer,
    }
    permission_classes = (CustomPermissions, EndUserOnly,)
    filter_backends = (filters.OrderingFilter, DjangoFilterBackend, CustomFilter, filters.SearchFilter)
    search_fields = ('name', 'status', 'size', 'id')
    filter_fields = ('project_id', 'volume', 'volume__id')

    def get_openstack_volume_backup(self, volume_backup=None):
        volume_backup = volume_backup or self.get_object()
        os_api = OSApi.from_request(request=self.request)
        return os_api.volume_backups.get(volume_backup=volume_backup)

    def get_queryset(self):
        volume_backups = VolumeBackup.objects.filter(project__service__client__in=self.request.user.clients.all())
        return volume_backups

    def get_serializer_class(self):
        return self.serializer_map.get(self.action, self.serializer_class)

    def list(self, request, *args, **kwargs):
        response = super().list(request=request, *args, **kwargs)
        response.data['permissions'] = permissions_cache.get_view_permissions(request.user, self.basename)
        return response

    @staticmethod
    def format_exception(default_message: str) -> str:
        """used to format messages for the handle exception method"""
        exc_type, exc_value, exc_traceback = sys.exc_info()
        if exc_type is cinder_exceptions.OverLimit:
            return _('Maximum number of backups allowed exceeded')
        if exc_type is cinder_exceptions.BadRequest:
            message = getattr(exc_value, 'message')
            if 'Incremental backups exist for this' in message:
                return _('Cannot delete full backup if incremental backup exists')
            elif message.endswith(' an incremental backup.'):
                return _('Cannot create incremental backup without having a full backup first')
            elif 'status must be available or error' in message:
                return _('Cannot delete volume backup as status must be available or error')
            elif 'status must be available' in message:
                return _('Status must be available')
            elif 'Volume to be backed up must be available or in-use' in message:
                return _('Volume to be backed up must be available or in-use')
        return default_message

    def perform_create(self, serializer: VolumeBackupCreateSerializer):
        if not validate_cloud_objects_limit():
            raise APIBadRequest(_('Licence cloud objects limit reached. Please check your license.'))
        volume_id = serializer.validated_data.get('volume_id')
        volume = Volume.objects.filter(id=volume_id).first()
        if volume:
            if serializer.validated_data.get('incremental') is True:
                client = self.request.user.clients.first()
                try:
                    project = client.first_project.project_id
                except (AttributeError, TypeError):
                    raise APIBadRequest(detail=_('No client with an OpenStack project found'))
                if not has_full_backup_for_incremental_backup(project_id=project, related_volume=volume):
                    # for incremental backups check if a full backup related to the volume exists in the same project
                    #   - openstack doesn't validate this at specific project level
                    raise APIBadRequest(detail=_('Cannot create incremental backup without having a full backup first'))
            os_api = OSApi.from_request(request=self.request)
            try:
                volume_backup = os_api.volume_backups.create(
                    region_id=volume.region,
                    **serializer.validated_data,
                )
                activity_helper.add_current_activity_params(object_id=volume_backup.id)
            except Exception as e:
                del e  # unused
                handle(self.request, message=self.format_exception(default_message=_('Unable to create volume backup')))
            return Response({'detail': _('Volume backup creation in progress')})
        else:
            raise APIBadRequest(_('Cannot create volume backup as related volume does not exist'))

    @action(detail=False, methods=['get'])
    def filter_options(self, request, *args, **kwargs):
        del args, kwargs, request  # unused
        filter_options = {
            'statuses': statuses_dict_to_statuses_choices(VolumeBackupStatus.status_map.items()),
        }
        return Response(filter_options)

    @action(detail=False, methods=['get'])
    def permissions(self, request):
        view_permissions = permissions_cache.get_view_permissions(request.user, self.basename)
        return Response(data=view_permissions)

    @action(detail=True, methods=['post'])
    def restore(self, request, pk):
        os_volume_backup = self.get_openstack_volume_backup()
        try:
            response = os_volume_backup.restore(
                name=request.data.get('name', None), volume_id=request.data.get('volume_id', None)
            )
            if not request.data.get('volume_id', None):
                try:
                    Volume.objects.create(id=response.volume_id, status=VolumeStatus.RESTORING_BACKUP, size=0)
                except IntegrityError as e:
                    del e  # unused
            Operation.objects.create(
                operation_type=VolumeRestoration.name,
                primary_object_id=response.volume_id,
                params=json.dumps({
                    'backup_id': response.backup_id,
                    'volume_id': response.volume_id,
                })
            )
        except Exception as e:
            del e  # unused
            handle(self.request, message=self.format_exception(_('Unable to restore volume backup')))
        return Response({'detail': _('Restoration started')})

    def perform_update(self, serializer):
        os_volume_backup = self.get_openstack_volume_backup()
        if serializer.is_valid(raise_exception=True):
            try:
                os_volume_backup.update(
                    name=serializer.validated_data.get('name'), description=serializer.validated_data.get('description')
                )
            except Exception as e:
                del e  # unused
                handle(self.request, message=_('Unable to update volume backup'))
            except APIBadRequest as e:
                raise APIBadRequest(str(e))
            else:
                # no notifications received after update, we need to sync this volume backup
                activity_helper.start_generic_activity(
                    category_name='volume_backup', activity_class='volume backup extra details synchronization',
                    backup_id=os_volume_backup.id
                )
                sync_volume_backup_extra_details.delay(
                    volume_backup_id=os_volume_backup.volume_backup.id,
                    after_update=True
                )
                activity_helper.end_activity()
        return Response({'detail': _('Updating started')})

    @action(detail=False, methods=['POST'])
    def get_volumes_available_for_restoration(self, request):
        """
        Lists all volumes that are available for restoration based on size
        """
        if 'backup_id' in request.data:
            backup_id = request.data.get('backup_id')
        else:
            raise APIBadRequest(detail=_('Missing backup id to filter against.'))
        user_related_clients = self.request.user.clients.all()
        backup = VolumeBackup.objects.filter(
            id=backup_id,
            project__service__client__in=user_related_clients
        ).first()
        if not backup:
            raise APIBadRequest(detail=_('Provided backup to filter against cannot be found'))
        search_value = request.data.get('search', None)
        # get queryset
        queryset = get_volumes_available_for_restoration_queryset(
            search_value=search_value, backup=backup, user_related_clients=user_related_clients
        )

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = OpenStackVolumeSerializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = OpenStackVolumeSerializer(queryset, many=True)
        return Response(serializer.data)

    def perform_destroy(self, volume_backup):
        os_volume_backup = self.get_openstack_volume_backup(volume_backup=volume_backup)
        try:
            os_volume_backup.delete()
        except Exception as e:
            del e  # unused
            handle(self.request, message=self.format_exception(default_message=_('Unable to delete volume backup')))
