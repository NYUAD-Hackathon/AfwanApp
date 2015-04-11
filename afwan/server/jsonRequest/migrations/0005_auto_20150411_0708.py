# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jsonRequest', '0004_auto_20150411_0706'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='UserReq',
            new_name='UserReq1',
        ),
    ]
