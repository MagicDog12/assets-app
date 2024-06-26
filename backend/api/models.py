from django.db import models

# Create your models here.


class Cliente(models.Model):
    id = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=10)

    def __str__(self):
        return self.nombre


class Gestor(models.Model):
    id = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre


class Pago(models.Model):
    id = models.IntegerField(primary_key=True)
    fecha = models.DateField()
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    monto = models.IntegerField()
    gestor = models.ForeignKey(Gestor, on_delete=models.CASCADE)
    rut = models.IntegerField()
    abono = models.IntegerField()

    def __str__(self):
        return f'Pago {self.id} - {self.cliente.nombre}'
