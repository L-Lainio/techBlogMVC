// Import Sequelize
const { Sequelize } = require('sequelize');

// Create a new Sequelize instance with the specified dialect
const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'mysql' // Specify the dialect here (e.g., 'mysql', 'postgres', 'sqlite')
});

// Test the connection
async function testConnection() {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}

// Call the testConnection function to test the connection
testConnection();
