var Sequelize = require('sequelize');
var sequelize = new Sequelize ("dashsosA", "emergency", "911Button", {
		host: "dashsos-a.c611opkzze4p.us-east-1.rds.amazonaws.com",
		port: 3306,
		dialect: 'mysql'
	});


sequelize.authenticate()
    .then(function () {
        console.log("CONNECTED! ");
    })
    .catch(function (err) {
        console.log("SOMETHING DONE GOOFED");
    })
    .done();

// Exports the connection for other files to use
module.exports = sequelize;