# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jsonRequest', '0006_auto_20150411_0709'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserRequest',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, verbose_name='ID', auto_created=True)),
                ('content', models.CharField(max_length=140)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('longitude', models.FloatField()),
                ('latitude', models.FloatField()),
                ('answered', models.BooleanField(default=False)),
                ('payoff', models.FloatField()),
                ('userID', models.ForeignKey(to='jsonRequest.User')),
            ],
        ),
        migrations.RenameModel(
            old_name='UserRes',
            new_name='UserRespond',
        ),
        migrations.RemoveField(
            model_name='userreq',
            name='userID',
        ),
        migrations.DeleteModel(
            name='UserReq',
        ),
    ]
