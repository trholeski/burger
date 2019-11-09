var mysql = require("mysql");


//if we are on Heroku and the JawsDB addon is configured, we will have the environment variable JAWSDB_URL
//this variable will contain what mysql package needs to connect :)
require('dotenv').config();
var mysql = require('mysql');
var connection;
if(process.env.JAWSDB_URL) {  
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //otherwise, we're going to use our local connection!  put your local db set stuff here
  //(and remember our best practice of using the dotenv package and a .env file ;)

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Vipertime.1",
  database: "burgers_db"
});

}



connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;


