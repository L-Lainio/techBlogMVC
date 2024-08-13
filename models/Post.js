const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');

class Post extends Model { }

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
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'user_id',
            },
        },
    },
    {
        sequelize,
        modelName: 'Post',
        tableName: 'Posts',
        timestamps: true,
    }
);

Post.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Post;
