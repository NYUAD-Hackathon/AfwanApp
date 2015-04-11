# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jsonRequest', '0007_auto_20150411_0709'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userrequest',
            name='payoff',
        ),
        migrations.AddField(
            model_name='userrequest',
            name='minimumRate',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
