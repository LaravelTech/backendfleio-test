# Generated by Django 2.1.7 on 2019-04-10 15:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('openstack', '0015_openstackproductsettings'),
    ]

    operations = [
        migrations.CreateModel(
            name='NetworkPortResource',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_check', models.DateTimeField(blank=True, null=True)),
                ('instance_id', models.CharField(db_index=True, max_length=255)),
                ('resource_id', models.CharField(db_index=True, max_length=255)),
                ('vnic_name', models.CharField(max_length=256)),
                ('found_port_id', models.CharField(db_index=True, max_length=255, null=True)),
                ('project_id', models.CharField(blank=True, db_index=True, max_length=255, null=True)),
                ('is_private', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='NetworkPortTraffic',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('incoming_bytes', models.BigIntegerField(default=0)),
                ('incoming_bytes_start', models.BigIntegerField(default=0)),
                ('incoming_bytes_end', models.BigIntegerField(default=0)),
                ('incoming_bytes_accumulation', models.BigIntegerField(default=0)),
                ('last_incoming_metric', models.BigIntegerField(default=0)),
                ('outgoing_bytes', models.BigIntegerField(default=0)),
                ('outgoing_bytes_start', models.BigIntegerField(default=0)),
                ('outgoing_bytes_end', models.BigIntegerField(default=0)),
                ('outgoing_bytes_accumulation', models.BigIntegerField(default=0)),
                ('last_outgoing_metric', models.BigIntegerField(default=0)),
                ('start_datetime', models.DateTimeField(blank=True, null=True)),
                ('end_datetime', models.DateTimeField(blank=True, null=True)),
                ('type', models.CharField(max_length=64)),
                ('resource', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='traffic_data', to='openstack.NetworkPortResource')),
            ],
        ),
        migrations.AddField(
            model_name='instance',
            name='current_cycle_traffic',
            field=models.BigIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='instance',
            name='current_month_traffic',
            field=models.BigIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='networkportresource',
            name='existing_instance',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='port_resources', to='openstack.Instance'),
        ),
        migrations.AddField(
            model_name='networkportresource',
            name='network',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='port_resources', to='openstack.Network'),
        ),
        migrations.AddField(
            model_name='networkportresource',
            name='port',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='openstack.Port'),
        ),
        migrations.AddField(
            model_name='networkportresource',
            name='region',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='openstack.OpenstackRegion'),
        ),
        migrations.AddField(
            model_name='networkportresource',
            name='subnet',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='port_resources', to='openstack.Subnet'),
        ),
    ]
