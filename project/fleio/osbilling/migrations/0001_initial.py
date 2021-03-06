# Generated by Django 2.1 on 2018-09-10 12:43

from django.db import migrations, models
import django.db.models.deletion
import jsonfield.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BillingResource',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('display_name', models.CharField(max_length=255)),
                ('type', models.CharField(db_index=True, max_length=128)),
                ('name', models.CharField(db_index=True, max_length=128)),
                ('definition', jsonfield.fields.JSONField(default={})),
            ],
        ),
        migrations.CreateModel(
            name='ClientBilling',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_date', models.DateField()),
                ('end_date', models.DateField()),
                ('price', models.DecimalField(decimal_places=4, default=0, max_digits=16)),
                ('updated_at', models.DateTimeField(blank=True, null=True)),
                ('usage', jsonfield.fields.JSONField(blank=True, null=True)),
                ('client', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='client_billing', to='core.Client')),
            ],
            options={
                'ordering': ['-updated_at'],
            },
        ),
        migrations.CreateModel(
            name='ClientBillingHistory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_date', models.DateField(db_index=True)),
                ('end_date', models.DateField(db_index=True)),
                ('price', models.DecimalField(decimal_places=4, default=0, max_digits=16)),
                ('updated_at', models.DateTimeField(blank=True, null=True)),
                ('usage', jsonfield.fields.JSONField(blank=True, null=True)),
                ('state', models.CharField(choices=[('unsettled', 'Unsettled'), ('invoiced', 'Invoiced'), ('settled', 'Settled')], db_index=True, default='settled', max_length=32)),
                ('client_billing', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='billing_cycle_history', to='osbilling.ClientBilling')),
            ],
        ),
        migrations.CreateModel(
            name='PricingPlan',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('is_default', models.BooleanField(default=False)),
                ('currency', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.Currency')),
            ],
        ),
        migrations.CreateModel(
            name='PricingRule',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('display_name', models.CharField(max_length=255)),
                ('priority', models.IntegerField(db_index=True, default=1)),
                ('pricing', jsonfield.fields.JSONField()),
                ('plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='pricing_rules', to='osbilling.PricingPlan')),
                ('resource', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='pricing_rules', to='osbilling.BillingResource')),
            ],
        ),
        migrations.CreateModel(
            name='PricingRuleCondition',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='condition', max_length=128)),
                ('attribute', models.CharField(db_index=True, max_length=128)),
                ('attribute_unit', models.CharField(blank=True, choices=[('u', 'Units'), ('b', 'Bytes'), ('k', 'Kilobytes'), ('m', 'Megabytes'), ('g', 'Gigabytes'), ('t', 'Terabytes'), ('p', 'Petabytes')], max_length=4, null=True)),
                ('operator', models.CharField(choices=[('lt', 'Less than'), ('le', 'Less or equal'), ('gt', 'Greater than'), ('ge', 'Greater or equal'), ('eq', 'Equal'), ('ne', 'Not equal'), ('in', 'In'), ('ni', 'Not in')], default='eq', max_length=2)),
                ('value', jsonfield.fields.JSONField()),
                ('price_rule', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='conditions', to='osbilling.PricingRule')),
            ],
        ),
        migrations.CreateModel(
            name='PricingRuleModifier',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='modifier', max_length=128)),
                ('attribute', models.CharField(db_index=True, max_length=128)),
                ('attribute_unit', models.CharField(blank=True, choices=[('u', 'Units'), ('b', 'Bytes'), ('k', 'Kilobytes'), ('m', 'Megabytes'), ('g', 'Gigabytes'), ('t', 'Terabytes'), ('p', 'Petabytes')], max_length=4, null=True)),
                ('operator', models.CharField(choices=[('lt', 'Less than'), ('le', 'Less or equal'), ('gt', 'Greater than'), ('ge', 'Greater or equal'), ('eq', 'Equal'), ('ne', 'Not equal'), ('in', 'In'), ('ni', 'Not in')], default='eq', max_length=2)),
                ('value', jsonfield.fields.JSONField()),
                ('price', models.DecimalField(decimal_places=4, max_digits=12)),
                ('time_unit', models.CharField(choices=[('s', 'Second'), ('m', 'Minute'), ('h', 'Hour'), ('bc', 'Billing cycle'), ('d', 'Day')], max_length=3)),
                ('price_rule', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='modifiers', to='osbilling.PricingRule')),
            ],
        ),
        migrations.CreateModel(
            name='ResourceUsageLog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('resource_type', models.CharField(max_length=128)),
                ('resource_uuid', models.UUIDField(db_index=True)),
                ('project_id', models.UUIDField(blank=True, null=True)),
                ('user_id', models.UUIDField(blank=True, null=True)),
                ('start', models.DateTimeField(db_index=True)),
                ('end', models.DateTimeField(blank=True, null=True)),
                ('traits', jsonfield.fields.JSONField()),
            ],
        ),
        migrations.AlterUniqueTogether(
            name='resourceusagelog',
            unique_together={('resource_uuid', 'end')},
        ),
        migrations.AddField(
            model_name='clientbilling',
            name='plan',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='client_billing', to='osbilling.PricingPlan'),
        ),
        migrations.AlterUniqueTogether(
            name='billingresource',
            unique_together={('type', 'name')},
        ),
    ]
