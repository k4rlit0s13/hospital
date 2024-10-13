import { connectToDatabase } from '../db/connect/connect.js';

class DoctorController {
  // Obtener la lista de doctores
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

  // Agregar un nuevo doctor
  static async addDoctor(req, res) {
    let dbConnection;

    try {
      const { nombre, genero, especialidad_fk, fecha_nacimiento, tipo_contacto, contacto } = req.body;

      dbConnection = await connectToDatabase();

      const insertDoctorQuery = `
        INSERT INTO doctor (nombre, genero, especialidad_fk, fecha_nacimiento)
        VALUES (?, ?, ?, ?);
      `;
      const [doctorResult] = await dbConnection.execute(insertDoctorQuery, [nombre, genero, especialidad_fk, fecha_nacimiento]);

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
        dbConnection.release();
      }
    }
  }

  // Eliminar un doctor por ID
  static async deleteDoctor(req, res) {
    let dbConnection;

    try {
      const { id } = req.params;

      dbConnection = await connectToDatabase();

      // Iniciar una transacción para asegurar la consistencia
      await dbConnection.beginTransaction();

      // Eliminar los registros en la tabla personal que dependen del doctor
      const deletePersonalQuery = `
      DELETE FROM personal WHERE doctor_fk = ?;
    `;
      await dbConnection.execute(deletePersonalQuery, [id]);

      // Eliminar las comunicaciones del doctor
      const deleteComunicacionQuery = `
      DELETE FROM comunicacion_doc WHERE doctor_fk = ?;
    `;
      await dbConnection.execute(deleteComunicacionQuery, [id]);

      // Eliminar el doctor
      const deleteDoctorQuery = `
      DELETE FROM doctor WHERE id = ?;
    `;
      await dbConnection.execute(deleteDoctorQuery, [id]);

      // Confirmar la transacción
      await dbConnection.commit();

      res.status(200).json({ message: 'Doctor deleted successfully' });
    } catch (error) {
      // Revertir la transacción en caso de error
      if (dbConnection) {
        await dbConnection.rollback();
      }
      console.error('Error deleting doctor:', error);
      res.status(500).json({ error: 'Failed to delete doctor' });
    } finally {
      if (dbConnection) {
        dbConnection.release();
      }
    }
  }
}

export default DoctorController;
