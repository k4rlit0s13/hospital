CREATE TABLE hospitales (
    nit INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL
);

CREATE TABLE especialidad (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

CREATE TABLE doctor (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    genero VARCHAR(255) NOT NULL,
    especialidad_fk INT UNSIGNED NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    FOREIGN KEY (especialidad_fk) REFERENCES especialidad(id)
);

CREATE TABLE paciente (
    cedula INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    genero VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    edad INT NOT NULL
);

CREATE TABLE poblacion (
    doctor_fk INT UNSIGNED NOT NULL,
    paciente_fk INT UNSIGNED NOT NULL,
    FOREIGN KEY (doctor_fk) REFERENCES doctor(id),
    FOREIGN KEY (paciente_fk) REFERENCES paciente(cedula)
);

CREATE TABLE comunicacion_doc (
    doctor_fk INT UNSIGNED NOT NULL,
    tipo ENUM('Telefono', 'Celular', 'Correo electronico') NOT NULL,
    contacto VARCHAR(255) NOT NULL,
    PRIMARY KEY (doctor_fk),
    FOREIGN KEY (doctor_fk) REFERENCES doctor(id),
    UNIQUE comunicacion_doc_contacto_unique(contacto)
);

CREATE TABLE comunicacion_pat (
    paciente_fk INT UNSIGNED NOT NULL,
    tipo ENUM('Telefono', 'Celular', 'Correo electronico') NOT NULL,
    contacto VARCHAR(255) NOT NULL,
    PRIMARY KEY (paciente_fk),
    FOREIGN KEY (paciente_fk) REFERENCES paciente(cedula),
    UNIQUE comunicacion_pat_contacto_unique(contacto)
);

CREATE TABLE comunicacion_hospital (
    hospital_fk INT UNSIGNED NOT NULL,
    tipo ENUM('Telefono', 'Celular', 'Correo electronico') NOT NULL,
    contacto VARCHAR(255) NOT NULL,
    PRIMARY KEY (hospital_fk),
    FOREIGN KEY (hospital_fk) REFERENCES hospitales(nit),
    UNIQUE comunicacion_hospital_contacto_unique(contacto)
);

CREATE TABLE personal (
    hospital_fk INT UNSIGNED NOT NULL,
    doctor_fk INT UNSIGNED NOT NULL,
    FOREIGN KEY (hospital_fk) REFERENCES hospitales(nit),
    FOREIGN KEY (doctor_fk) REFERENCES doctor(id)
);

CREATE TABLE cuenta (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    paciente_fk INT UNSIGNED NOT NULL,
    hospital_fk INT UNSIGNED NOT NULL,
    precio DOUBLE NOT NULL,
    fecha DATETIME NOT NULL,
    motivo TEXT NOT NULL,
    estado_Pago ENUM('Cancelado', 'Pendiente') NOT NULL,
    FOREIGN KEY (paciente_fk) REFERENCES paciente(cedula),
    FOREIGN KEY (hospital_fk) REFERENCES hospitales(nit)
);

CREATE TABLE avisos (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    hospital_fk INT UNSIGNED NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    fecha DATETIME NOT NULL,
    FOREIGN KEY (hospital_fk) REFERENCES hospitales(nit)
);

CREATE TABLE historial_medico (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    paciente_fk INT UNSIGNED NOT NULL,
    descripcion LONGTEXT NOT NULL,
    FOREIGN KEY (paciente_fk) REFERENCES paciente(cedula)
);