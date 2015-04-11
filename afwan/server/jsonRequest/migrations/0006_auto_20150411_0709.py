# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jsonRequest', '0005_auto_20150411_0708'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserReq',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', auto_created=True, primary_key=True)),
                ('content', models.CharField(max_length=140)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('longitude', models.FloatField()),
                ('latitude', models.FloatField()),
                ('answered', models.BooleanField(default=False)),
                ('payoff', models.FloatField()),
                ('userID', models.ForeignKey(to='jsonRequest.User')),
            ],
        ),
        migrations.DeleteModel(
            name='UserReq1',
        ),
    ]
