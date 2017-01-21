var Sequelize = require('sequelize');
var sequelize = new Sequelize ("dashsos_C", "emergency", "911Button", {
		host: "dashsos-c.c611opkzze4p.us-east-1.rds.amazonaws.com",
		port: 3306,
		dialect: 'mysql'
	});


// Exports the connection for other files to use
module.exports = sequelize;