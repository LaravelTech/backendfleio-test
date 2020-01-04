# Generated by Django 2.1 on 2018-09-13 13:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('billing', '0003_update_countries'),
        ('cpanel', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel('CpanelSettings', 'CpanelProductSettings'),
        migrations.AlterField(
            model_name='CpanelProductSettings',
            name='product',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE,
                                       related_name='cpanel_product_settings', to='billing.Product'),
        ),
    ]
