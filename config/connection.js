//NODE CONNECTION TO MYSQL
var mysql = require("mysql");

var connection;
//HEROKU DATABASE 
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} 
//USE LOCAL SQL DATABASE
else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db",
  });
}
//CONNECT TO THE DB
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//EXPORT CONNECTION
module.exports = connection;