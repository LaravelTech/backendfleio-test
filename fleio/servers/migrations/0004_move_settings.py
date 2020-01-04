# Generated by Django 2.1.2 on 2018-12-07 19:00
import logging
from django.db import migrations

from fleio.servers.models import HostingServerSettings

LOG = logging.getLogger(__name__)


def migrate_cpanel_whm_server_settings(apps, schema_editor):
    """CAN BE REMOVED ON MIGRATIONS SQUASH"""
    server_models = apps.get_model('servers', 'Server')
    for server in server_models.objects.filter(plugin__app_label='cpanelserver'):
        try:
            HostingServerSettings.objects.create(server_id=server.pk,
                                                 hostname=server.settings.get('hostname'),
                                                 username=server.settings.get('username'),
                                                 api_token=server.settings.get('key'),
                                                 port=2087)
        except Exception as e:
            LOG.exception(e)


class Migration(migrations.Migration):

    dependencies = [
        ('servers', '0003_hosting_server_settings'),
    ]

    operations = [
        migrations.RunPython(migrate_cpanel_whm_server_settings)
    ]
