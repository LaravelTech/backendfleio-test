# Generated by Django 2.2.1 on 2019-05-14 09:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('billing', '0010_client_credit_left'),
    ]

    operations = [
        migrations.AlterField(
            model_name='configurableoptioncycle',
            name='cycle_multiplier',
            field=models.IntegerField(db_index=True, default=1),
        ),
        migrations.AlterField(
            model_name='productcycle',
            name='cycle_multiplier',
            field=models.IntegerField(default=1),
        ),
    ]
