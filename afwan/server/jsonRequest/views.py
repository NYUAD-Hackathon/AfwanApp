from django.shortcuts import render
from jsonRequest.models import User
from django.http import JsonResponse
from django.forms.models import model_to_dict
# from django.core import serializers
from django.core import serializers
from django.utils import simplejson

# assuming obj is a model instance

# Create your views here.


def getUser(request, id):
    serialized_obj = serializers.serialize('json', [User.objects.get(id=1), ])
    # k =serializers.serialize("json",)
    return JsonResponse(serialized_obj, safe=False)
