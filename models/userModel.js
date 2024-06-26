const { Model, DataTypes } = require('sequelize');
const sequelize = require('../conf/connections');
const bcrypt = require('bcrypt');
const Post = require('./Post');

class Post extends Model {
    // set up method to run on instance data (per user) to check password
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password);
    }
}

// define table columns and configuration
Post.init({
    // define an id column
    id: {
        // use the special Sequelize DataTypes object provide what type of data it is
        type: DataTypes.INTEGER,
        // equivalent of SQL 'NOT NULL'
        allowNull: false,
        // instruct that this is the Primary Key
        primaryKey: true,
        // turn on auto increment
        autoIncrement: true,
    },
    // define a username column
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    // define a password column
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // this means the password must be at least four characters long
            len: [4],
        },
    },
// }, { ??? do i need this?
    // hooks: {
    //     // short await that encrypts the password prior to it entering the db
    //     async beforeCreate(newUserData) {
    //         newUserData.password = await bcrypt.hash(newUserData.password, 10);
    //         return newUserData;



    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
});

module.exports = { User, Post, Comment };
