<template>
  <div>
    <div class="navbar">
      <div class="logo">+</div>
      <div class="menu">
        <a href="#">Users</a>
        <a href="#">Patients</a>
        <a href="#">Hospitals</a>
        <a href="#">Notice</a>
        <a href="#">Help Center</a>
      </div>
      <div class="user-info">
        <span>Carlos David</span>
        <img
          alt="User profile picture"
          src="https://storage.googleapis.com/a1aa/image/3fjYcr4hBxyPfk3j6WJMyKAJGvxe83nz1iM01QTkYRlFdbJnA.jpg"
          width="30"
          height="30"
        />
      </div>
    </div>

    <div class="container">
      <div class="header">
        <h2>List of Doctors</h2>
        <button class="add-button" @click="showModal = true">+ Add new doctor</button>
      </div>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Email/Phone</th>
              <th>Specialty</th>
              <th>Date of Birth</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="doctor in doctors" :key="doctor.id">
              <td>{{ doctor.nombre }}</td>
              <td>{{ doctor.id }}</td>
              <td>{{ doctor.contacto }}</td>
              <td>{{ doctor.especialidad }}</td>
              <td>{{ formatDate(doctor.fecha_nacimiento) }}</td>
              <td><button class="action-button">-></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal">
        <div class="modal-header">
          <h2>Add a New Doctor</h2>
          <button class="close-button" @click="showModal = false">&times;</button>
        </div>
        <form @submit.prevent="submitDoctor">
          <div class="form-group">
            <label for="first-name">First name</label>
            <input type="text" v-model="newDoctor.nombre" id="first-name" placeholder="Your first name" required />
            <span v-if="errors.nombre" class="error">{{ errors.nombre }}</span>
          </div>
          <div class="form-group">
            <label for="last-name">Last name</label>
            <input type="text" v-model="newDoctor.apellido" id="last-name" placeholder="Your last name" />
            <span v-if="errors.apellido" class="error">{{ errors.apellido }}</span>
          </div>
          <div class="form-group">
            <label for="gender">Gender</label>
            <select v-model="newDoctor.genero" id="gender" required>
              <option value="">Select gender</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
            <span v-if="errors.genero" class="error">{{ errors.genero }}</span>
          </div>
          <div class="form-group">
            <label for="designation">Specialty</label>
            <input type="text" v-model="newDoctor.especialidad_fk" id="designation" placeholder="Specialty ID" required />
            <span v-if="errors.especialidad_fk" class="error">{{ errors.especialidad_fk }}</span>
          </div>
          <div class="form-group date">
            <label for="dob">Date of birth</label>
            <input type="date" v-model="newDoctor.fecha_nacimiento" id="dob" required />
            <span v-if="errors.fecha_nacimiento" class="error">{{ errors.fecha_nacimiento }}</span>
          </div>
          <div class="form-group">
            <label for="contact">Contact (Phone or Email)</label>
            <input type="text" v-model="newDoctor.contacto" id="contact" placeholder="Your contact" required />
            <span v-if="errors.contacto" class="error">{{ errors.contacto }}</span>
          </div>
          <div class="form-group">
            <label for="contact-type">Contact Type</label>
            <select v-model="newDoctor.tipo_contacto" id="contact-type" required>
              <option value="">Select contact type</option>
              <option value="Telefono">Telefono</option>
              <option value="Email">Email</option>
            </select>
            <span v-if="errors.tipo_contacto" class="error">{{ errors.tipo_contacto }}</span>
          </div>
          <button type="submit" class="btn" :disabled="hasErrors">SUBMIT</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      doctors: [],
      showModal: false, // Controla la visibilidad del modal
      newDoctor: {
        nombre: "",
        apellido: "",
        genero: "",
        especialidad_fk: "",
        fecha_nacimiento: "",
        tipo_contacto: "",
        contacto: ""
      },
      errors: {}, // Objeto para almacenar los mensajes de error
    };
  },
  computed: {
    hasErrors() {
      return Object.keys(this.errors).length > 0;
    }
  },
  methods: {
    formatDate(dateString) {
      const options = { year: "numeric", month: "2-digit", day: "2-digit" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    async fetchDoctors() {
      try {
        const response = await fetch("http://localhost:3000/api/v1/doctors");
        if (!response.ok) {
          throw new Error("Failed to fetch doctors");
        }
        const data = await response.json();
        this.doctors = data;
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    },
    validateForm() {
      this.errors = {};

      // Validar nombre
      if (!this.newDoctor.nombre) {
        this.errors.nombre = "First name is required";
      }

      // Validar apellido
      if (!this.newDoctor.apellido) {
        this.errors.apellido = "Last name is required";
      }

      // Validar género
      if (!this.newDoctor.genero) {
        this.errors.genero = "Gender is required";
      }

      // Validar especialidad
      if (!this.newDoctor.especialidad_fk) {
        this.errors.especialidad_fk = "Specialty is required";
      }

      // Validar fecha de nacimiento
      if (!this.newDoctor.fecha_nacimiento) {
        this.errors.fecha_nacimiento = "Date of birth is required";
      }

      // Validar contacto
      if (!this.newDoctor.contacto) {
        this.errors.contacto = "Contact is required";
      }

      // Validar tipo de contacto
      if (!this.newDoctor.tipo_contacto) {
        this.errors.tipo_contacto = "Contact type is required";
      }

      // Si hay errores, retornar falso
      return Object.keys(this.errors).length === 0;
    },
    async submitDoctor() {
      if (this.validateForm()) {
        try {
          const response = await fetch("http://localhost:3000/api/v1/newdoctor", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(this.newDoctor) // Enviar los datos del formulario
          });

          if (!response.ok) {
            throw new Error("Error adding doctor");
          }

          const data = await response.json();
          console.log("Doctor added:", data);

          // Actualizar la lista de doctores después de agregar
          this.fetchDoctors();

          // Cerrar el modal y resetear el formulario
          this.showModal = false;
          this.newDoctor = {
            nombre: "",
            apellido: "",
            genero: "",
            especialidad_fk: "",
            fecha_nacimiento: "",
            tipo_contacto: "",
            contacto: ""
          };
        } catch (error) {
          console.error("Error adding doctor:", error);
        }
      }
    }
  },
  mounted() {
    this.fetchDoctors();
  }
};
</script>


<style>
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

.navbar {
  background-color: #2d4739;
  padding: 10px 20px;
  display: flex;
  align-items: center;
}

.navbar .logo {
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-right: 20px;
}

.navbar .menu {
  display: flex;
  align-items: center;
}

.navbar .menu a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
  font-size: 16px;
}

.navbar .user-info {
  display: flex;
  align-items: center;
  margin-left: auto;
  color: white;
}

.navbar .user-info img {
  border-radius: 50%;
  margin-left: 10px;
}

.container {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header h2 {
  margin: 0;
  font-size: 24px;
  font-weight: 500;
}

.header .add-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.table-container {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
}

table th,
table td {
  padding: 10px;
  text-align: left;
}

table th {
  background-color: #f0f0f0;
  font-weight: 500;
}

table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.modal-header h2 {
  margin: 0;
  font-size: 24px;
}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-group input::placeholder {
  color: #999;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 14px;
  color: white;
  background-color: #4CAF50;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}

.error {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}
</style>
