# Generated by Django 2.2.3 on 2019-07-26 11:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('core', '0011_operation'),
    ]

    operations = [
        migrations.CreateModel(
            name='RecurringPayments',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=False)),
                ('first_payment', models.BooleanField(db_index=True, default=True)),
                ('recur_ref', models.CharField(max_length=255, null=True)),
                ('int_ref', models.CharField(max_length=255, null=True)),
                ('client', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='core.Client')),
            ],
        ),
    ]
