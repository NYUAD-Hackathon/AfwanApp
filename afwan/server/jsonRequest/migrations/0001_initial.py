# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, verbose_name='ID', auto_created=True, serialize=False)),
                ('username', models.CharField(max_length=30)),
                ('minimumpayoff', models.FloatField()),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='UserReq',
            fields=[
                ('id', models.AutoField(primary_key=True, verbose_name='ID', auto_created=True, serialize=False)),
                ('content', models.CharField(max_length=140)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('longitude', models.FloatField()),
                ('latitude', models.FloatField()),
                ('answered', models.BooleanField()),
                ('payoff', models.FloatField()),
                ('userID', models.ForeignKey(to='jsonRequest.User')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='UserRes',
            fields=[
                ('id', models.AutoField(primary_key=True, verbose_name='ID', auto_created=True, serialize=False)),
                ('userID', models.IntegerField()),
                ('content', models.CharField(max_length=140)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('rank', models.IntegerField()),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
