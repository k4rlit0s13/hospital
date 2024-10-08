<template>
  <body>
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
        <img alt="User  profile picture"
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
              <th>Email</th>
              <th>Phone number</th>
              <th>Date added</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="doctor-info">
                <img alt="Doctor profile picture"
                  src="https://storage.googleapis.com/a1aa/image/dUCDEVs1YNpCPhWLeoOxVKepA7JW1ctseKgSEMdM58cGdbJnA.jpg"
                  width="30" height="30">
                <div>
                  <div>Brooklyn Simmons</div>
                  <div>Dermatologists</div>
                </div>
              </td>
              <td>87364523</td>
              <td>brooklyns@mail.com</td>
              <td>(603) 555-0123</td>
              <td>21/12/2022 10:40 PM</td>
              <td class="status-approved">Approved</td>
              <td><button class="action-button">-></button></td>
            </tr>
            <tr>
              <td class="doctor-info">
                <img alt="Doctor profile picture"
                  src="https://storage.googleapis.com/a1aa/image/dUCDEVs1YNpCPhWLeoOxVKepA7JW1ctseKgSEMdM58cGdbJnA.jpg"
                  width="30" height="30">
                <div>
                  <div>Kristin Watson</div>
                  <div>Infectious disease</div>
                </div>
              </td>
              <td>93874563</td>
              <td>kristinw@mail.com</td>
              <td>(219) 555-0114</td>
              <td>22/12/2022 05:20 PM</td>
              <td class="status-declined">Declined</td>
              <td><button class="action-button">-></button></td>
            </tr>
            <tr>
              <td class="doctor-info">
                <img alt="Doctor profile picture"
                  src="https://storage.googleapis.com/a1aa/image/dUCDEVs1YNpCPhWLeoOxVKepA7JW1ctseKgSEMdM58cGdbJnA.jpg"
                  width="30" height="30">
                <div>
                  <div>Jacob Jones</div>
                  <div>Ophthalmologists</div>
                </div>
              </td>
              <td>23847569</td>
              <td>jacobj@mail.com</td>
              <td>(319) 555-0115</td>
              <td>23/12/2022 12:40 PM</td>
              <td class="status-approved">Approved</td>
              <td><button class="action-button">-></button></td>
            </tr>
            <tr>
              <td class="doctor-info">
                <img alt="Doctor profile picture"
                  src="https://storage.googleapis.com/a1aa/image/dUCDEVs1YNpCPhWLeoOxVKepA7JW1ctseKgSEMdM58cGdbJnA.jpg"
                  width="30" height="30">
                <div>
                  <div>Cody Fisher</div>
                  <div>Cardiologists</div>
                </div>
              </td>
              <td>39485632</td>
              <td>codyf@mail.com</td>
              <td>(229) 555-0109</td>
              <td>24/12/2022 03:00 PM</td>
              <td class="status-approved">Approved</td>
              <td><button class="action-button">-></button></td>
            </tr>
            <tr>
              <td class="doctor-info">
                <img alt="Doctor profile picture"
                  src="https://storage.googleapis.com/a1aa/image/dUCDEVs1YNpCPhWLeoOxVKepA7JW1ctseKgSEMdM58cGdbJnA.jpg"
                  width="30" height="30">
                <div>
                  <div>Brooklyn Simmons</div>
                  <div>Dermatologists</div>
                </div>
              </td>
              <td>87364523</td>
              <td>brooklyns@mail.com</td>
              <td>(603) 555-0123</td>
              <td>21/12/2022 10:40 PM</td>
              <td class="status-approved">Approved</td>
              <td><button class="action-button">-></button></td>
            </tr>
            <tr>
              <td class="doctor-info">
                <img alt="Doctor profile picture"
                  src="https://storage.googleapis.com/a1aa/image/dUCDEVs1YNpCPhWLeoOxVKepA7JW1ctseKgSEMdM58cGdbJnA.jpg"
                  width="30" height="30">
                <div>
                  <div>Kristin Watson</div>
                  <div>Infectious disease</div>
                </div>
              </td>
              <td>93874563</td>
              <td>kristinw@mail.com</td>
              <td>(219) 555-0114</td>
              <td>22/12/2022 05:20 PM</td>
              <td class="status-declined">Declined</td>
              <td><button class="action-button">-></button></td>
            </tr>
            <tr>
              <td class="doctor-info">
                <img alt="Doctor profile picture"
                  src="https://storage.googleapis.com/a1aa/image/dUCDEVs1YNpCPhWLeoOxVKepA7JW1ctseKgSEMdM58cGdbJnA.jpg"
                  width="30" height="30">
                <div>
                  <div>Jacob Jones</div>
                  <div>Ophthalmologists</div>
                </div>
              </td>
              <td>23847569</td>
              <td>jacobj@mail.com</td>
              <td>(319) 555-0115</td>
              <td>23/12/2022 12:40 PM</td>
              <td class="status-approved">Approved</td>
              <td><button class="action-button">-></button></td>
            </tr>
            <tr>
              <td class="doctor-info">
                <img alt="Doctor profile picture"
                  src="https://storage.googleapis.com/a1aa/image/dUCDEVs1YNpCPhWLeoOxVKepA7JW1ctseKgSEMdM58cGdbJnA.jpg"
                  width="30" height="30">
                <div>
                  <div>Cody Fisher</div>
                  <div>Cardiologists</div>
                </div>
              </td>
              <td>39485632</td>
              <td>codyf@mail.com</td>
              <td>(229) 555-0109</td>
              <td>24/12/2022 03:00 PM</td>
              <td class="status-approved">Approved</td>
              <td><button class="action-button">-></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </body>
</template>


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