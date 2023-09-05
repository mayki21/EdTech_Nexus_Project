from django.urls import path
from . import views
urlpatterns=[
    path('create',views.CreateCourse,name='create'),
    path('get',views.GetCourse,name='get'),
    path('getcourses',views.getCourseByID,name='getcourses'),
    path('homeroute',views.homeroute,name='homeroute'),
    path("getchat", views.getChatResponse, name="getchat")

]