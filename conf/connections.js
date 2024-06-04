// Import Sequelize
const { Sequelize } = require('sequelize');
require('dotenv').config();

let sequelize;

// Create a new Sequelize instance with the specified dialect
if (process.env.JAWSDB_URL) {
	sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
	sequelize = new Sequelize(
		process.env.DB_NAME,
		process.env.DB_USER,
		process.env.DB_PW,
		{
			host: 'localhost',
			dialect: 'sequelize',
			port: 3001,
		},
	);
}

module.exports = sequelize;
