from django.urls import path, include
from rest_framework import routers
from api import views

router = routers.DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('clientes/', views.ClienteList.as_view(), name='cliente-list'),
]
