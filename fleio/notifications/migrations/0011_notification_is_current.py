# Generated by Django 2.1.7 on 2019-03-27 14:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0010_edit_openstack_error_notification_template'),
    ]

    operations = [
        migrations.AddField(
            model_name='notification',
            name='is_current',
            field=models.BooleanField(default=False),
        ),
    ]
