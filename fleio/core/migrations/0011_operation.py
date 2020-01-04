# Generated by Django 2.2.3 on 2019-07-15 08:51

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0010_appuser_mobile_phone_number'),
    ]

    operations = [
        migrations.CreateModel(
            name='Operation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('operation_type', models.CharField(db_index=True, max_length=255)),
                ('params', models.CharField(max_length=10240, null=True)),
                ('primary_object_id', models.CharField(max_length=36, null=True)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('status', models.CharField(blank=True, max_length=32, null=True)),
                ('completed', models.BooleanField(db_index=True, default=False)),
            ],
        ),
    ]
