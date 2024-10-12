import { connectToDatabase } from '../db/connect/connect.js';

class DoctorController {
  // Función para obtener la lista de doctores
  static async getDoctors(req, res) {
    let dbConnection;

    try {
      dbConnection = await connectToDatabase();
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
          LEFT JOIN comunicacion_doc cd ON d.id = cd.doctor_fk
        ORDER BY 
          d.nombre ASC;
      `;

      const [rows] = await dbConnection.execute(query);
      res.json(rows); // Responder con los resultados en formato JSON
    } catch (error) {
      console.error('Error fetching doctors:', error);
      res.status(500).json({ error: 'Failed to fetch doctors' });
    } finally {
      if (dbConnection) {
        dbConnection.release(); // Liberar la conexión de vuelta al pool
      }
    }
  }

  // Función para agregar un nuevo doctor
  static async addDoctor(req, res) {
    let dbConnection;

    try {
      // Obtener datos del cuerpo de la solicitud
      const { nombre, genero, especialidad_fk, fecha_nacimiento, tipo_contacto, contacto } = req.body;

      dbConnection = await connectToDatabase();

      // Insertar nuevo doctor
      const insertDoctorQuery = `
        INSERT INTO doctor (nombre, genero, especialidad_fk, fecha_nacimiento)
        VALUES (?, ?, ?, ?);
      `;
      const [doctorResult] = await dbConnection.execute(insertDoctorQuery, [nombre, genero, especialidad_fk, fecha_nacimiento]);

      // Insertar comunicación del doctor
      const insertComunicacionQuery = `
        INSERT INTO comunicacion_doc (doctor_fk, tipo, contacto)
        VALUES (?, ?, ?);
      `;
      await dbConnection.execute(insertComunicacionQuery, [doctorResult.insertId, tipo_contacto, contacto]);

      res.status(201).json({ message: 'Doctor added successfully' });
    } catch (error) {
      console.error('Error adding doctor:', error);
      res.status(500).json({ error: 'Failed to add doctor' });
    } finally {
      if (dbConnection) {
        dbConnection.release(); // Liberar la conexión de vuelta al pool
      }
    }
  }
}

export default DoctorController;
