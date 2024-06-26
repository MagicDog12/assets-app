from rest_framework import serializers
from .models import Cliente, Gestor, Pago


class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['nombre']


class GestorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gestor
        fields = ['nombre']


class PagoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pago
        fields = ['fecha', 'cliente', 'monto', 'gestor', 'rut', 'abono']
