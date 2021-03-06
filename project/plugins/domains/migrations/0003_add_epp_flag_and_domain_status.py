# Generated by Django 2.1 on 2018-10-03 12:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('domains', '0002_adjusted_domain_defaults'),
    ]

    operations = [
        migrations.AddField(
            model_name='domain',
            name='status',
            field=models.CharField(default='undefined', max_length=100),
        ),
        migrations.AddField(
            model_name='tld',
            name='requires_epp_for_transfer',
            field=models.BooleanField(blank=True, default=True),
        ),
        migrations.AlterField(
            model_name='tld',
            name='name',
            field=models.CharField(max_length=65),
        ),
        migrations.AlterField(
            model_name='tld',
            name='registrars',
            field=models.ManyToManyField(blank=True, related_name='tlds', to='domains.Registrar'),
        ),
    ]
