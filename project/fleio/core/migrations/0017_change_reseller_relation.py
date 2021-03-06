# Generated by Django 2.2.5 on 2019-11-12 09:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ('reseller', '0001_initial'),
        ('core', '0016_alter_permission_fields'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appuser',
            name='reseller',
        ),
        migrations.RemoveField(
            model_name='client',
            name='reseller',
        ),
        migrations.RemoveField(
            model_name='clientgroup',
            name='reseller',
        ),
        migrations.RemoveField(
            model_name='usergroup',
            name='reseller',
        ),
        migrations.AddField(
            model_name='appuser',
            name='reseller_resources',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.PROTECT,
                                    related_name='users', to='reseller.ResellerResources'),
        ),
        migrations.AddField(
            model_name='client',
            name='reseller_resources',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.PROTECT,
                                    related_name='clients', to='reseller.ResellerResources'),
        ),
        migrations.AddField(
            model_name='clientgroup',
            name='reseller_resources',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.PROTECT,
                                    related_name='client_groups', to='reseller.ResellerResources'),
        ),
        migrations.AddField(
            model_name='usergroup',
            name='reseller_resources',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.PROTECT,
                                    related_name='user_groups', to='reseller.ResellerResources'),
        ),
        migrations.AlterField(
            model_name='plugin',
            name='feature_name',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='plugin',
            name='staff_feature_name',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
