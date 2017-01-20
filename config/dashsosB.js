var mysql = require('mysql');
var host = "dashsos-b.c611opkzze4p.us-east-1.rds.amazonaws.com",
    database = "dashsos_B", 
    user = "emergency",
    password = "911Button",
    port = 3306;

var connection = mysql.createConnection({
  host     : process.env.host,
  user     : process.env.user,
  password : process.env.password,
  port     : process.env.port
});


// Exports the connection for other files to use
module.exports = dbconnectionB;
