const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedPosts = require('./seeds');
const seedComments = require('./seeds');



const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPosts();
    await seedComments();
    process.exit(0);
};

seedAll();
