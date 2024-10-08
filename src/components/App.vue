<template>
  <div class="header">
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Doctors</a></li>
        <li><a href="#">Patients</a></li>
        <li><a href="#">Hospitals</a></li>
        <li><a href="#">Notice</a></li>
        <li><a href="#">Help Center</a></li>
      </ul>
    </nav>
  </div>
  <h4>List of doctors</h4>
  <small>345 available doctors</small>
  <div class="doctors-list">
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
        <tr>
          <td>
            <div class="doctor-info">
              <img src="https://example.com/avatar1.jpg" alt="Doctor avatar" />
              <div>
                <p>Brooklyn Simmons</p>
                <p>Dermatologists</p>
              </div>
            </div>
          </td>
          <td>87364523</td>
          <td>brooklyns@mail.com</td>
          <td>(603) 555-0123</td>
          <td>21/12/2022 10:40</td>
          <td><span class="status approved">Approved</span></td>
          <td><a href="#" class="action-button"><font-awesome-icon icon="ellipsis-h" />-></a></td>
        </tr>
        <tr>
          <td>
            <div class="doctor-info">
              <img src="https://example.com/avatar2.jpg" alt="Doctor avatar" />
              <div>
                <p>Kristin Watson</p>
                <p>Infectious disease</p>
              </div>
            </div>
          </td>
          <td>93874563</td>
          <td>kristinw@mail.com</td>
          <td>(219) 555- 0114</td>
          <td>22/12/2022 05:20</td>
          <td><span class="status declined">Declined</span></td>
          <td><a href="#" class="action-button"><font-awesome-icon icon="ellipsis-h" />-></a></td>
        </tr>
        <tr>
          <td>
            <div class="doctor-info">
              <img src="https://example.com/avatar3.jpg" alt="Doctor avatar" />
              <div>
                <p>Jacob Jones</p>
                <p>Ophthalmologists</p>
              </div>
            </div>
          </td>
          <td>23847569</td>
          <td>jacbj@mail.com</td>
          <td>(319) 555-0115</td>
          <td>23/12/2022 12:40</td>
          <td><span class="status approved">Approved</span></td>
          <td><a href="#" class="action-button"><font-awesome-icon icon="ellipsis-h" />-></a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.header {
  background-color: #256d32;
  color: #fff;
  padding: 20px;
  text-align: center;
}

.header h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.header nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}

.header nav ul li {
  margin-right: 20px;
}

.header nav ul li a {
  color: #fff;
  text-decoration: none;
}

.header nav ul li a:hover {
  color: #ccc;
}

.doctors-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f0f0f0;
}

td {
  background-color: #fff;
}

.doctor-info {
  display: flex;
  align-items: center;
}

.doctor-info img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.status {
  display: flex;
  align-items: center;
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
  padding: 5px 10px;
  border: none;
  background: none;
  cursor: pointer;
}

.arrow-button {
  border: none;
  background: none;
  cursor: pointer;
  padding: 5px 10px;
}

.arrow-button svg {
  font-size: 16px;
}
</style>