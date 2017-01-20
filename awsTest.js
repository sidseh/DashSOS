var pool = require('generic-pool');
var async = require('async');
var mysql = require('mysql');
var Sequelize = require('sequelize');

var host = "dashsos-c.c611opkzze4p.us-east-1.rds.amazonaws.com",
    database = "dashsos_C", 
    user = "emergency",
    password = "911Button";

var dbClient; 

async.waterfall([
    // 1. establish connection to database
    function (callback) {
        console.log("Connecting to database " + database + "...");
        dbClient = mysql.createConnection({
            host: host,
            database: database,
            user: user,
            password: password,
            port: 3306
        });
        dbClient.connect();
    }
    }



], function (err, results) {
    if (err)
    {
        console.log("An error occurred...");
        console.log(err);
    }
    else
    {
        console.log("Everything successfully completed!");
    }       
    dbClient.end();
})