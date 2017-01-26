var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function (res) {
  'use strict'

  models.demo.findAll({
    include: [ models.Task ]
  }).then(function(users) {
    res.render('index', {
      title: 'test',
      users: users
    });
  });
});

router.get('/contacts', function (res) {
  'use strict'

  models.demo.findAll({
    include: [ models.Task ]
  }).then(function(users) {
    res.render('contacts', {
      title: 'test',
      users: users
    });
  });
});


module.exports = router;