# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jsonRequest', '0003_remove_userreq_userid'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userreq',
            name='answered',
        ),
        migrations.RemoveField(
            model_name='userreq',
            name='content',
        ),
        migrations.RemoveField(
            model_name='userreq',
            name='created_at',
        ),
    ]
