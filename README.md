# assets-app

## Instalación:
dsadsa
- Crear superusuario:
    ```
    cd backend
    python manage.py createsuperuser
    ```

## Actualizar base de datos:
Para esto es necesario correr el script que toma los datos de la base de datos externa y actualiza la base de datos de django.
Primero es necesario borrar el archivo **backend/db.sqlite3**.

Luego correr lo siguiente:

```
cd backend
python manage.py makemigrations
python manage.py migrate
python manage.py update_db
```

## Correr el proyecto
Abrir dos consolas.

Primero para correr el backend es necesario ejecutar en una consola:
```
cd backend
python manage.py runserver
```