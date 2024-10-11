-- Doctores:
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