# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jsonRequest', '0014_userrespond_accepted'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userrespond',
            name='accepted',
            field=models.NullBooleanField(default=None),
        ),
    ]
