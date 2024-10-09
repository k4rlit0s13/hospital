import mysql from 'mysql2/promise';

// Configura la conexión a MySQL
const connectionConfig = {
  host: 'localhost',
  user: 'campus2023', 
  password: 'campus2023', 
  database: 'Hospital'
};

export async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection(connectionConfig);
    console.log('Connected to Hospital');
    return connection;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}
