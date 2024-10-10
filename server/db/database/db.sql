-- Tabla hospitales
INSERT INTO hospitales (nombre, direccion) VALUES
('Hospital General', 'Calle 123, Ciudad'),
('Hospital Privado', 'Avenida 456, Ciudad'),
('Hospital Público', 'Calle 789, Ciudad'),
('Hospital Especializado', 'Avenida 1011, Ciudad');

-- Tabla especialidad
INSERT INTO especialidad (nombre) VALUES
('Medicina General'),
('Cirugía'),
('Pediatría'),
('Cardiología');

-- Tabla doctor
INSERT INTO doctor (nombre, genero, especialidad_fk, fecha_nacimiento) VALUES
('Juan Pérez', 'Masculino', 1, '1990-01-01'),
('María García', 'Femenino', 2, '1992-06-15'),
('Carlos López', 'Masculino', 3, '1985-03-20'),
('Ana Rodríguez', 'Femenino', 4, '1995-09-10');

-- Tabla paciente
INSERT INTO paciente (nombre, apellido, genero, fecha_nacimiento, edad) VALUES
('Pedro González', 'González', 'Masculino', '2000-01-01', 22),
('Luisa Hernández', 'Hernández', 'Femenino', '1998-06-15', 24),
('Juan Carlos', 'Martínez', 'Masculino', '2002-03-20', 20),
('Sofía Gómez', 'Gómez', 'Femenino', '2001-09-10', 21);

-- Tabla poblacion
INSERT INTO poblacion (doctor_fk, paciente_fk) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4);

-- Tabla comunicacion_doc
INSERT INTO comunicacion_doc (doctor_fk, tipo, contacto) VALUES
(1, 'Telefono', '1234567890'),
(2, 'Celular', '9876543210'),
(3, 'Correo electronico', 'juanlopez@example.com'),
(4, 'Telefono', '5551234567');

-- Tabla comunicacion_pat
INSERT INTO comunicacion_pat (paciente_fk, tipo, contacto) VALUES
(1, 'Telefono', '1234567890'),
(2, 'Celular', '9876543210'),
(3, 'Correo electronico', 'juanmartinez@example.com'),
(4, 'Telefono', '5551234567');

-- Tabla comunicacion_hospital
INSERT INTO comunicacion_hospital (hospital_fk, tipo, contacto) VALUES
(1, 'Telefono', '1234567890'),
(2, 'Celular', '9876543210'),
(3, 'Correo electronico', 'hospitalgeneral@example.com'),
(4, 'Telefono', '5551234567');

-- Tabla personal
INSERT INTO personal (hospital_fk, doctor_fk) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4);

-- Tabla cuenta
INSERT INTO cuenta (paciente_fk, hospital_fk, precio, fecha, motivo, estado_Pago) VALUES
(1, 1, 100.00, '2022-01-01', 'Consulta médica', 'Cancelado'),
(2, 2, 200.00, '2022-01-15', 'Cirugía', 'Pendiente'),
(3, 3, 300.00, '2022-02-01', 'Consulta pediátrica', 'Cancelado'),
(4, 4, 400.00, '2022-03-01', 'Consulta cardiología', 'Pendiente');

-- Tabla avisos
INSERT INTO avisos (hospital_fk, nombre, descripcion, fecha) VALUES
(1, 'Aviso 1', 'Descripción del aviso 1', '2022-01-01'),
(2, 'Aviso 2', 'Descripción del aviso 2', '2022-01-15'),
(3, 'Aviso 3', 'Descripción del aviso 3', '2022-02-01'),
(4, 'Aviso 4', 'Descripción del aviso 4', '2022-03-01');

-- Tabla historial_medico
INSERT INTO historial_medico (paciente_fk, descripcion) VALUES
(1, 'Historial médico de Pedro González'),
(2, 'Historial médico de Luisa Hernández'),
(3, 'Historial médico de Juan Carlos'),
(4, 'Historial médico de Sofía Gómez');