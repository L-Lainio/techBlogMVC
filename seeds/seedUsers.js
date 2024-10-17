const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
    {
        user_id: 1,
        username: 'john_doe',
        email: 'john.doe@example.com',
        password: 'password123',
    },
    {
        user_id: 2,
        username: 'jane_smith',
        email: 'jane.smith@example.com',
        password: 'password456',
    },
    {
        user_id: 3,
        username: 'alex_jones',
        email: 'alex.jones@example.com',
        password: 'alexpassword',
    },
    {
        user_id: 4,
        username: 'mary_jane',
        email: 'mary.jane@example.com',
        password: 'mary1234',
    },
    {
        user_id: 5,
        username: 'tom_hardy',
        email: 'tom.hardy@example.com',
        password: 'hardyPass789',
    },
    {
        user_id: 6,
        username: 'chris_evans',
        email: 'chris.evans@example.com',
        password: 'supersecret987',
    },
    {
        user_id: 7,
        username: 'sarah_connor',
        email: 'sarah.connor@example.com',
        password: 'terminator2029',
    },
    {
        user_id: 8,
        username: 'tony_stark',
        email: 'tony.stark@example.com',
        password: 'iamironman3000',
    },
    {
        user_id: 9,
        username: 'bruce_wayne',
        email: 'bruce.wayne@example.com',
        password: 'darkknight123',
    },
    {
        user_id: 10,
        username: 'diana_prince',
        email: 'diana.prince@example.com',
        password: 'wonderwoman456',
    },
    {
        user_id: 11,
        username: 'peter_parker',
        email: 'peter.parker@example.com',
        password: 'spideywebs789',
    },
    {
        user_id: 12,
        username: 'clark_kent',
        email: 'clark.kent@example.com',
        password: 'superman999',
    },
    {
        user_id: 13,
        username: 'natasha_romanoff',
        email: 'natasha.romanoff@example.com',
        password: 'blackwidow001',
    },
    {
        user_id: 14,
        username: 'steve_rogers',
        email: 'steve.rogers@example.com',
        password: 'captainamerica1941',
    },
    {
        user_id: 15,
        username: 'bruce_banner',
        email: 'bruce.banner@example.com',
        password: 'hulksmash888',
    },
    {
        user_id: 16,
        username: 'wanda_maximoff',
        email: 'wanda.maximoff@example.com',
        password: 'scarletwitch999',
    },
    {
        user_id: 17,
        username: 'tchalla_blackpanther',
        email: 'tchalla@example.com',
        password: 'wakandaForever123',
    },
    {
        user_id: 18,
        username: 'loki_laufeyson',
        email: 'loki.laufeyson@example.com',
        password: 'tricksterGod321',
    },
    {
        user_id: 19,
        username: 'bucky_barnes',
        email: 'bucky.barnes@example.com',
        password: 'wintersoldier333',
    },
    {
        user_id: 20,
        username: 'gamora_guardian',
        email: 'gamora@example.com',
        password: 'daughterofthanos456',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
