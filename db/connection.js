const mysql = require("mysql2");
// Connect to database
const db = mysql.createConnection({
    host: '172.24.208.1',
    // Your MySQL username,
    user: 'wsl',
    // Your MySQL password
    password: 'password',
    database: 'election'
  });

  module.exports = db;