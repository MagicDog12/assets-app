# assets-app

## Instalación:
- Instalar dependencias del backend:
    ```
    cd backend
    python -m venv myvenv
    source myvenv/bin/activate
    pip install -r requirements.txt
    ```
- Instalar dependencias del frontend (necesario version de node>18):
    ```
    cd frontend
    npm install
    ```
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

Luego para correr el frontend es necesario ejecutar en la otra consola:
```
cd frontend
npm run start
```