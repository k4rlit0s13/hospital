import dotenv from 'dotenv';
import express from 'express';
import { createServer } from 'vite';
import approuter from './server/routers/approuter.js';
import { connectToDatabase } from './server/db/connect/connect.js'; // Asegúrate de importar la función

dotenv.config();
const app = express();
const PORT = process.env.DB_PORT;

// Middleware para parsear el cuerpo de las solicitudes JSON
app.use(express.json());

async function startServer() {
  const vite = await createServer({ server: { middlewareMode: true } });

  // Verificar conexión a la base de datos
  try {
    await connectToDatabase(); // Aquí se llama a la función de conexión
  } catch (error) {
    console.error('Failed to connect to the database. Server will not start.');
    process.exit(1); // Terminar el proceso si no se puede conectar
  }

  // Usar el enrutador sin el prefijo de versión aquí
  app.use('/api', approuter); // Las rutas de la API comenzarán con /api

  app.use(vite.middlewares); // Middleware de Vite después de las rutas de la API

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
