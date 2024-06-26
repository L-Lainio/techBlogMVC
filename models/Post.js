const { Model, DataTypes } = require('sequelize');
const sequelize = require('../conf/connections');


// create our Post model
class Post extends Model { }
Post.init({
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
    /*user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },*/
}, {
    sequelize,
    modelName: 'post',
    underscored: true,
});


module.exports = Post;
