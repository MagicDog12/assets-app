from django.contrib import admin
from .models import Cliente, Gestor, Pago

# Register your models here.
admin.site.register(Cliente)
admin.site.register(Gestor)
admin.site.register(Pago)
