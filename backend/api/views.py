from rest_framework import generics
from .models import Cliente, Gestor, Pago
from .serializers import ClienteSerializer, GestorSerializer, PagoSerializer


class ClienteList(generics.ListAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
