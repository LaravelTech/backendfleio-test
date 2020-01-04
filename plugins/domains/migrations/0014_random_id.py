# Generated by Django 2.1.2 on 2018-12-06 10:40

from django.db import migrations, models
import fleio.core.utils


def copy_domain_to_nameservers_big(apps, schema_editor):
    """NO NEED TO KEEP THIS ON MIGRATIONS SQUASH"""
    domain = apps.get_model('domains', 'Domain')
    for dom in domain.objects.all():
        if dom.nameservers.count() > 0:
            for domns in dom.nameservers.all():
                dom.nameservers_big.add(domns)


def copy_domain_to_nameservers(apps, schema_editor):
    """NO NEED TO KEEP THIS ON MIGRATIONS SQUASH"""
    domain = apps.get_model('domains', 'Domain')
    for dom in domain.objects.all():
        if dom.nameservers_big.count() > 0:
            for domns in dom.nameservers_big.all():
                dom.nameservers.add(domns)


class Migration(migrations.Migration):

    dependencies = [
        ('domains', '0013_add_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='domain',
            name='nameservers',
            field=models.ManyToManyField(blank=True, db_constraint=False, related_name='domains',
                                         to='domains.Nameserver'),
        ),
        migrations.AlterField(
            model_name='domain',
            name='id',
            field=models.BigIntegerField(default=fleio.core.utils.RandomId('plugins.Domain'), primary_key=True, serialize=False, unique=True),
        ),
        migrations.AddField(
            model_name='domain',
            name='nameservers_big',
            field=models.ManyToManyField(blank=True, related_name='domains_big', to='domains.Nameserver'),
        ),
        migrations.RunPython(copy_domain_to_nameservers_big),
        migrations.RemoveField(
            model_name='domain',
            name='nameservers',
        ),
        migrations.AddField(
            model_name='domain',
            name='nameservers',
            field=models.ManyToManyField(related_name='domains', to='domains.Nameserver', blank=True),
        ),
        migrations.RunPython(copy_domain_to_nameservers),
        migrations.RemoveField(
            model_name='domain',
            name='nameservers_big',
        ),
    ]
