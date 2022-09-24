from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('CDSS/', views.index, name='CDSS'),
]
