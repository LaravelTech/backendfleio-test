# Generated by Django 2.1.5 on 2019-02-08 09:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('openstack', '0008_add_flavors_and_flavor_groups_to_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='instance',
            name='booted_from_iso',
            field=models.BooleanField(blank=True, default=False),
        ),
    ]
