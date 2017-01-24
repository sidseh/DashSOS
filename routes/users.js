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




module.exports = function(app) {
  app.use(methodOverride('_method'));
  // Incorporated a variety of Express packages.
  app.use(require('morgan')('combined'));
  app.use(require('cookie-parser')());
  app.use(require('body-parser').urlencoded({ extended: true }));
  app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true, store: new memoryStore() }));

    app.set('views', path.join(__dirname, '../../views'));
    app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars');
    app.get('/', function(req, res) {
        res.render('index');
    });

  app.get('/login', function(req, res) {
    res.redirect('/');
  });
 
  app.get('/dashboard', ensureAuthenticated, function(req, res) {
    var userName = undefinedCheck(req.user.displayName);
    var id = req.user.id;
    var email = undefinedCheck(req.user.emails) === '' ? '' : req.user.emails[0].value;
    var firstName = undefinedCheck(req.user.name) === '' ? '' : req.user.name.givenName;
    var lastName = undefinedCheck(req.user.name) === '' ? '' : req.user.name.familyName;
    var provider = req.user.provider;
    var options = {};
    options[provider+'_id'] = id;
      User.findOrCreate({where: options})
      .spread(function(user, created) {
        var groupStatus = user.get({plain: true}).groups === 0 || req.query.group === 'addjoin';
        var notRegistered = !user.get({plain: true}).registered;
        var grootsID = user.get({plain: true}).user_id;
        var showHide = !notRegistered && groupStatus ? "show": "hide";
        var defaultGroupID = user.get({plain: true}).default_group;
        if(defaultGroupID == null) {
        res.render('dashboard', {
          'notRegistered': notRegistered,
          'groupsZero': groupStatus,
          'display': showHide,
          'email': email,
          'name': userName,
          'fName': firstName,
          'lName': lastName,
          'userID': grootsID,
          'groupName': 'groots',
          'groupsplus': req.query.group
        });

        } else {
        Organization.findOne({where: {org_id: user.get({plain: true}).default_group}
          }).then(function(group) {
              var defaultAdminID = group.get({plain: true}).admin_id;
              var defaultGroup = group.get({plain: true}).org_name;
              Organization.hasMany(GroupMembership, {foreignKey: 'group_id', targetKey: 'org_id'});
              Organization.hasMany(GroupEvent, {foreignKey: 'org_id', targetKey: 'org_id'});
              GroupEvent.belongsTo(Organization, {foreignKey: 'org_id', targetKey: 'org_id'});
              GroupMembership.belongsTo(Organization, {foreignKey: 'group_id', targetKey: 'org_id'});
              GroupMembership.findAll({
                where:{member_id: grootsID},
                include: [{model: Organization, required: true, include:
                  [{model: GroupEvent, required: false}]
                }]
              }).then(function(memberGroups) {
                // console.log(memberGroups);
                var groups = [];
                var admin;
                var groupcode;
                var events = [];
                var eventsObject;

                // Do admin check for initial login
                if(defaultAdminID == grootsID) {
                  admin = true;
                } else {
                  admin = false;
                }

                memberGroups.forEach(function(k) {
                  console.log(k);
                  var orgName = k.Organization.dataValues.org_name;
                  // console.log(orgName);
                  var orgCode = k.Organization.dataValues.org_shortcode;
                  var adminID = k.Organization.dataValues.admin_id;
                  var orgID = k.Organization.dataValues.org_id;
                  var groupEvents = k.Organization.GroupEvents;
                  console.log(groupEvents);


};