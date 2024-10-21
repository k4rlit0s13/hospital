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
        <img alt="User profile picture"
          src="https://storage.googleapis.com/a1aa/image/3fjYcr4hBxyPfk3j6WJMyKAJGvxe83nz1iM01QTkYRlFdbJnA.jpg" width="30"
          height="30" />
      </div>
    </div>

    <div class="container">
      <div class="header">
        <h2>List of Doctors</h2>
        <button class="add-button" @click="showModal = true">+ Add new doctor</button>
      </div>

      <!-- Alert message -->
      <div v-if="isBlocked" class="alert">
        <p>{{ alertMessage }}</p>
      </div>

      <div class="table-container" v-if="!isBlocked">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
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
              <td>{{ doctor.apellido }}</td>
              <td>{{ doctor.id }}</td>
              <td>{{ doctor.contacto }}</td>
              <td>{{ doctor.especialidad }}</td>
              <td>{{ formatDate(doctor.fecha_nacimiento) }}</td>
              <td>
                <button class="delete-button" @click="deleteDoctor(doctor.id)">Borrar</button>
              </td>
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
      showModal: false,
      newDoctor: {
        nombre: "",
        apellido: "",
        genero: "",
        especialidad_fk: "",
        fecha_nacimiento: "",
        tipo_contacto: "",
        contacto: ""
      },
      errors: {},
      alertMessage: "",
      isBlocked: false,
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

        // Check if the response status is 429
        if (response.status === 429) {
          const text = await response.text(); // Get the response as text
          this.alertMessage = text; // Set the alert message
          this.isBlocked = true; // Set blocked state to true
          return; // Stop further processing
        }

        if (!response.ok) {
          throw new Error("Failed to fetch doctors");
        }

        const data = await response.json();
        this.doctors = data;
        this.alertMessage = ""; // Clear alert message on successful fetch
        this.isBlocked = false; // Reset blocked state
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    },


    async deleteDoctor(doctorId) {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/delete/${doctorId}`, {
          method: "DELETE"
        });
        if (!response.ok) {
          throw new Error("Error deleting doctor");
        }
        const data = await response.json();
        console.log("Doctor deleted:", data);
        this.fetchDoctors();
      } catch (error) {
        console.error("Error deleting doctor:", error);
      }
    },

    validateForm() {
      this.errors = {};
      if (!this.newDoctor.nombre) this.errors.nombre = "First name is required.";
      if (!this.newDoctor.genero) this.errors.genero = "Gender is required.";
      if (!this.newDoctor.especialidad_fk) this.errors.especialidad_fk = "Specialty ID is required.";
      if (!this.newDoctor.fecha_nacimiento) this.errors.fecha_nacimiento = "Date of birth is required.";
      if (!this.newDoctor.contacto) this.errors.contacto = "Contact is required.";
      if (!this.newDoctor.tipo_contacto) this.errors.tipo_contacto = "Contact type is required.";
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
            body: JSON.stringify(this.newDoctor)
          });

          if (!response.ok) {
            throw new Error("Error adding doctor");
          }

          const data = await response.json();
          console.log("Doctor added:", data);
          this.fetchDoctors();
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
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 400px;
  width: 100%;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h2 {
  margin: 0;
  font-size: 24px;
}

.close-button {
  cursor: pointer;
}

/* Estilos para el formulario */
.form-group {
  margin-bottom: 15px;
}

.error {
  color: red;
  font-size: 0.8em;
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

.delete-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
}

.delete-button:hover {
  background-color: #c0392b;
}

.alert {
  background-color: #f8d7da;
  color: #721c24;
  padding: 15px;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  margin-bottom: 20px;
}
</style>
