from django.db import models

# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=30)
    minimumpayoff = models.FloatField()
    def __str__(self):
<<<<<<< HEAD
        return self.id

class UserReq(models.Model):
=======
        return str(self.id)

class UserRequest(models.Model):
>>>>>>> django
    userID = models.ForeignKey(User)
    content = models.CharField(max_length=140)
    created_at = models.DateTimeField(auto_now_add=True)
    longitude = models.FloatField()
    latitude = models.FloatField()
    answered = models.BooleanField(default=False)
    payoff = models.FloatField()


<<<<<<< HEAD
class UserRes(models.Model):
=======
class UserRespond(models.Model):
>>>>>>> django
    userID = models.IntegerField()
    content = models.CharField(max_length=140)
    created_at = models.DateTimeField(auto_now_add=True)
    rank = models.IntegerField()
