from django.db import models

# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=30)
    minimumpayoff = models.FloatField()

    def __str__(self):
        return "user:" + str(self.id) + " " + self.username


class UserRequest(models.Model):
    userID = models.ForeignKey(User)
    content = models.CharField(max_length=140)
    created_at = models.DateTimeField(auto_now_add=True)
    longitude = models.FloatField()
    latitude = models.FloatField()
    answered = models.BooleanField(default=False)
    payoff = models.FloatField(default=0)
    minimumRate = models.IntegerField(default=0)

    def __str__(self):
        return self.userID.username + " asked:" + self.content


class UserRespond(models.Model):
    userID = models.ForeignKey(User)
    requestID = models.ForeignKey(UserRequest)
    content = models.CharField(null=True, max_length=140)
    created_at = models.DateTimeField(auto_now_add=True)
    rank = models.IntegerField(null=True)
    longitude = models.FloatField(null=True)
    latitude = models.FloatField(null=True)
