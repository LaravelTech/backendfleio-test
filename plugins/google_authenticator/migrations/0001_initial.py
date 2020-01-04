# Generated by Django 2.2.1 on 2019-06-05 13:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('core', '0009_secondfactorauthmethod_secondfactorauthtype'),
    ]

    operations = [
        migrations.CreateModel(
            name='GoogleAuthenticatorData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('secret_key', models.CharField(max_length=1024)),
                ('method', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='core.SecondFactorAuthMethod')),
            ],
        ),
    ]
