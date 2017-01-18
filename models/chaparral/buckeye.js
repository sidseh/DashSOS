// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize"); 

// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js"); 

var buckeye = sequelize.define("buckeye", {
  group_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  member_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  joined_date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false
  }
},
{
    timestamps: false
});

// Sync with DB
buckeye.sync();

module.exports = buckeye;
