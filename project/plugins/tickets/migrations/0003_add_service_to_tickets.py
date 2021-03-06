# Generated by Django 2.1.2 on 2018-10-10 08:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('billing', '0004_productgroup_visible'),
        ('tickets', '0002_make_email_unique_for_departments_and_add_notifications'),
    ]

    operations = [
        migrations.AddField(
            model_name='ticket',
            name='service',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='billing.Service'),
        ),
    ]
