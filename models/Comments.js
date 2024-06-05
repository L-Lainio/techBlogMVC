const { Model, DataTypes } = require('sequelize');
const sequelize = require('../conf/connections.js');


// Import Sequelize and create a new instance
const { Sequelize } = require('sequelize');
const newSequelize = new Sequelize({
    host: 'localhost',
    dialect: 'postgres'
});

// Define the Post model
const newPost = sequelize.define('newPost', {
    title: {
        type: DataTypes.STRING,
    },
    content: {
        type: DataTypes.TEXT,
    }
});

// Synchronize the model with the database
sequelize.sync()
    .then(() => {
        console.log('Model synchronized successfully.');
    })
    .catch((error) => {
        console.error('Error synchronizing model:', error);
    });

class Comments extends Model { }

Comments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_text: {
            type: DataTypes.STRING,
            validate: {
                len: [3],
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User', // Update the model name to match your actual User model
                key: 'id',
            },
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Post', // Update the model name to match your actual Post model
                key: 'id',
            },
        },
    },
    {
        sequelize,
        modelName: 'Comment',
        freezeTableName: true,
        underscored: true,
    }
);

module.exports = Comments;
