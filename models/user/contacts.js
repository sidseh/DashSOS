 // This may be confusing but here Sequelize (capital) references the standard library
 var Sequelize = require("sequelize");

 // sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
 var sequelize = require("../../dbconnections/dbconnectionC.js");

 var contacts = sequelize.define("contacts", {
     uid: {
         type: Sequelize.INTEGER,
         allowNull: false,

     },
     cid: {
         type: Sequelize.INTEGER,
         allowNull: false,
         primaryKey: true
     },
     cname: {
         type: Sequelize.STRING,
         allowNull: false
     },
     cphone: {
         type: Sequelize.INTEGER,
         allowNull: false
     }
 }, {
     timestamps: false
 });

sequelize.sync().then(function() {
    console.log("connection using contacts.js works");
});

 // Sync with DB
 contacts.sync();

 module.exports = contacts;
