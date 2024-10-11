const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const connectionConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

class AppController {
  async connectToDatabase() {
    try {
      const connection = await mysql.createConnection(connectionConfig);
      return connection;
    } catch (error) {
      console.error('Error connecting to the database:', error);
      throw error;
    }
  }

  async getDoctores() {
    const connection = await this.connectToDatabase();
    const query = `
      SELECT 
        d.id,
        d.nombre,
        e.nombre AS especialidad,
        d.fecha_nacimiento,
        c.estado_Pago AS estado
      FROM 
        doctor d
      INNER JOIN 
        especialidad e ON d.especialidad_fk = e.id
      LEFT JOIN 
        cuenta c ON d.id = c.doctor_fk
    `;
    const [rows] = await connection.execute(query);
    return rows;
  }

  async getEstadoAprobacion(doctorId) {
    const connection = await this.connectToDatabase();
    const query = `
      SELECT 
        c.estado_Pago AS estado
      FROM 
        cuenta c
      WHERE 
        c.doctor_fk = ?
    `;
    const [row] = await connection.execute(query, [doctorId]);
    return row[0].estado;
  }
}

module.exports = AppController;