# Generated by Django 2.1.2 on 2018-10-10 11:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('domains', '0005_make_tld_name_unique'),
    ]

    operations = [
        migrations.CreateModel(
            name='RegistrarPrices',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('currency', models.CharField(max_length=8)),
                ('years', models.PositiveSmallIntegerField(default=1)),
                ('min_years', models.PositiveSmallIntegerField(default=1)),
                ('max_years', models.PositiveSmallIntegerField(default=10)),
                ('register_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('renew_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('transfer_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('promo_price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('updated_at', models.DateTimeField(auto_now=True, db_index=True)),
            ],
            options={
                'verbose_name_plural': 'Registrar prices',
                'ordering': ('updated_at',),
            },
        ),
        migrations.AlterModelOptions(
            name='registrar',
            options={'ordering': ('created_at',)},
        ),
        migrations.AddField(
            model_name='registrarprices',
            name='registrar',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='registrar_prices', to='domains.Registrar'),
        ),
        migrations.AddField(
            model_name='registrarprices',
            name='tld',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='registrar_prices', to='domains.TLD'),
        ),
        migrations.AlterUniqueTogether(
            name='registrarprices',
            unique_together={('tld', 'registrar', 'currency', 'years')},
        ),
    ]