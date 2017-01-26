var express = require('express');
var path = require('path');

var app = express(); 

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('layout', {
    title: 'Home'
  });
});

app.get('/vitals', function(req, res){
  res.render('anotherpage', {
    title: 'Home'
  });
});

app.get('/contacts', function(req, res){
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
