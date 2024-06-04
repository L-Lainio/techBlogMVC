const User = require('./User');
const Post = require('./Post');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../conf/connections');
// const Comment = require('./Comments');

class UserModel extends Model { }
class PostModel extends Model { }

// create associations
// User.hasMany(Post, {
//     foreignKey: 'user_id',
//     // onDelete: 'cascade',
// });

// Post.belongsTo(User, {
//     foreignKey: 'user_id',
//     // onDelete: 'cascade',
// });

// User.hasMany(Comment, {
//     foreignKey: 'user_id',
//     onDelete: 'cascade',
// });

// Comment.belongsTo(User, {
//     foreignKey: 'user_id',
//     // onDelete: 'cascade',
// });

// Post.hasMany(Comment, {
//     foreignKey: 'postId',
//     onDelete: 'CASCADE'
// });

// Comment.belongsTo(Post, {
//     foreignKey: 'post_id',
//     onDelete: 'cascade',
// });

UserModel.init(User.initAttributes, {
    sequelize,
    modelName: 'user',
    timestamps: false,
    underscored: true,
});

PostModel.init(Post.initAttributes, {
    sequelize,
    modelName: 'post',
    timestamps: false,
    underscored: true,
});

UserModel.hasMany(PostModel, { foreignKey: 'user_id' });
PostModel.belongsTo(UserModel, { foreignKey: 'user_id' });

module.exports = { User, Post};
