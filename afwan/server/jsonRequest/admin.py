from django.contrib import admin
from jsonRequest.models import User, UserRequest, UserRespond

admin.site.register(UserRequest)
admin.site.register(User)
admin.site.register(UserRespond)

# Register your models here.
