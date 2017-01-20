// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");

// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../dbconnections/dbconnectionB.js");

var medications = sequelize.define("medications", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    uid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    medications: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

// Sync with DB
medications.sync();

module.exports = medications;