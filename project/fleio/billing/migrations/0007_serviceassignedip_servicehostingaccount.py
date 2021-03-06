# Generated by Django 2.1.2 on 2018-12-07 13:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('servers', '0002_placement'),
        ('billing', '0006_service_upgrades'),
    ]

    operations = [
        migrations.CreateModel(
            name='ServiceAssignedIP',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ip_address', models.GenericIPAddressField()),
                ('service', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='assigned_ips', to='billing.Service')),
            ],
        ),
        migrations.CreateModel(
            name='ServiceHostingAccount',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('package_name', models.CharField(db_index=True, max_length=255)),
                ('account_id', models.CharField(db_index=True, help_text='Domain or another way to find an account', max_length=255)),
                ('username', models.CharField(blank=True, max_length=32, null=True)),
                ('password', models.CharField(blank=True, max_length=255, null=True)),
                ('dedicated_ip', models.GenericIPAddressField(blank=True, null=True)),
                ('server', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='hosting_accounts', to='servers.Server')),
                ('service', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='hosting_account', to='billing.Service')),
            ],
        ),
    ]
