from django.shortcuts import render
from django.contrib.auth import get_user_model 
from django.http import JsonResponse
from .models import Enroll
from course.models import Course
User=get_user_model()
# Create your views here.


# def CreateEnrol(req,cid):
#     if req.method=="POST":
#         studentid=req.user.id
#         user=User.objects.get(id=studentid)
#         if user.role=="instructor":
#             return JsonResponse({"msg":"you cannot enroll"})
#         course=Course.objects.get(id=cid)
#         enroll=Enroll.objects.create(student=user,course=course)
#         return JsonResponse({"msg":"you have enrolled successfully"})
#     else:
#         return JsonResponse({"msg":"some error occured"})

def CreateEnrol(req,cid):
    if req.method=="POST":
        if req.user.role=="instructor":
            return JsonResponse({"msg":"You cannot enroll"})
        course=Course.objects.get(id=cid)
        alreadyenrol=Enroll.objects.filter(student=req.user,course=course)
        if alreadyenrol:
            return JsonResponse({"msg":"You have already enrolled"})
        enroll=Enroll.objects.create(student=req.user,course=course)
        return JsonResponse({"msg":"You have enrolled successfully"})
    else:
        return JsonResponse({"msg":"some error occurred"})

def getstudentenroldata(req):
    if req.method=="GET":
        student=req.user
        enroldata=Enroll.objects.filter(student=student)
        serialize_data=[]
        for enrol in enroldata:
            course=enrol.course
            instructor=course.instructor
            obj={
                "name":student.username,
                "courseid":course.id,
                "coursename":course.title,
                "description":course.description,
                "instructor":instructor.username,
                "date":enrol.enrollmentdate
            }

            serialize_data.append(obj)

        return JsonResponse({"data":serialize_data})
    else:
        return JsonResponse({"msg":"some error occured"})


def getenrol(req):
    enroldata=Enroll.objects.all()
    data={"data":list(enroldata.values())}
    return JsonResponse(data)