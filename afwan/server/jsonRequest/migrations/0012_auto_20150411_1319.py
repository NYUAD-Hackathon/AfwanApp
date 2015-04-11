# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jsonRequest', '0011_auto_20150411_0942'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userrequest',
            name='payoff',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='userrespond',
            name='rank',
            field=models.IntegerField(null=True),
        ),
    ]
