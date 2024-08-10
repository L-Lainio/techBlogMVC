const { Post } = require('../models');

const postData = [
{
        post_id: '/',
        post_title: '/',
        post_content: '/',
        format_date: '/',
        active_ind: '/',
        user_id: '/'
},

];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
