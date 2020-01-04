# Generated by Django 2.2.5 on 2019-11-18 15:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('osbilling', '0021_change_reseller_relation'),
        ('reseller', '0002_resellerresources_service'),
    ]

    operations = [
        migrations.AddField(
            model_name='resellerresources',
            name='plan',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='+', to='osbilling.PricingPlan'),
        ),
    ]
