<template>
  <body>
    <div class="navbar">
      <div class="logo">
        +
      </div>
      <div class="menu">
        <a href="#">
          Users
        </a>
        <a href="#">
          Patients
        </a>
        <a href="#">
          Hospitals
        </a>
        <a href="#">
          Notice
        </a>
        <a href="#">
          Help Center
        </a>
        <div class="user-info">
          <img alt="User profile picture" height="30"
            src="https://storage.googleapis.com/a1aa/image/HU1V6oyKom5eLq6r3I6fe9Py5v1KXD0QKkfshcTaQletAplcC.jpg"
            width="30" />
          <span>
            Marvin McKinney
          </span>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="header">
        <h2>
          List of doctors
        </h2>
        <button class="add-button">
          + Add new doctor
        </button>
      </div>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                ID
              </th>
              <th>
                Email
              </th>
              <th>
                Phone number
              </th>
              <th>
                Date added
              </th>
              <th>
                STATUS
              </th>
              <th>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img alt="Doctor profile picture" height="40"
                  src="https://storage.googleapis.com/a1aa/image/xOfy6eygchglgkhmZ6m0IehU9YhJxWxdM5HKYZcyyeQeAplcC.jpg"
                  width="40" />
                Brooklyn Simmons
              </td>
              <td>
                87364523
              </td>
              <td>
                brooklyns@mail.com
              </td>
              <td>
                (603) 555-0123
              </td>
              <td>
                21/12/2022 10:40 PM
              </td>
              <td class="status">
                <span class="approved">
                  Approved
                </span>
              </td>
              <td class="action">
                <i class="fas fa-arrow-right">
                </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Doctor profile picture" height="40"
                  src="https://storage.googleapis.com/a1aa/image/xOfy6eygchglgkhmZ6m0IehU9YhJxWxdM5HKYZcyyeQeAplcC.jpg"
                  width="40" />
                Kristin Watson
              </td>
              <td>
                93874563
              </td>
              <td>
                kristinw@mail.com
              </td>
              <td>
                (219) 555-0114
              </td>
              <td>
                22/12/2022 05:20 PM
              </td>
              <td class="status">
                <span class="declined">
                  Declined
                </span>
              </td>
              <td class="action">
                <i class="fas fa-arrow-right">
                </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Doctor profile picture" height="40"
                  src="https://storage.googleapis.com/a1aa/image/xOfy6eygchglgkhmZ6m0IehU9YhJxWxdM5HKYZcyyeQeAplcC.jpg"
                  width="40" />
                Jacob Jones
              </td>
              <td>
                23847569
              </td>
              <td>
                jacobj@mail.com
              </td>
              <td>
                (319) 555-0115
              </td>
              <td>
                23/12/2022 12:40 PM
              </td>
              <td class="status">
                <span class="approved">
                  Approved
                </span>
              </td>
              <td class="action">
                <i class="fas fa-arrow-right">
                </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Doctor profile picture" height="40"
                  src="https://storage.googleapis.com/a1aa/image/xOfy6eygchglgkhmZ6m0IehU9YhJxWxdM5HKYZcyyeQeAplcC.jpg"
                  width="40" />
                Cody Fisher
              </td>
              <td>
                39485632
              </td>
              <td>
                codyf@mail.com
              </td>
              <td>
                (229) 555-0109
              </td>
              <td>
                24/12/2022 03:00 PM
              </td>
              <td class="status">
                <span class="approved">
                  Approved
                </span>
              </td>
              <td class="action">
                <i class="fas fa-arrow-right">
                </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Doctor profile picture" height="40"
                  src="https://storage.googleapis.com/a1aa/image/xOfy6eygchglgkhmZ6m0IehU9YhJxWxdM5HKYZcyyeQeAplcC.jpg"
                  width="40" />
                Brooklyn Simmons
              </td>
              <td>
                87364523
              </td>
              <td>
                brooklyns@mail.com
              </td>
              <td>
                (603) 555-0123
              </td>
              <td>
                21/12/2022 10:40 PM
              </td>
              <td class="status">
                <span class="approved">
                  Approved
                </span>
              </td>
              <td class="action">
                <i class="fas fa-arrow-right">
                </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Doctor profile picture" height="40"
                  src="https://storage.googleapis.com/a1aa/image/xOfy6eygchglgkhmZ6m0IehU9YhJxWxdM5HKYZcyyeQeAplcC.jpg"
                  width="40" />
                Kristin Watson
              </td>
              <td>
                93874563
              </td>
              <td>
                kristinw@mail.com
              </td>
              <td>
                (219) 555-0114
              </td>
              <td>
                22/12/2022 05:20 PM
              </td>
              <td class="status">
                <span class="declined">
                  Declined
                </span>
              </td>
              <td class="action">
                <i class="fas fa-arrow-right">
                </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Doctor profile picture" height="40"
                  src="https://storage.googleapis.com/a1aa/image/xOfy6eygchglgkhmZ6m0IehU9YhJxWxdM5HKYZcyyeQeAplcC.jpg"
                  width="40" />
                Jacob Jones
              </td>
              <td>
                23847569
              </td>
              <td>
                jacobj@mail.com
              </td>
              <td>
                (319) 555-0115
              </td>
              <td>
                23/12/2022 12:40 PM
              </td>
              <td class="status">
                <span class="approved">
                  Approved
                </span>
              </td>
              <td class="action">
                <i class="fas fa-arrow-right">
                </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Doctor profile picture" height="40"
                  src="https://storage.googleapis.com/a1aa/image/xOfy6eygchglgkhmZ6m0IehU9YhJxWxdM5HKYZcyyeQeAplcC.jpg"
                  width="40" />
                Cody Fisher
              </td>
              <td>
                39485632
              </td>
              <td>
                codyf@mail.com
              </td>
              <td>
                (229) 555-0109
              </td>
              <td>
                24/12/2022 03:00 PM
              </td>
              <td class="status">
                <span class="approved">
                  Approved
                </span>
              </td>
              <td class="action">
                <i class="fas fa-arrow-right">
                </i>
              </td>
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
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }
        .navbar {
            background-color: #2d4739;
            padding: 10px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .navbar .logo {
            color: white;
            font-size: 24px;
            font-weight: bold;
        }
        .navbar .menu {
            display: flex;
            align-items: center;
            flex-grow: 1;
        }
        .navbar .menu a {
            color: white;
            margin: 0 10px;
            text-decoration: none;
            font-size: 16px;
        }
        .navbar .menu .user-info {
            display: flex;
            align-items: center;
            margin-left: auto;
        }
        .navbar .menu .user-info img {
            border-radius: 50%;
            margin-right: 10px;
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
        }
        .table-container {
            background-color: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .table-container table {
            width: 100%;
            border-collapse: collapse;
        }
        .table-container table th, .table-container table td {
            padding: 10px;
            text-align: left;
        }
        .table-container table th {
            background-color: #f5f5f5;
            font-weight: 500;
        }
        .table-container table td {
            border-bottom: 1px solid #f5f5f5;
        }
        .table-container table td img {
            border-radius: 50%;
            width: 40px;
            height: 40px;
            margin-right: 10px;
        }
        .table-container table .status {
            display: flex;
            align-items: center;
        }
        .table-container table .status span {
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 14px;
        }
        .table-container table .status .approved {
            background-color: #e0f7e9;
            color: #4CAF50;
        }
        .table-container table .status .declined {
            background-color: #fdecea;
            color: #f44336;
        }
        .table-container table .action {
            text-align: center;
        }
        .table-container table .action i {
            color: #4CAF50;
            cursor: pointer;
        }
  </style>