const { Comment } = require('../models');

const commentData = [

    {
        comment_id: '/',
        comment_content: '/',
        format_date: '/',
        active_ind: '/',
        user_id: '/',
        post_id: '/',
    },

];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
