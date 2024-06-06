const { Model, DataTypes } = require('sequelize');
const sequelize = require('../conf/connections.js');

class Comment extends Model { }

Comment.init(
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

    },
    {
        sequelize,
        modelName: 'comment',
        freezeTableName: true,
        underscored: true,
    }
);

module.exports = Comment;
