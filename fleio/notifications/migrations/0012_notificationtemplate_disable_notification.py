# Generated by Django 2.2.4 on 2019-08-30 14:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0011_notification_is_current'),
    ]

    operations = [
        migrations.AddField(
            model_name='notificationtemplate',
            name='disable_notification',
            field=models.BooleanField(default=False),
        ),
    ]
