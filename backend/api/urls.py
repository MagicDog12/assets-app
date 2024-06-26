from django.urls import path, include
from rest_framework import routers
from api import views

router = routers.DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('clientes/', views.ClienteList.as_view(), name='cliente-list'),
    path('gestores/', views.GestoresListByCliente.as_view(),
         name='gestores-list-by-cliente'),
    path('pagos/cliente/', views.PagosByCliente.as_view(),
         name='pagos-por-cliente'),
    path('pagos/gestor/', views.PagosByGestor.as_view(), name='pagos-por-gestor')
]
