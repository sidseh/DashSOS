// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");

// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js");

var pwid = sequelize.define("pwid", {
    pwid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    uid: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

// Sync with DB
pwid.sync();

module.exports = pwid;