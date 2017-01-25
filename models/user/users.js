// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");

// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js");

var users = sequelize.define("users", {
    uid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    uname: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    fname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    joined_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
    }
}, {
    timestamps: false
});

// Sync with DB
users.sync();

module.exports = users;
