# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jsonRequest', '0013_auto_20150411_1424'),
    ]

    operations = [
        migrations.AddField(
            model_name='userrespond',
            name='accepted',
            field=models.BooleanField(default=False),
        ),
    ]
