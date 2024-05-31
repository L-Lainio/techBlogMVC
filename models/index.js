const User = require('module');
const Post = require('module');
const Comment = require('module');
const sequelize = require('module');

function getUserData() {
    // Add your code here to fetch user data
}

getUserData();
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
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

module.exports = { User, Post, Comment };
