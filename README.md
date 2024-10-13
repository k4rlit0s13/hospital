# Documentación del Proyecto: Sistema de Gestión de Doctores

## Descripción del Proyecto

Este proyecto es un sistema de gestión de información sobre doctores en un hospital. La aplicación permite a los usuarios visualizar la lista de doctores, agregar nuevos doctores y eliminar doctores existentes. La interfaz está construida utilizando Vue.js, y el backend está desarrollado con Node.js y Express, con MySQL como base de datos.

## Estructura del Proyecto

### Tecnologías Utilizadas

- **Frontend:** Vue.js
- **Backend:** Node.js con Express
- **Base de Datos:** MySQL
- **ORM:** mysql2
- **Configuración:** dotenv

## Instalación y Configuración

### Requisitos Previos

Asegúrate de tener instalado Node.js y MySQL en tu sistema.

### Instalación de Dependencias

Ejecuta los siguientes comandos para instalar las dependencias necesarias:

```bash
npm install
npm install express
npm install mysql
npm install mysql2
npm install dotenv
```

### Configuración de la Base de Datos

Crea un archivo `.env` en la raíz de tu proyecto y añade la configuración de la base de datos:

```
DB_HOST=localhost
DB_USER=campus2023
DB_PASSWORD=campus2023
DB_NAME=Hospital
DB_PORT=3000
```

### Ejecución de la Aplicación

Inicia la aplicación ejecutando el siguiente comando:

```bash
npm run dev
```

## APIs Disponibles

### 1. Obtener Todos los Doctores

- **Endpoint:** `http://localhost:3000/api/v1/doctors`
- **Método:** `GET`
- **Descripción:** Obtiene una lista de todos los doctores registrados en el sistema.

### 2. Crear un Nuevo Doctor

- **Endpoint:** `http://localhost:3000/api/v1/newdoctor`
- **Método:** `POST`
- **Cuerpo de la Solicitud:**

```json
{
  "nombre": "Nuevo Doctor",
  "genero": "Masculino",
  "especialidad_fk": 1,
  "fecha_nacimiento": "1990-01-01",
  "tipo_contacto": "Telefono",
  "contacto": "1234567100"
}
```

- **Descripción:** Agrega un nuevo doctor al sistema.

### 3. Eliminar un Doctor

- **Endpoint:** `http://localhost:3000/api/v1/delete/:id`
- **Método:** `DELETE`
- **Descripción:** Elimina un doctor del sistema usando su ID.

## Funcionalidades

- **Listar Doctores:** Los usuarios pueden ver la lista de doctores en la interfaz principal.
- **Agregar Doctor:** Se proporciona un formulario para agregar nuevos doctores al sistema.
- **Eliminar Doctor:** Los doctores pueden ser eliminados de la lista.

