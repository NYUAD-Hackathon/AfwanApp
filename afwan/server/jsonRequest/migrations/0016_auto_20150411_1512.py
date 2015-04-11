# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jsonRequest', '0015_auto_20150411_1510'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userrespond',
            name='content',
            field=models.CharField(null=True, blank=True, max_length=140),
        ),
        migrations.AlterField(
            model_name='userrespond',
            name='rank',
            field=models.IntegerField(null=True, blank=True),
        ),
    ]
