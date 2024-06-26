from rest_framework import generics
from .models import Cliente, Gestor, Pago
from .serializers import ClienteSerializer, GestorSerializer, PagoSerializer


class ClienteList(generics.ListAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer


class GestoresListByCliente(generics.ListAPIView):
    def get_queryset(self):
        nombre_cliente = self.request.query_params.get('nombre')
        if not nombre_cliente:
            gestores = Gestor.objects.all()
            return gestores
        cliente = Cliente.objects.get(nombre=nombre_cliente)
        pagos_queryset = Pago.objects.filter(cliente=cliente.id)
        pagos = PagoSerializer(pagos_queryset, many=True)
        gestores = set()
        for pago in pagos.data:
            gestor = Gestor.objects.get(id=pago['gestor'])
            gestores.add(gestor)
        return gestores
    serializer_class = GestorSerializer


class PagosByGestor(generics.ListAPIView):
    def get_queryset(self):
        nombre_gestor = self.request.query_params.get('nombre')
        gestor = Gestor.objects.get(nombre=nombre_gestor)
        pagos_queryset = Pago.objects.filter(gestor=gestor.id)
        return pagos_queryset
    serializer_class = PagoSerializer


class PagosByCliente(generics.ListAPIView):
    def get_queryset(self):
        nombre_cliente = self.request.query_params.get('nombre')
        cliente = Cliente.objects.get(nombre=nombre_cliente)
        pagos_queryset = Pago.objects.filter(cliente=cliente.id)
        return pagos_queryset
    serializer_class = PagoSerializer
