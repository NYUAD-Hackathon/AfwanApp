from jsonRequest.models import User, UserRequest, UserRespond
from django.http import JsonResponse
from django.http import HttpResponse
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


def getUnsolvedHigh(request, payoff):
    result = getUnsolvedHigher(payoff)
    return JsonResponse(result)


def getUnsolvedHigher(minimumRate):
    data = UserRequest.objects.filter(
        answered__exact=False).filter(payoff__gte=minimumRate).order_by('-created_at')[:10]
    result = {}
    result.setdefault("list", [])
    for item in data:
        k = {}
        k['id'] = item.id
        k['username'] = item.userID.username
        k['longitude'] = item.longitude
        k['latitude'] = item.latitude
        k['payoff'] = item.payoff
        k['minimumRate'] = item.minimumRate
        k['content'] = item.content
        k['created_at'] = item.created_at.strftime('%Y/%m/%d %H:%M')
        result["list"].append(k)
    return result


def getUnsolved(request):
    result = getUnsolvedHigher(0)
    return JsonResponse(result)


def reqAns(request, id):

    data = UserRespond.objects.filter(
        requestID_id__exact=id).filter(accepted__exact=None)
    result = {}
    result.setdefault("list", [])
    for item in data:
        k = {}
        k['id'] = item.id
        k['username'] = item.userID.username
        k['longitude'] = item.longitude
        k['latitude'] = item.latitude
        k['content'] = item.content
        k['accepted'] = item.accepted

        k['created_at'] = item.created_at.strftime('%Y/%m/%d %H:%M')
        result["list"].append(k)
    return JsonResponse(result)


@csrf_exempt
def postReq(request):
    try:
        json_str = request.body.decode(encoding='UTF-8')
        data = json.loads(json_str)
        query = UserRequest(userID_id=data['userID'], longitude=data[
                            "longitude"], latitude=data["latitude"], content=data['content'], minimumRate=data["minimumRating"], payoff=data["payoff"])
        query.save()
        response = HttpResponse(status=200)
        response['access-control-allow-origin'] = '*'
        return response
    except Exception as e:
        return HttpResponse(str(e), status=500)


@csrf_exempt
def postRes(request):
    try:
        json_str = request.body.decode(encoding='UTF-8')
        data = json.loads(json_str)
        query = UserRespond(userID_id=data['userID'], requestID_id=data[
                            'requestID'], content=data.get('content', None), longitude=data.get(
                            "longitude", None), latitude=data.get("latitude", None))
        query.save()
        response = HttpResponse(status=200)
        response['access-control-allow-origin'] = '*'
        return response
    except Exception as e:
        return HttpResponse(str(e), status=500)


@csrf_exempt
def resCheck(request):
    try:
        json_str = request.body.decode(encoding='UTF-8')
        data = json.loads(json_str)
        query = UserRespond.objects.get(id=data['respondID'])
        query.accepted = data['approved']

        query2 = query.requestID
        query2.answered = True

        query.save()
        query2.save()
        response = HttpResponse(status=200)
        response['access-control-allow-origin'] = '*'
        return response
    except Exception as e:
        return HttpResponse(str(e), status=500)
