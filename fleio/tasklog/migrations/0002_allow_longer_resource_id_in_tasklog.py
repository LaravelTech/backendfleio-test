# Generated by Django 2.1.7 on 2019-02-20 12:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasklog', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='resource_id',
            field=models.CharField(blank=True, help_text='The Fleio resource this task is associated with.', max_length=1024, null=True),
        ),
    ]
