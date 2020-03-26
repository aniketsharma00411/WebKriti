const mysql = require("mysql");

const mySqlConnection = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",

  user: "sql12329461",

  password: "KxYaTdMATW",

  database: "sql12329461"
});

mySqlConnection.connect(err => {
  if (err) console.log(err);

  console.log("Database Connected!");
});

module.exports = mySqlConnection;
