// required npm packages
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');


// Import models
var users = require('../models/user/users.js');
var contacts = require('../models/user/contacts.js');
var addresses = require('../models/user/addresses.js');
var phones = require('../models/user/phones.js');
var vitals = require('../models/medical/vitals.js');
var diseases = require('../models/medical/diseases.js');
var allergies = require('../models/medical/allergies.js');
var medications = require('../models/medical/medications.js');
var pwid = require('../models/login/pwid.js');
var pw = require('../models/login/pw.js');

