const mysql = require("mysql");
const util = require("util");

var connection = mysql.createConnection({
  host: "localhost",

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "employees"
});

connection.connect();
connection.query = util.promisify(connection.query)

module.exports = connection;