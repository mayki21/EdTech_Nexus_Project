from django.urls import path
from . import views
urlpatterns=[
    path('create/<int:instrid>',views.CreatCourse,name='create'),
    path('get',views.Getcourse,name='get')

]