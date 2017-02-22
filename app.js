var http = require('http');
var fs = require('fs');
// var formidable = require("formidable");
var util = require('util');
var mysql = require('mysql');

var express = require('express');
var path = require('path');
var ejs = require('ejs');

var app = express(); 
var PORT = process.env.PORT || 8080;

/// mysql connection for demo ///
var connection = mysql.createConnection({
  host: 'mwgmw3rs78pvwk4e.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'x5xhg901hjefvq0u',
  password: 'ixcckomsi3ojkt7a',
  database: 'iv28dtvanxwxdm51'
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('layout', {
    title: 'Home'
  });
});

app.get('/vitals', function(req, res) {
    res.render('anotherpage', {
        title: 'Home'
    });

});

// app.get('/contacts/create', function(req, res){
//   res.render('anotherpage', {
//     title: 'Home'
//   });
// });

// app.get('/contacts/:id', function(req, res){
//   res.render('anotherpage', {
//     title: 'Home'
//   });
// });

app.post('/contacts', function (req, res){
  connection.query('INSERT INTO contacts (uid, cname, phone) VALUES (?, ?, ?)', [1, req.body.magicName, req.body.magicNumber], function (err, result) {
    if (err) throw (err);
    res.redirect('./about');
    console.log(req.body.magicName);
    console.log(req.body.magicNumber);
  });
});

app.get('/about', function(req, res){
  res.render('anotherpage', {
    title: 'Home'
  });
});

// app.post('/contacts', function (req, res) {
//   var cname = req.body.magicName;
//   var cphone = req.body.magicNumber;
//   res.send()
// })




app.listen(PORT);

