// Importing Sequelize models
const sequelize = require('../config/connection'); // Ensure this path is correct
const User = require('./User');
const Post = require('./Post.js');
const Comment = require('./Comment.js');

// Post has many Comments
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

// Comment belongs to a Post
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

// User has many Posts
User.hasMany(Post, {
  foreignKey: 'user_id',
});

// Post belongs to a User
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

// User has many Comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
});

// Comment belongs to a User
Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { Post, Comment, User };
