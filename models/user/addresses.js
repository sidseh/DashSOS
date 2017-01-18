 // This may be confusing but here Sequelize (capital) references the standard library
 var Sequelize = require("sequelize");

 // sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
 var sequelize = require("../config/connection.js");

 var address = sequelize.define("address", {
     user_id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         primaryKey: true
     },
     address: {
         type: Sequelize.STRING,
         allowNull: false
     },
     city: {
         type: Sequelize.STRING,
         allowNull: false
     },
     state: {
         type: Sequelize.STRING,
         allowNull: false
     },
     zip: {
         type: Sequelize.STRING,
         allowNull: false
     }
 }, {
     timestamps: false
 });

 // Sync with DB
 address.sync();

 module.exports = address;
