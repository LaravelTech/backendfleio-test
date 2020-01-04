# Generated by Django 2.1.2 on 2018-12-07 18:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('servers', '0002_placement'),
    ]

    operations = [
        migrations.CreateModel(
            name='HostingServerSettings',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hostname', models.CharField(blank=True, max_length=255, null=True)),
                ('username', models.CharField(blank=True, max_length=255, null=True)),
                ('password', models.CharField(blank=True, max_length=255, null=True)),
                ('api_token', models.TextField(blank=True, max_length=4096, null=True)),
                ('secure', models.BooleanField(default=True, help_text='Use SSL for API url or not')),
                ('port', models.PositiveSmallIntegerField(default=0, help_text='API url port')),
                ('max_accounts', models.IntegerField(default=0, help_text='Max number of accounts to place on this server')),
                ('quality', models.PositiveSmallIntegerField(default=0, help_text='Quality of server for different accounts')),
                ('assigned_ips', models.TextField(blank=True, max_length=4096, null=True)),
                ('status_url', models.CharField(blank=True, max_length=255, null=True)),
                ('location', models.CharField(blank=True, help_text='Optional location for this server', max_length=255, null=True)),
                ('server', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='hosting_settings', to='servers.Server')),
            ],
        ),
    ]
