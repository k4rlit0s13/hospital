```
npm i
```

```
npm i express
```
```

npm i mysql
```

```
npm install mysql2
```

```
npm install dotenv
```
```
npm run dev
```

```
DB_HOST=localhost
DB_USER=campus2023
DB_PASSWORD=campus2023
DB_NAME=Hospital
DB_PORT=3000
```



consultas: 

get all doctores API:
http://localhost:3000/api/v1/doctors


crear un nuevo doctor api:
body:
{
  "nombre": "Nuevo Doctor",
  "genero": "Masculino",
  "especialidad_fk": 1,
  "fecha_nacimiento": "1990-01-01",
  "tipo_contacto": "Telefono",
  "contacto": "1234567100"
}

API:
http://localhost:3000/api/v1/newdoctor


