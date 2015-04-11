# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jsonRequest', '0009_userrequest_payoff'),
    ]

    operations = [
        migrations.AddField(
            model_name='userrespond',
            name='requestID',
            field=models.ForeignKey(to='jsonRequest.UserRequest', default=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='userrespond',
            name='userID',
            field=models.ForeignKey(to='jsonRequest.User'),
        ),
    ]
