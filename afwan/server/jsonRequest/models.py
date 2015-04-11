from django.db import models

# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=30)
    minimumpayoff = models.FloatField()
    def __str__(self):
        return str(self.id)

class UserRequest(models.Model):
    userID = models.ForeignKey(User)
    content = models.CharField(max_length=140)
    created_at = models.DateTimeField(auto_now_add=True)
    longitude = models.FloatField()
    latitude = models.FloatField()
    answered = models.BooleanField(default=False)
    payoff = models.FloatField()


class UserRespond(models.Model):
    userID = models.IntegerField()
    content = models.CharField(max_length=140)
    created_at = models.DateTimeField(auto_now_add=True)
    rank = models.IntegerField()
