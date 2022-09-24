from django.urls import path
from . import views

urlpatterns = [
    path('CDSS', views.CDSS, name='CDSS'),
]
