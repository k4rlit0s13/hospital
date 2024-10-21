import { connectToDatabase } from '../db/connect/connect.js';
import { validationResult } from 'express-validator';

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
          d.apellido,
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
      res.json(rows);
    } catch (error) {
      console.error('Error fetching doctors:', error);
      res.status(500).json({ error: 'Failed to fetch doctors' });
    } finally {
      if (dbConnection) {
        dbConnection.release();
      }
    }
  }

// Agregar un nuevo doctor
static async addDoctor(req, res) {
  let dbConnection;

  // Verificar si hay errores de validación
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { nombre, apellido, genero, especialidad_fk, fecha_nacimiento, tipo_contacto, contacto } = req.body;

    dbConnection = await connectToDatabase();

    // Inserción del nuevo doctor
    const insertDoctorQuery = `
      INSERT INTO doctor (nombre, apellido, genero, especialidad_fk, fecha_nacimiento)
      VALUES (?, ?, ?, ?, ?);
    `;
    const [doctorResult] = await dbConnection.execute(insertDoctorQuery, [nombre, apellido, genero, especialidad_fk, fecha_nacimiento]);

    // Inserción en la tabla de comunicación solo si el doctor se agregó correctamente
    const insertComunicacionQuery = `
      INSERT INTO comunicacion_doc (doctor_fk, tipo, contacto)
      VALUES (?, ?, ?);
    `;
    await dbConnection.execute(insertComunicacionQuery, [doctorResult.insertId, tipo_contacto, contacto]);

    res.status(201).json({ message: 'Doctor added successfully' });
  } catch (error) {
    // Si hay un error, la transacción no se ha completado, así que no subimos nada.
    console.error('Error adding doctor:', error);
    res.status(500).json({ error: 'Failed to add doctor', details: error.message }); // Agrega detalles del error
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

      await dbConnection.beginTransaction();

      const deletePersonalQuery = `
        DELETE FROM personal WHERE doctor_fk = ?;
      `;
      await dbConnection.execute(deletePersonalQuery, [id]);

      const deleteComunicacionQuery = `
        DELETE FROM comunicacion_doc WHERE doctor_fk = ?;
      `;
      await dbConnection.execute(deleteComunicacionQuery, [id]);

      const deleteDoctorQuery = `
        DELETE FROM doctor WHERE id = ?;
      `;
      await dbConnection.execute(deleteDoctorQuery, [id]);

      await dbConnection.commit();

      res.status(200).json({ message: 'Doctor deleted successfully' });
    } catch (error) {
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
