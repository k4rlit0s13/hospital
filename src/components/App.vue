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
            <label for="user-type">User type</label>
            <select id="user-type">
              <option>Select user type</option>
            </select>
          </div>
          <div class="form-group">
            <label for="gender">Gender</label>
            <select id="gender">
              <option>Select gender</option>
            </select>
          </div>
          <div class="form-group">
            <label for="first-name">First name</label>
            <input type="text" id="first-name" placeholder="Your first name" />
          </div>
          <div class="form-group">
            <label for="last-name">Last name</label>
            <input type="text" id="last-name" placeholder="Your last name" />
          </div>
          <div class="form-group">
            <label for="designation">Designation</label>
            <input type="text" id="designation" placeholder="Your designation" />
          </div>
          <div class="form-group date">
            <label for="dob">Date of birth</label>
            <input type="text" id="dob" placeholder="Select your date of birth" />
            <i class="fas fa-calendar-alt date-icon"></i>
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" id="email" placeholder="Your email" />
          </div>
          <button type="submit" class="btn">SUBMIT</button>
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
      showModal: false, // Estado para controlar la visibilidad del modal
    };
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
    submitDoctor() {
      console.log("Doctor submitted"); // Aquí se puede enviar el formulario a la API
      this.showModal = false;
    },
  },
  mounted() {
    this.fetchDoctors();
  },
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
</style>
