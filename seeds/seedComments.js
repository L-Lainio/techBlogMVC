const { Comment } = require('../models');

const commentData = [
    {
        comment_id: 1,
        comment_text: 'This is a fascinating post! I love learning about space.',
        user_id: 1,
        post_id: 1,
    },
    {
        comment_id: 2,
        comment_text: 'Great tips on maintaining a balanced diet. Very helpful!',
        user_id: 2,
        post_id: 2,
    },
    {
        comment_id: 3,
        comment_text: 'The hiking trails you mentioned are now on my travel list!',
        user_id: 3,
        post_id: 3,
    },
    {
        comment_id: 4,
        comment_text: 'Quantum physics always blows my mind!',
        user_id: 4,
        post_id: 4,
    },
    {
        comment_id: 5,
        comment_text: 'Time management has always been a struggle for me. Thanks for the advice!',
        user_id: 5,
        post_id: 5,
    },
    {
        comment_id: 6,
        comment_text: 'Ancient civilizations are so interesting. I love reading about history.',
        user_id: 6,
        post_id: 6,
    },
    {
        comment_id: 7,
        comment_text: 'Exercise really does make me feel so much better. Great read!',
        user_id: 7,
        post_id: 7,
    },
    {
        comment_id: 8,
        comment_text: 'Technology has come a long way in such a short time. This post nailed it!',
        user_id: 8,
        post_id: 8,
    },
    {
        comment_id: 9,
        comment_text: 'Climate change is real, and it’s terrifying. Thanks for spreading awareness.',
        user_id: 9,
        post_id: 9,
    },
    {
        comment_id: 10,
        comment_text: 'AI is the future, no doubt about it. Really well written!',
        user_id: 10,
        post_id: 10,
    },
    {
        comment_id: 11,
        comment_text: 'I’m always looking for ways to save money while traveling. Thanks for the tips!',
        user_id: 11,
        post_id: 11,
    },
    {
        comment_id: 12,
        comment_text: 'Sleep is so underrated. I’ll definitely be prioritizing it more!',
        user_id: 12,
        post_id: 12,
    },
    {
        comment_id: 13,
        comment_text: 'Relationships take work, and this post reminded me of that.',
        user_id: 13,
        post_id: 13,
    },
    {
        comment_id: 14,
        comment_text: 'Learning new languages is so rewarding! Thanks for sharing.',
        user_id: 14,
        post_id: 14,
    },
    {
        comment_id: 15,
        comment_text: 'Renewable energy is the way forward. Excellent post!',
        user_id: 15,
        post_id: 15,
    },
    {
        comment_id: 16,
        comment_text: 'Mental health should always be a priority. This was insightful.',
        user_id: 16,
        post_id: 16,
    },
    {
        comment_id: 17,
        comment_text: 'Cryptocurrency is so confusing, but this post made it clearer for me!',
        user_id: 17,
        post_id: 17,
    },
    {
        comment_id: 18,
        comment_text: 'I’ve been wanting to start a blog, and now I feel like I can do it!',
        user_id: 18,
        post_id: 18,
    },
    {
        comment_id: 19,
        comment_text: 'Those train rides sound absolutely amazing. Adding them to my bucket list!',
        user_id: 19,
        post_id: 19,
    },
    {
        comment_id: 20,
        comment_text: 'AI in healthcare is such a game-changer. This was a great read.',
        user_id: 20,
        post_id: 20,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
