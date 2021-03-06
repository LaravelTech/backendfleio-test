# Generated by Django 2.1.2 on 2018-10-30 07:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('billing', '0005_add_visible_fix_spelling'),
        ('domains', '0012_add_contacts'),
    ]

    operations = [
        migrations.AddField(
            model_name='tld',
            name='dns_option',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='+', to='billing.ConfigurableOption'),
        ),
        migrations.AddField(
            model_name='tld',
            name='email_option',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='+', to='billing.ConfigurableOption'),
        ),
        migrations.AddField(
            model_name='tld',
            name='id_option',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='+', to='billing.ConfigurableOption'),
        ),
    ]
