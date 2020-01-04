# Generated by Django 2.0.2 on 2018-02-20 09:29
import logging
from datetime import datetime as dt

from django.db import migrations, models
from django.utils import timezone

from fleio.core.utils import RandomId


def forward_func(apps, schema_editor):
    # We get the model from the versioned app registry;
    # if we directly import it, it'll be the wrong version
    Service = apps.get_model('billing', 'Service')
    Product = apps.get_model('billing', 'Product')
    ProductCycle = apps.get_model('billing', 'ProductCycle')
    ProductGroup = apps.get_model('billing', 'ProductGroup')
    ProductModule = apps.get_model('billing', 'ProductModule')
    Project = apps.get_model('openstack', 'Project')

    # get or create default product group
    default_product_group = ProductGroup.objects.filter(name='Default Openstack Product Group').first()
    if default_product_group is None:
        default_product_group = ProductGroup(name='Default Openstack Product Group',
                                             description='Used internally by Fleio for automatically created services')
        default_product_group.save()

    # get or create default product module
    product_defaults = {'name': 'Openstack Module',
                        'description': 'Module used to manage openstack services.',
                        'config': '{}'}
    default_product_module, pmcr = ProductModule.objects.get_or_create(path='fleio.billing.modules.openstack.OpenStack',
                                                                       defaults=product_defaults)

    # get or create default openstack product
    default_openstack_product = Product.objects.filter(name='Default Openstack Product').first()
    if default_openstack_product is None:
        default_openstack_product = Product(id=RandomId(Product)())
        default_openstack_product.name = 'Default Openstack Product'
        default_openstack_product.description = 'Default Openstack product used for automatically created services'
        default_openstack_product.code = 'default_openstack'
        default_openstack_product.group = default_product_group
        default_openstack_product.module = default_product_module
        # see ProductTypes for details
        default_openstack_product.product_type = 'openstack'
        # see PublicStatuses for details
        default_openstack_product.status = 'private'
        # see PricingModel for details
        default_openstack_product.price_model = 'fixed_and_dynamic'
        default_openstack_product.save()

    # create product cycles
    product_cycle_monthly = ProductCycle()
    product_cycle_monthly.product = default_openstack_product
    # see CyclePeriods for details
    product_cycle_monthly.cycle = 'month'
    product_cycle_monthly.cycle_multiplier = 1.0
    # see PublicStatuses for details
    product_cycle_monthly.status = 'private'
    product_cycle_monthly.save()

    product_cycle_quarterly = ProductCycle()
    product_cycle_quarterly.product = default_openstack_product
    # see CyclePeriods for details
    product_cycle_quarterly.cycle = 'month'
    product_cycle_quarterly.cycle_multiplier = 3.0
    # see PublicStatuses for details
    product_cycle_quarterly.status = 'private'
    product_cycle_quarterly.save()

    product_cycle_yearly = ProductCycle()
    product_cycle_yearly.product = default_openstack_product
    # see CyclePeriods for details
    product_cycle_yearly.cycle = 'year'
    product_cycle_yearly.cycle_multiplier = 1.0
    # see PublicStatuses for details
    product_cycle_yearly.status = 'private'
    product_cycle_yearly.save()

    # create service for each project
    for project in Project.objects.all():
        service = Service()
        service.client = project.client
        service.product = default_openstack_product

        if isinstance(project.extras, dict):
            project_name = 'Cloud Project {}'.format(project.extras.get('name', project.project_id))
        else:
            project_name = 'Cloud Project {}'.format(project.project_id)

        service.display_name = project_name
        service.created_at = project.client.date_created
        service.activated_at = project.client.date_created
        service.cycle = product_cycle_monthly

        if project.disabled and not project.deleted:
            service.suspended_at = timezone.now()
            service.status = 'suspended'
            if project.fleio_disabled_reason == 'need_payment':
                service.suspend_type = 'overdue'
                service.suspend_reason = 'Payment Overdue'
            elif project.fleio_disabled_reason == 'admin_locked':
                service.suspend_type = 'staff'
                service.suspend_reason = 'Suspended by staff'
        elif project.deleted:
            service.status = 'terminated'
            service.terminated_at = timezone.now()
        else:
            service.status = 'active'

        # Try to get the existing client billing start and end
        try:
            client_billing = project.client.client_billing
            service.next_due_date = dt.combine(client_billing.end_date, dt.min.time()).replace(tzinfo=timezone.utc)
            service.next_invoice_date = dt.combine(client_billing.end_date, dt.min.time()).replace(tzinfo=timezone.utc)
        except Exception as e:
            logging.exception(e)

        service.save()
        # update project
        project.service = service
        project.save()


class Migration(migrations.Migration):

    dependencies = [
        ('openstack', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(forward_func),
    ]
