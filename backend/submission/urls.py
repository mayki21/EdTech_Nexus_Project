from django.urls import path
from . import views
urlpatterns = [
    path('submit/<int:assid>',views.SubmitAssignment,name="submit"),
    path('seeallassign/<int:assid>',views.SeeSubmission,name="seeallassignment")   
]