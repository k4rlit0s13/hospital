<template>
    <div class="doctors-list">
      <h2>List of doctors</h2>
      <p>{{ availableDoctors }} available doctors</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Date added</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="doctor in doctors" :key="doctor.id">
            <td>
              <div class="doctor-info">
                <img :src="doctor.avatar" alt="Doctor avatar" />
                <div>
                  <p>{{ doctor.name }}</p>
                  <p>{{ doctor.specialization }}</p>
                </div>
              </div>
            </td>
            <td>{{ doctor.id }}</td>
            <td>{{ doctor.email }}</td>
            <td>{{ doctor.phoneNumber }}</td>
            <td>{{ formatDate(doctor.dateAdded) }}</td>
            <td>
              <span :class="`status ${doctor.status.toLowerCase()}`">{{
                doctor.status
              }}</span>
            </td>
            <td>
              <button class="action-button">
                <font-awesome-icon icon="ellipsis-h" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        availableDoctors: 345,
        doctors: [
          {
            id: 87364523,
            name: 'Brooklyn Simmons',
            specialization: 'Dermatologists',
            email: 'brooklyns@mail.com',
            phoneNumber: '(603) 555-0123',
            dateAdded: '2022-12-21T10:40:00.000Z',
            status: 'Approved',
            avatar: 'https://example.com/avatar1.jpg', // Replace with actual image URLs
          },
          // ... other doctors
        ],
      };
    },
    methods: {
      formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${day}/${month}/${year} ${hours}:${minutes.toString().padStart(2, '0')}`;
      },
    },
  };
  </script>
  
  <style scoped>
  .doctors-list {
    /* Add styling for the list container */
  }
  
  table {
    /* Add styling for the table */
  }
  
  th,
  td {
    /* Add styling for table cells */
  }
  
  .doctor-info {
    /* Add styling for the doctor info container */
    display: flex;
    align-items: center;
  }
  
  .doctor-info img {
    /* Add styling for the doctor avatar */
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .status {
    /* Add styling for the status badge */
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  .status.approved {
    background-color: #c8e6c9;
    color: #256d32;
  }
  
  .status.declined {
    background-color: #ffcdd2;
    color: #c63737;
  }
  
  .action-button {
    /* Add styling for the action button */
    border: none;
    background: none;
    cursor: pointer;
  }
  </style>