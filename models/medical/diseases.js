// This may be confusing but here Sequelize (capital) references the standard library
var sequelize = require("sequelize");

// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var dbconnectionB = require("../dbconnections/dbconnectionB.js");

var diseases = sequelize.define("diseases", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    uid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    diseases: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

// Sync with DB
diseases.sync();

module.exports = diseases;