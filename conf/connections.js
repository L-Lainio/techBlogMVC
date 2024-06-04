const Sequelize = require('sequelize');
require('dotenv').config();

//Crea a new Sequelize instance with the specified dialect
const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PW,
	{
		host: 'localhost',
		dialect: 'postgres',
		port: 3001,
	},
);

module.exports = sequelize;
