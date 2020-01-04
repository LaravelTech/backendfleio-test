# Generated by Django 2.2.1 on 2019-05-14 08:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('openstack', '0018_openstackinstanceflavor_out_of_stock'),
    ]

    operations = [
        migrations.CreateModel(
            name='VolumeBackup',
            fields=[
                ('id', models.CharField(max_length=36, primary_key=True, serialize=False, unique=True)),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('description', models.CharField(blank=True, max_length=255, null=True)),
                ('status', models.CharField(blank=True, max_length=32)),
                ('object_count', models.IntegerField(default=0)),
                ('created_at', models.DateTimeField(blank=True, null=True)),
                ('updated_at', models.DateTimeField(blank=True, null=True)),
                ('has_dependent_backups', models.BooleanField(default=False)),
                ('size', models.IntegerField()),
                ('is_incremental', models.BooleanField(default=False)),
                ('snapshot_id', models.CharField(blank=True, default=None, max_length=36, null=True)),
                ('sync_version', models.BigIntegerField(default=0)),
                ('project', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='openstack.Project', to_field='project_id')),
                ('volume', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='openstack.Volume')),
            ],
        ),
    ]
