# Generated by Django 2.2.10 on 2020-03-04 23:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0003_auto_20200225_1531"),
    ]

    operations = [
        migrations.AlterField(
            model_name="customtext",
            name="title",
            field=models.CharField(max_length=150, null=True),
        ),
    ]
