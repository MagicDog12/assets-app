from django.db import models

# Create your models here.


class Cliente(models.Model):
    nombre = models.CharField(max_length=10)  # Nombre del cliente (cartera)

    def __str__(self):
        return self.nombre


class Gestor(models.Model):
    nombre = models.CharField(max_length=50)  # Nombre del gestor

    def __str__(self):
        return self.nombre


class Pago(models.Model):
    fecha = models.DateField()  # Fecha de pago
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)  # Cliente
    monto = models.IntegerField()  # Monto del pago
    # Gestor que realizó la gestión
    gestor = models.ForeignKey(Gestor, on_delete=models.CASCADE)
    rut = models.IntegerField()  # Numero de identificacin del deudor
    abono = models.IntegerField()  # Total de abonos realizados

    def __str__(self):
        return f'Pago con rut: {self.rut} y fecha: {self.fecha}'
