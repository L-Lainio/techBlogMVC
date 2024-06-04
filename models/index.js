const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comments');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('userData');


function commentPost() {
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
});
Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
});
}
module.exports = { User, Post, Comment };
