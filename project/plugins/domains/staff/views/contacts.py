from django.utils.translation import ugettext_lazy as _
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import filters
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from fleio.core.drf import StaffOnly
from fleio.core.exceptions import APIBadRequest
from fleio.core.filters import CustomFilter
from fleio.core.utils import get_countries
from plugins.domains.custom_fields.contact_custom_field_definition import ContactCustomFieldDefinition

from plugins.domains.models import Contact
from plugins.domains.staff.serializers import ContactCreateSerializer
from plugins.domains.staff.serializers import ContactUpdateSerializer
from plugins.domains.staff.serializers import ContactSerializer


class ContactsViewSet(viewsets.ModelViewSet):
    permission_classes = (StaffOnly, )
    serializer_class = ContactSerializer
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter, CustomFilter)
    filter_fields = (
        'id',
        'client',
    )
    search_fields = (
        'first_name',
        'last_name',
        'id',
        'email',
        'company',
        'address1',
        'address2',
        'city',
        'country',
        'state',
    )
    ordering_fields = (
        'id',
        'created_at',
        'first_name',
        'last_name',
        'company',
        'address1',
        'address2',
        'city',
        'country',
        'state',
    )

    serializer_map = {'retrieve': ContactSerializer,
                      'create': ContactCreateSerializer,
                      'update': ContactUpdateSerializer}

    def get_queryset(self):
        return Contact.objects.all()

    def get_serializer_class(self):
        return self.serializer_map.get(self.action, self.serializer_class)

    @action(detail=False, methods=['get'])
    def create_options(self, request, *args, **kwargs):
        del request, args, kwargs  # unused
        return Response({'countries': get_countries(),
                         'custom_fields': ContactCustomFieldDefinition().definition
                         })

    def destroy(self, request, *args, **kwargs):
        contact = self.get_object()

        from django.db import IntegrityError
        try:
            contact.delete()
            return Response()
        except IntegrityError:
            raise APIBadRequest(
                detail=_('Cannot delete contact since it is still in use.')
            )
