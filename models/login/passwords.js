// This may be confusing but here Sequelize (capital) references the standard library
var sequelize = require("sequelize");

// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var dbconnectionA = require("../dbconnections/dbconnectionA.js");

var pw = sequelize.define("pw", {
    pwid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    pw: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

// Sync with DB
pw.sync();

module.exports = pw;
