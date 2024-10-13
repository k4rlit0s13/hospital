-- buscar Doctores:
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



-- crear un nuevo doctor:
INSERT INTO doctor (nombre, genero, especialidad_fk, fecha_nacimiento)
VALUES ('Nuevo Doctor', 'Masculino', 1, '1990-01-01');
INSERT INTO comunicacion_doc (doctor_fk, tipo, contacto)
VALUES (LAST_INSERT_ID(), 'Telefono', '1234561230');



-- Primero, eliminamos las comunicaciones del doctor con ID 5
DELETE FROM comunicacion_doc WHERE doctor_fk = 5;
-- Después, eliminamos el doctor con ID 5
DELETE FROM doctor WHERE id = 5;
