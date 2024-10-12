import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10 // Puedes ajustar este número según tus necesidades
});

// Este log se mostrará solo una vez cuando el pool esté configurado
pool.getConnection()
  .then(() => console.log('Connected to Hospital'))
  .catch(error => console.error('Error connecting to the database:', error));

export async function connectToDatabase() {
  try {
    const connection = await pool.getConnection(); // Obtener una conexión del pool
    return connection;
  } catch (error) {
    console.error('Error getting connection from the pool:', error);
    throw error;
  }
}
