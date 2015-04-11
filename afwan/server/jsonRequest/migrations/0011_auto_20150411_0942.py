# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jsonRequest', '0010_auto_20150411_0803'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userrequest',
            name='minimumRate',
            field=models.IntegerField(default=0),
        ),
    ]
