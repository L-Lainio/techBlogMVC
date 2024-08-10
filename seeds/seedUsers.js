const { User } = require('../models');

const userData = [
    {
        user_id: '/',
        username: '/',
        email: '/',
        active_ind: '/',
        password: '/'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
