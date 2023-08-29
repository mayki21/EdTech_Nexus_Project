from django.urls import path
from .import views
urlpatterns = [
    path('createenrol/<int:cid>',views.CreateEnrol,name="createenrol"),
    path('getenroldata',views.getstudentenroldata,name="getenroldata"),
    path('getenrol',views.getenrol,name='getenrol')
    
]