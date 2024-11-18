// require("dotenv").config();
// module.exports = {
//   development: {
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_CONNECTION,
//   },
//   test: {
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_CONNECTION,
//   },
//   production: {
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_CONNECTION,
//   },
// };

const mysql = require("mysql2");

const dbConnection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  database: "db_ripad",
  password: "",
});

module.exports = dbConnection;
