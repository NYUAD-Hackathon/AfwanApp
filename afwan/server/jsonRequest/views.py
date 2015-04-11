from django.shortcuts import render
from jsonRequest.models import User, UserRequest, UserRespond
from django.http import JsonResponse
from django.http import HttpResponse
from django.forms.models import model_to_dict
# from django.core import serializers
from django.core import serializers
from django.views.decorators.csrf import csrf_protect
import json

# assuming obj is a model instance

# Create your views here.


def getUser(request, id):
    serialized_obj = serializers.serialize('json', [User.objects.get(id=1), ])
    # k =serializers.serialize("json",)
    return JsonResponse(serialized_obj, safe=False)


def getUnsolved(request):
    serialized_obj = serializers.serialize('json', UserRequest.objects.all())
    return HttpResponse(serialized_obj)


def postReq(request):
    json_str = request.body.decode(encoding='UTF-8')
    data = json.loads(json_str)
    return HttpResponse(data['content'], status=200)
