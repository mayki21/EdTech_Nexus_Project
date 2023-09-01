from django.db import models
from course.models import Course
from django.contrib.auth import get_user_model
User=get_user_model()
class Assignment(models.Model):
    course=models.ForeignKey(Course,on_delete=models.CASCADE)
    title=models.CharField(max_length=100)
    description=models.CharField(max_length=500)
    start_date=models.DateTimeField(auto_now_add=True)
    end_date=models.DateTimeField()