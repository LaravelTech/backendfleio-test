# Generated by Django 2.2.5 on 2019-11-13 08:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('billing', '0023_change_reseller_relation'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='product_type',
            field=models.CharField(choices=[('generic', 'Generic'), ('openstack', 'OpenStack'), ('hosting', 'Shared Hosting'), ('domain', 'Domain'), ('reseller', 'Reseller')], max_length=16),
        ),
    ]
