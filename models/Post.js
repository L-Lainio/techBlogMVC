const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Adjust the path to your sequelize instance

class Post extends Model {}

Post.init(
    {
        post_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        post_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        modelName: 'Posts',
        tableName: 'Posts',
        timestamps: false, // Automatically adds createdAt and updatedAt fields
    }
);

module.exports = Post;
