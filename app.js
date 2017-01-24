var http = require('http');
var fs = require('fs');
var formidable = require("formidable");
var util = require('util');

var express = require('express');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('layout', {
        title: 'Home'
    });
});

app.get('/vitals', function(req, res) {
    res.render('anotherpage', {
        title: 'Home'
    });
});

app.get('/contacts', function(req, res) {
    res.render('anotherpage', {
        title: 'Home'
    });
    if (req.method.toLowerCase() == 'get') {
        displayForm(res);
    } else if (req.method.toLowerCase() == 'post') {
        processAllFieldsOfTheForm(req, res);
    }
});

function displayForm(res) {
    fs.readFile('form.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        console.log(data)
        res.end();
    });
}

function processAllFieldsOfTheForm(req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        //Store the data from the fields in your data store.
        //The data store could be a file or database or any other store based
        //on your application.
        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        res.write('received the data:\n\n');
        res.end(util.inspect({
            fields: fields,
            files: files
        }));
    });
}
app.get('/about', function(req, res) {
    res.render('anotherpage', {
        title: 'Home'
    });
});



app.listen(3000);
