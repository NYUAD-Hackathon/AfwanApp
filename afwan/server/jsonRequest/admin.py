from django.contrib import admin
<<<<<<< HEAD
from jsonRequest.models import User

admin.site.register(User)
=======
from jsonRequest.models import User, UserRequest, UserRespond

admin.site.register(UserRequest)
admin.site.register(User)
admin.site.register(UserRespond)

>>>>>>> django
# Register your models here.
