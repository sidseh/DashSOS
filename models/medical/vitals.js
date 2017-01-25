// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");

// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js");

var vitals = sequelize.define("vitals", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    uid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    height: {
        type: Sequelize.STRING,
        allowNull: false
    },
    weight: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bldType: {
        type: Sequelize.STRING,
        allowNull: false
    },
    birthdate: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    timestamps: false
});
// Sync with DB
vitals.sync();
module.exports = vitals;
