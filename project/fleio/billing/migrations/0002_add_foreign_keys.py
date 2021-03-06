# Generated by Django 2.1 on 2018-09-10 12:43

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import fleio.core.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('core', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('billing', '0001_initial_billing'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction',
            name='currency',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.Currency'),
        ),
        migrations.AddField(
            model_name='transaction',
            name='gateway',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='transactions', to='billing.Gateway'),
        ),
        migrations.AddField(
            model_name='transaction',
            name='invoice',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='transactions', to='billing.Invoice'),
        ),
        migrations.AddField(
            model_name='transaction',
            name='refunded_transaction',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='refund_transactions', to='billing.Transaction'),
        ),
        migrations.AddField(
            model_name='serviceconfigurableoption',
            name='option',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='services', to='billing.ConfigurableOption'),
        ),
        migrations.AddField(
            model_name='serviceconfigurableoption',
            name='service',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='configurable_options', to='billing.Service'),
        ),
        migrations.AddField(
            model_name='service',
            name='cancellation_request',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='service', to='billing.CancellationRequest'),
        ),
        migrations.AddField(
            model_name='service',
            name='client',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='services', to='core.Client'),
        ),
        migrations.AddField(
            model_name='service',
            name='cycle',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='services', to='billing.ProductCycle'),
        ),
        migrations.AddField(
            model_name='service',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='services', to='billing.Product'),
        ),
        migrations.AddField(
            model_name='productmodule',
            name='plugin',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='product_modules', to='core.Plugin'),
        ),
        migrations.AddField(
            model_name='productcycle',
            name='currency',
            field=models.ForeignKey(blank=True, default=fleio.core.models.get_default_currency, null=True, on_delete=django.db.models.deletion.SET_DEFAULT, to='core.Currency'),
        ),
        migrations.AddField(
            model_name='productcycle',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='cycles', to='billing.Product'),
        ),
        migrations.AddField(
            model_name='productconfigurableoption',
            name='configurable_option',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='billing.ConfigurableOption'),
        ),
        migrations.AddField(
            model_name='productconfigurableoption',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='billing.Product'),
        ),
        migrations.AddField(
            model_name='product',
            name='configurable_options',
            field=models.ManyToManyField(blank=True, related_name='products', through='billing.ProductConfigurableOption', to='billing.ConfigurableOption'),
        ),
        migrations.AddField(
            model_name='product',
            name='group',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='products', to='billing.ProductGroup'),
        ),
        migrations.AddField(
            model_name='product',
            name='module',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='products', to='billing.ProductModule'),
        ),
        migrations.AddField(
            model_name='orderitemtax',
            name='cart_item',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='taxes', to='billing.OrderItem'),
        ),
        migrations.AddField(
            model_name='orderitemconfigurableoption',
            name='option',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='order_items_configurable_options', to='billing.ConfigurableOption'),
        ),
        migrations.AddField(
            model_name='orderitemconfigurableoption',
            name='order_item',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='configurable_options', to='billing.OrderItem'),
        ),
        migrations.AddField(
            model_name='orderitem',
            name='cart',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='items', to='billing.FleioCart'),
        ),
        migrations.AddField(
            model_name='orderitem',
            name='cycle',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='billing.ProductCycle'),
        ),
        migrations.AddField(
            model_name='orderitem',
            name='order',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='items', to='billing.Order'),
        ),
        migrations.AddField(
            model_name='orderitem',
            name='product',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='billing.Product'),
        ),
        migrations.AddField(
            model_name='orderitem',
            name='service',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='order_item', to='billing.Service'),
        ),
        migrations.AddField(
            model_name='order',
            name='client',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='orders', to='core.Client'),
        ),
        migrations.AddField(
            model_name='order',
            name='currency',
            field=models.ForeignKey(default=fleio.core.models.get_default_currency, on_delete=django.db.models.deletion.CASCADE, to='core.Currency'),
        ),
        migrations.AddField(
            model_name='order',
            name='invoice',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='order', to='billing.Invoice'),
        ),
        migrations.AddField(
            model_name='order',
            name='user',
            field=models.ForeignKey(help_text='User who placed the order. Can be a staff user.', on_delete=django.db.models.deletion.CASCADE, related_name='orders', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='journal',
            name='client_credit',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='journalentries', to='billing.ClientCredit'),
        ),
        migrations.AddField(
            model_name='journal',
            name='destination_currency',
            field=models.ForeignKey(default=fleio.core.models.get_default_currency, on_delete=django.db.models.deletion.CASCADE, related_name='journal_destination_currencies', to='core.Currency'),
        ),
        migrations.AddField(
            model_name='journal',
            name='invoice',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='journalentries', to='billing.Invoice'),
        ),
        migrations.AddField(
            model_name='journal',
            name='source_currency',
            field=models.ForeignKey(default=fleio.core.models.get_default_currency, on_delete=django.db.models.deletion.CASCADE, related_name='journal_source_currencies', to='core.Currency'),
        ),
        migrations.AddField(
            model_name='journal',
            name='transaction',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='billing.Transaction'),
        ),
        migrations.AddField(
            model_name='journal',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='invoiceitemtax',
            name='item',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='taxes', to='billing.InvoiceItem'),
        ),
        migrations.AddField(
            model_name='invoiceitemtax',
            name='tax_rule',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='billing.TaxRule'),
        ),
        migrations.AddField(
            model_name='invoiceitemconfigurableoption',
            name='invoice_item',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='configurable_options', to='billing.InvoiceItem'),
        ),
        migrations.AddField(
            model_name='invoiceitemconfigurableoption',
            name='option',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='invoice_items_configurable_options', to='billing.ConfigurableOption'),
        ),
        migrations.AddField(
            model_name='invoiceitem',
            name='invoice',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='items', to='billing.Invoice'),
        ),
        migrations.AddField(
            model_name='invoiceitem',
            name='service',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='billing.Service'),
        ),
        migrations.AddField(
            model_name='invoice',
            name='client',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.Client'),
        ),
        migrations.AddField(
            model_name='invoice',
            name='currency',
            field=models.ForeignKey(default=fleio.core.models.get_default_currency, on_delete=django.db.models.deletion.CASCADE, to='core.Currency'),
        ),
        migrations.AddField(
            model_name='gatewaylog',
            name='gateway',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='gateway_logs', to='billing.Gateway'),
        ),
        migrations.AddField(
            model_name='fleiocart',
            name='client',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='fleio_cart', to='core.Client'),
        ),
        migrations.AddField(
            model_name='fleiocart',
            name='currency',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='core.Currency'),
        ),
        migrations.AddField(
            model_name='fleiocart',
            name='user',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='fleio_cart', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='configurableoptioncycle',
            name='currency',
            field=models.ForeignKey(blank=True, default=fleio.core.models.get_default_currency, null=True, on_delete=django.db.models.deletion.SET_DEFAULT, to='core.Currency'),
        ),
        migrations.AddField(
            model_name='configurableoptioncycle',
            name='option',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cycles', to='billing.ConfigurableOption'),
        ),
        migrations.AddField(
            model_name='configurableoptioncycle',
            name='value',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cycles', to='billing.ConfigurableOptionChoice'),
        ),
        migrations.AddField(
            model_name='configurableoptionchoice',
            name='option',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='choices', to='billing.ConfigurableOption'),
        ),
        migrations.AddField(
            model_name='clientcredit',
            name='client',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='credits', to='core.Client'),
        ),
        migrations.AddField(
            model_name='clientcredit',
            name='currency',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='core.Currency'),
        ),
        migrations.AddField(
            model_name='cancellationrequest',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterUniqueTogether(
            name='productcycle',
            unique_together={('product', 'cycle', 'cycle_multiplier', 'currency')},
        ),
        migrations.AlterUniqueTogether(
            name='productconfigurableoption',
            unique_together={('product', 'configurable_option')},
        ),
        migrations.AlterUniqueTogether(
            name='configurableoptionchoice',
            unique_together={('option', 'choice')},
        ),
        migrations.AlterUniqueTogether(
            name='clientcredit',
            unique_together={('client', 'currency')},
        ),
    ]
