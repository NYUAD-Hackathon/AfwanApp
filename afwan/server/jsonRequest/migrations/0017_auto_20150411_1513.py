# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jsonRequest', '0016_auto_20150411_1512'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userrespond',
            name='latitude',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='userrespond',
            name='longitude',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
