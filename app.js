import dotenv from 'dotenv';
import express from 'express';
import { createServer } from 'vite';
import { connectToDatabase } from './server/db/connect/connect.js';

dotenv.config();
const app = express();
const PORT = process.env.DB_PORT;

async function startServer() {
  const vite = await createServer({ server: { middlewareMode: true } });
  
  app.use(vite.middlewares); // Middleware para servir el frontend

  // Conectar a la base de datos
  try {
    await connectToDatabase();
  } catch (error) {
    console.error('Failed to connect to database');
    return; // Detener si falla la conexión a la base de datos
  }

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
