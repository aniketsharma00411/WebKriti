const mysql = require("mysql");

const mySqlConnection = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",

  user: "sql12330532",

  password: "qFLN9956zl",

  database: "sql12330532"
});

mySqlConnection.connect(err => {
  if (err) console.log(err);

  console.log("Database Connected!");
});

module.exports = mySqlConnection;
