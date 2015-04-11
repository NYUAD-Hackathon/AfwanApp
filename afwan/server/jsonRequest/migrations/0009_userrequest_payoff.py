# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jsonRequest', '0008_auto_20150411_0800'),
    ]

    operations = [
        migrations.AddField(
            model_name='userrequest',
            name='payoff',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
    ]
