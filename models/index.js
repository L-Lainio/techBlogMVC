const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'cascade',
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});


module.exports = { User, Post, Comment};
