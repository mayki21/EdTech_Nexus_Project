from django.shortcuts import render
from django.contrib.auth import get_user_model
from django.http import JsonResponse
from .models import Enroll
from course.models import Course
User=get_user_model()
# Create your views here.



def createEnrol(req,courseID):
    if (req.method == "POST"):
        userid = req.userid
        user=User.objects.get(id=userid)
        print(user)
        if user.role == "student":
            course = Course.objects.get(id=courseID)
            alreadyEnrolled=Enroll.objects.filter(student=user,course=course).exists()
            # print(alreadyenrol)
            # print(course)
            if alreadyEnrolled:
                return JsonResponse({"msg": "You Have Already Enrolled"})
            data = Enroll.objects.create(
                student=user, course=course
            )
            return JsonResponse({"msg": "Enrollment Added Succesfully"}, status=201)
        else:
            return JsonResponse({"msg": "You Are Not Authorized"})
    else:
        return JsonResponse({"msg": "Invalid Request"}, status=405)








    
def GetStudentEnrolData(req):
    student = User.objects.get(id=req.userid)
    print(student)
    print(student)
    if req.method == "GET":
        enroldata = Enroll.objects.filter(student=student)

        serialized_data = []

        for enrol in enroldata:
            course = enrol.course
            instructor = course.instructor
            data = {
                "name": student.username,
                "courseid":course.id,
                "image":course.image,
                "coursename": course.title,
                "description": course.description,
                "instructor": instructor.username,
                "date": enrol.enrollmentdate
            }

            serialized_data.append(data)

        return JsonResponse({"data": serialized_data})
    else:
        return JsonResponse({"msg": "Some error occurred"})
    
def GetEnrol(req):
    Enroldata=Enroll.objects.all()
    data={"data":list(Enroldata.values())}

    return JsonResponse(data)

