const sequelize = require('../conf/connections');

// Import all models
const { User, Post, Comment } = require('../models');

// Import all seeds
const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

// Asynchronous function to seed the database
const seedDatabase = async () => {
        await sequelize.sync({ force: true });

        // Seed users first
        const users = await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true,
        });
        // console.log('Users seeded successfully');

        // Seed posts after users
        const posts = await Post.bulkCreate(postData, {
            individualHooks: true,
            returning: true,

        });
        // console.log('Posts seeded successfully');

        // Seed comments after posts
        const comments = await Comment.bulkCreate(commentData, {
            individualHooks: true,
            returning: true,

        });
        // console.log('Comments seeded successfully');


        process.exit(0);
    };


// Call the seeding function
seedDatabase();
