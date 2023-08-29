from django.shortcuts import render
from django.http import JsonResponse
from assignment.models import Assignment
from .models import Submission
import json

def SubmitAssignment(req,assid):
    if req.method=="POST":
        body=json.loads(req.body)
        submission_link=body.get('submission_link')
        user=req.user
        assignment=Assignment.objects.get(id=assid)
        submission=Submission.objects.create(student=user,assignment=assignment,submission_link=submission_link)
        return JsonResponse({"msg":"Submitted"})
    else:
        return JsonResponse({"msg":"some error occured"})


def SeeAllAssignment(req,assid):
    if req.method=="GET":
        assignment=Assignment.objects.get(id=assid)
        allsubmission=Submission.objects.filter(assignment=assignment)
        data=[]
        for el in allsubmission:
            obj={
                "id":el.id,
                "studentname":el.student.username,
                "instructorname":assignment.course.instructor.username,
                "coursename":assignment.course.title,
                "submission_date":el.submission_date,
                "submission_link":el.submission_link
            }
            data.append(obj)
        return JsonResponse({"data":data})
    else:
        return JsonResponse({"msg":"invalid"},status=405)



