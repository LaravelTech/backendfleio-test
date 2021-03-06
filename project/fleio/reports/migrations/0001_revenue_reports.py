# Generated by Django 2.1.7 on 2019-03-10 12:03

from django.db import migrations, models
import django.db.models.deletion
import jsonfield.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('core', '0008_client_extra_statuses'),
    ]

    operations = [
        migrations.CreateModel(
            name='ClientLocationRevenue',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=255)),
                ('revenue', models.DecimalField(decimal_places=2, default='0.00', max_digits=14)),
            ],
        ),
        migrations.CreateModel(
            name='ClientRevenueReport',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('client_display_name', models.CharField(blank=True, max_length=255, null=True)),
                ('credit_in', models.DecimalField(decimal_places=2, default='0.00', max_digits=14)),
                ('credit_out', models.DecimalField(decimal_places=2, default='0.00', max_digits=14)),
                ('credit_available', models.DecimalField(decimal_places=2, default='0.00', max_digits=14)),
                ('total_debt', models.DecimalField(decimal_places=2, default='0.00', max_digits=14)),
                ('total_alloted_from_credit', models.DecimalField(decimal_places=2, default='0.00', max_digits=14)),
                ('start_date', models.DateField()),
                ('end_date', models.DateField()),
                ('client', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='core.Client')),
            ],
        ),
        migrations.CreateModel(
            name='MonthlyLocationRevenue',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=255)),
                ('revenue', models.DecimalField(decimal_places=2, default='0.00', max_digits=14)),
            ],
        ),
        migrations.CreateModel(
            name='MonthlyRevenueReport',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_date', models.DateTimeField()),
                ('end_date', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='ServiceEntriesReport',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, default='0.00', max_digits=14)),
                ('item_type', models.CharField(max_length=64)),
                ('from_credit', models.BooleanField(default=False)),
                ('taxes_amount', models.DecimalField(decimal_places=2, default='0.00', max_digits=14)),
                ('taxes_percent', models.DecimalField(decimal_places=2, default='0', max_digits=5)),
                ('source', models.CharField(max_length=3)),
                ('date', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='ServiceRevenueReport',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('service_id', models.CharField(max_length=255)),
                ('service_name', models.CharField(max_length=255)),
                ('service_description', models.CharField(blank=True, max_length=255, null=True)),
                ('price_overridden', models.BooleanField()),
                ('fixed_monthly_price', models.DecimalField(decimal_places=2, default='0.00', max_digits=14)),
                ('total_paid_from_invoices', models.DecimalField(decimal_places=2, default='0.00', max_digits=14)),
                ('total_paid_from_credit', models.DecimalField(decimal_places=2, default='0.00', max_digits=14)),
                ('cost_still_required', models.DecimalField(decimal_places=2, default='0.00', max_digits=14)),
                ('cost_required_percent', models.DecimalField(decimal_places=2, max_digits=5)),
                ('alloted_from_credit', models.DecimalField(decimal_places=2, default='0.00', max_digits=14)),
                ('debt', models.DecimalField(decimal_places=2, default='0.00', max_digits=14)),
                ('report', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='services_report', to='reports.ClientRevenueReport')),
            ],
        ),
        migrations.CreateModel(
            name='ServiceUsageDetailsReport',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('locations', jsonfield.fields.JSONField(default={})),
                ('location_costs', jsonfield.fields.JSONField(default={})),
                ('total_cost', models.DecimalField(decimal_places=2, default='0.00', max_digits=14)),
                ('service_report', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='usage_details', to='reports.ServiceRevenueReport')),
            ],
        ),
        migrations.AddField(
            model_name='serviceentriesreport',
            name='service_report',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='entries', to='reports.ServiceRevenueReport'),
        ),
        migrations.AddField(
            model_name='monthlylocationrevenue',
            name='report',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='total_revenue_per_location', to='reports.MonthlyRevenueReport'),
        ),
        migrations.AddField(
            model_name='clientrevenuereport',
            name='monthly_revenue_report',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='revenue_report', to='reports.MonthlyRevenueReport'),
        ),
        migrations.AddField(
            model_name='clientlocationrevenue',
            name='report',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='revenue_per_location', to='reports.ClientRevenueReport'),
        ),
    ]
