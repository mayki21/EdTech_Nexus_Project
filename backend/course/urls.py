from django.urls import path
from . import views
urlpatterns=[
    path('create',views.CreatCourse,name='create'),
    path('get',views.Getcourse,name='get')

]