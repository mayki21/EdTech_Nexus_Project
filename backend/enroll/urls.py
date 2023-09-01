from django.urls import path
from . import views
urlpatterns = [
    path('createenrol/<int:courseID>',views.createEnrol,name="createenrol"),
    path('getenroldata',views.GetStudentEnrolData,name="getenroldata"),
    path('getenrol',views.GetEnrol,name='getenrol')  
]