# Generated by Django 2.2.10 on 2020-03-05 20:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0002_auto_20200221_1548"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="name",
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
