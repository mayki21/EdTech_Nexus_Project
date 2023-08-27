from django.shortcuts import render
from .models import Course
from django.http import HttpResponse
from django.contrib.auth import get_user_model
import json
User=get_user_model()

def CreatCourse(req,instrid):
    if req.method=="POST":
        instructor=User.objects.get(id=instrid)
        if instructor.role=="instructor":
            body=json.load(req.body)
            title=body.get('title')
            description=body.get('description')
            course=Course.objects.create(instructor=instructor,title=title,description=description)
            return JsonResponse({"msg":"course created"})
        else:
            return JsonResponse({"msg":"your are not authorized"})
    else:
        return JsonResponse({"msg":"some error occured"})



def Getcourse(req):
    if req.method=="POST":
        allcourse=Course.objects.all()
        data={"data":list(allcourse.values())}
        return JsonResponse(data)
    else:
        return JsonResponse({"msg":"some error occured"})


