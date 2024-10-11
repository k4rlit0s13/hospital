import dotenv from 'dotenv';
import express from 'express';
import { createServer } from 'vite';
import { connectToDatabase } from './server/db/connect/connect.js';

dotenv.config();
const app = express();
const PORT = process.env.DB_PORT;

async function fetchDoctors(connection) {
  const query = `
    SELECT 
      d.id,
      d.nombre,
      d.genero,
      e.nombre AS especialidad,
      cd.tipo,
      cd.contacto,
      d.fecha_nacimiento
    FROM 
      doctor d
      INNER JOIN especialidad e ON d.especialidad_fk = e.id
      INNER JOIN comunicacion_doc cd ON d.id = cd.doctor_fk
    ORDER BY 
      d.nombre ASC;
  `;

  try {
    const [rows] = await connection.execute(query);
    console.log('Query results:', rows);
  } catch (error) {
    console.error('Error executing query:', error);
  }
}

async function startServer() {
  const vite = await createServer({ server: { middlewareMode: true } });
  app.use(vite.middlewares);

  let dbConnection;
  try {
    dbConnection = await connectToDatabase();
    await fetchDoctors(dbConnection); // Ejecuta la consulta aquí
  } catch (error) {
    console.error('Failed to connect to database');
    return;
  }

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
