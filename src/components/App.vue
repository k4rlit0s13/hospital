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
          height="30">
      </div>
    </div>
    <div class="container">
      <div class="header">
        <h2>List of Doctors</h2>
        <button class="add-button">+ Add new doctor</button>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      doctors: [], // Aquí se almacenarán los datos de los doctores
    };
  },
  methods: {
    // Método para formatear la fecha
    formatDate(dateString) {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    // Método para obtener los doctores desde la API usando fetch
    async fetchDoctors() {
      try {
        const response = await fetch('http://localhost:3000/api/v1/doctors');
        if (!response.ok) {
          throw new Error('Failed to fetch doctors');
        }
        const data = await response.json(); // Convierte la respuesta en JSON
        this.doctors = data; // Asigna los datos al arreglo de doctores
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    },
  },
  mounted() {
    this.fetchDoctors(); // Llamada a la API cuando el componente se monta
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

.status-approved {
  color: #4CAF50;
  font-weight: bold;
}

.status-declined {
  color: #f44336;
  font-weight: bold;
}

.action-icon {
  color: #888;
  cursor: pointer;
}

.doctor-info {
  display: flex;
  align-items: center;
}

.doctor-info img {
  border-radius: 50%;
  margin-right: 10px;
}

.action-button {
  background-color: #efefef;
  color: rgb(148, 148, 148);
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
}</style>