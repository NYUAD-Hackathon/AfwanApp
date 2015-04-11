from django.shortcuts import render
from jsonRequest.models import User, UserRequest, UserRespond
from django.http import JsonResponse
from django.http import HttpResponse
from django.forms.models import model_to_dict
# from django.core import serializers
from django.core import serializers
from django.views.decorators.csrf import csrf_protect
import json
from django.views.decorators.csrf import csrf_exempt

# assuming obj is a model instance

# Create your views here.


def getUser(request, id):
    user = User.objects.get(id=1)
    result = {}
    output = {}
    result['username'] = user.username
    result['minimumpayoff'] = user.minimumpayoff
    output['result'] = result

    return JsonResponse(output)


def getUnsolved(request):

    # serialized_obj = serializers.serialize('json', UserRequest.objects.all())
    data = UserRequest.objects.filter(answered__exact=False)
    result = {}
    result.setdefault("list", [])
    for item in data:
        k = {}
        k['username'] = item.userID.username
        # k['description'] = item.description
        k['longitude'] = item.longitude
        k['latitude'] = item.latitude
        k['payoff'] = item.payoff
        k['minimumRate'] = item.minimumRate
        k['content'] = item.content
        result["list"].append(k)
    return JsonResponse(result)


@csrf_exempt
def postReq(request):
    # try:
        json_str = request.body.decode(encoding='UTF-8')
        data = json.loads(json_str)
        query = UserRequest(userID_id=data['userID'], longitude=data[
                            "longitude"], latitude=data["latitude"], content=data['content'], minimumRate=data["minimumRating"], payoff=data["payoff"])
        query.save()
        return HttpResponse(status=200)
    # except Exception as e:
    #     return HttpResponse(e, status=500)
