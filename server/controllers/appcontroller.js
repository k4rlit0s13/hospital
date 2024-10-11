import { connectToDatabase } from '../db/connect/connect.js';

export async function getDoctors(req, res) {
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
        INNER JOIN comunicacion_doc cd ON d.id = cd.doctor_fk
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
      await dbConnection.end(); // Cerrar la conexión
    }
  }
}
