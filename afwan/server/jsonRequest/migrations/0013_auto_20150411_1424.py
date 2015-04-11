# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jsonRequest', '0012_auto_20150411_1319'),
    ]

    operations = [
        migrations.AddField(
            model_name='userrespond',
            name='latitude',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='userrespond',
            name='longitude',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='userrespond',
            name='content',
            field=models.CharField(max_length=140, null=True),
        ),
    ]
