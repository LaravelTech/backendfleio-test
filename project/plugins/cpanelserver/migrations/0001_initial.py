# Generated by Django 2.1 on 2018-09-10 12:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('servers', '0001_initial'),
        ('billing', '0002_add_foreign_keys'),
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('domain', models.CharField(db_index=True, max_length=255)),
                ('user', models.CharField(db_index=True, max_length=32)),
                ('plan', models.CharField(db_index=True, max_length=255)),
                ('server', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='servers.Server')),
            ],
        ),
        migrations.CreateModel(
            name='ProductSettings',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('default_plan', models.CharField(blank=True, max_length=255, null=True)),
                ('product', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='cpanelserver_settings', to='billing.Product')),
                ('server_group', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='servers.ServerGroup')),
            ],
        ),
    ]
