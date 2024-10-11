import dotenv from 'dotenv';
import express from 'express';
import { createServer } from 'vite';
import approuter from './server/routers/approuter.js';

dotenv.config();
const app = express();
const PORT = process.env.DB_PORT;

async function startServer() {
  const vite = await createServer({ server: { middlewareMode: true } });
  
  // Usar el enrutador sin el prefijo de versión aquí
  app.use('/api', approuter); // Las rutas de la API comenzarán con /api

  app.use(vite.middlewares); // Middleware de Vite después de las rutas de la API

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
