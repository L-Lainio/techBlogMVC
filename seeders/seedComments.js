const { Comment } = require('../models');

const commentData = [
    // Blank array
    {}

];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
