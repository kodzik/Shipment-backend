# Generated by Django 4.0.4 on 2022-05-20 13:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shipment',
            name='shipment_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
