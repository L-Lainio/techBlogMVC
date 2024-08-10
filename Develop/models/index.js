const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'Post_id',
});

Post.belongsTo(User, {
    foreignKey: 'Post_id',
});

module.exports = { User, Post};
