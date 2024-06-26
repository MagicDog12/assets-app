import psycopg2
from django.core.management.base import BaseCommand
from api.models import Cliente, Gestor, Pago


class Command(BaseCommand):

    def handle(self, *args, **kwargs):
        conn = psycopg2.connect(
            dbname='assets_backend_test',
            user='assets_backend_test_user',
            password='vQfLjm3NYbeRHWXZaSK2Xu440QHTzI2r',
            host='dpg-cps5jml6l47c73e0c3hg-a.oregon-postgres.render.com',
            port='5432'
        )
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM tabla_cubo')

        # row -> [cliente, rut, gestor, monto, f_pago, abonos]
        for row in cursor.fetchall():
            # Se obtiene el cliente y si no existe entonces se crea
            try:
                cliente = Cliente.objects.get(nombre=row[0])
            except Cliente.DoesNotExist:
                cliente = Cliente(nombre=row[0])
                cliente.save()

            # Se obtiene el gestor y si no existe entonces se crea
            try:
                gestor = Gestor.objects.get(nombre=row[2])
            except Gestor.DoesNotExist:
                gestor = Gestor(nombre=row[2])
                gestor.save()

            # Se crea el nuevo pago
            Pago.objects.create(
                fecha=row[4],
                cliente=cliente,
                monto=row[3],
                gestor=gestor,
                rut=row[1],
                abono=row[5]
            )

        conn.close()
