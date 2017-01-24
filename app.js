var http = require('http');
var fs = require('fs');
var formidable = require("formidable");
var util = require('util');

var express = require('express');
var path = require('path');

var app = express(); 

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

app.get('/contacts', function(req, res){
  res.render('anotherpage', {
    title: 'Home'
  });
});

app.get('/contacts/:id', function(req, res){
  res.render('anotherpage', {
    title: 'Home'
  });
});

app.get('/about', function(req, res){
  res.render('anotherpage', {
    title: 'Home'
  });
});



app.listen(3000);
