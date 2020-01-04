# Generated by Django 2.2.5 on 2019-10-29 12:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('openstack', '0027_instance_stopped_by_fleio'),
    ]

    operations = [
        migrations.AddField(
            model_name='flavorgroup',
            name='reseller',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='+', to=settings.AUTH_USER_MODEL),
        ),
    ]
