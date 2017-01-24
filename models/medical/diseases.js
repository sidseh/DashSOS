 // This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");

 // sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js");

var diseases = sequelize.define("diseases", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    uid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    disease: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});
 // Sync with DB
diseases.sync();
module.exports = diseases;
