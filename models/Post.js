const { Model, DataTypes } = require('sequelize');
const sequelize = require('module');
const express = require('express');

const router = express.Router();

// create our Post model
class Post extends Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            content: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            user_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'user',
                    key: 'id',
                },
            },
        }, {
            sequelize,
            modelName: 'post',
            timestamps: false,
            underscored: true,
        });
    }
}

module.exports = Post;
