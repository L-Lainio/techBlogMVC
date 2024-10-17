const { Post } = require('../models');

const postData = [

        {
                post_id: 1,
                post_title: 'Exploring the Wonders of Space',
                post_content: 'Space is a vast and mysterious place full of wonders waiting to be discovered.',
        },
        {
                post_id: 2,
                post_title: 'The Benefits of a Balanced Diet',
                post_content: 'Eating a balanced diet is essential for maintaining good health and well-being.',
        },
        {
                post_id: 3,
                post_title: 'Top 10 Hiking Trails Around the World',
                post_content: 'Discover the best hiking trails for adventure seekers around the globe.',
        },
        {
                post_id: 4,
                post_title: 'Understanding Quantum Physics',
                post_content: 'Quantum physics is one of the most intriguing and complex fields of science.',
        },
        {
                post_id: 5,
                post_title: 'How to Improve Your Time Management Skills',
                post_content: 'Time management is crucial for increasing productivity and reducing stress.',
        },
        {
                post_id: 6,
                post_title: 'The History of Ancient Civilizations',
                post_content: 'Ancient civilizations like Mesopotamia and Egypt laid the foundation for modern society.',
        },
        {
                post_id: 7,
                post_title: 'The Importance of Physical Exercise',
                post_content: 'Regular physical exercise helps improve mental and physical health.',
        },
        {
                post_id: 8,
                post_title: 'The Evolution of Technology in the 21st Century',
                post_content: 'Technology has transformed how we live, work, and communicate in the 21st century.',
        },
        {
                post_id: 9,
                post_title: 'The Impact of Climate Change on the Environment',
                post_content: 'Climate change is having a significant effect on ecosystems around the world.',
        },
        {
                post_id: 10,
                post_title: 'The Future of Artificial Intelligence',
                post_content: 'Artificial intelligence is rapidly advancing and is expected to change numerous industries.',
        },
        {
                post_id: 11,
                post_title: 'Top 5 Tips for Traveling on a Budget',
                post_content: 'Traveling on a budget doesn’t mean compromising on experiences. Here are some tips to save money.',
        },
        {
                post_id: 12,
                post_title: 'The Science Behind Sleep and Rest',
                post_content: 'Sleep is essential for the body and brain to function properly and recover from daily activities.',
        },
        {
                post_id: 13,
                post_title: 'How to Build Stronger Relationships',
                post_content: 'Building strong relationships requires communication, trust, and effort from both sides.',
        },
        {
                post_id: 14,
                post_title: 'The Benefits of Learning a New Language',
                post_content: 'Learning a new language opens up opportunities for personal and professional growth.',
        },
        {
                post_id: 15,
                post_title: 'The Rise of Renewable Energy',
                post_content: 'Renewable energy sources like solar and wind power are becoming more prevalent as we seek sustainable solutions.',
        },
        {
                post_id: 16,
                post_title: 'Tips for Maintaining Mental Health',
                post_content: 'Mental health is just as important as physical health, and there are several ways to care for it.',
        },
        {
                post_id: 17,
                post_title: 'The World of Cryptocurrencies Explained',
                post_content: 'Cryptocurrencies are digital assets that have revolutionized the financial world in recent years.',
        },
        {
                post_id: 18,
                post_title: 'How to Start a Successful Blog',
                post_content: 'Starting a blog can be a rewarding way to share your thoughts and expertise with the world.',
        },
        {
                post_id: 19,
                post_title: 'The Most Scenic Train Rides Around the World',
                post_content: 'Scenic train rides offer breathtaking views of landscapes and are a unique way to travel.',
        },
        {
                post_id: 20,
                post_title: 'The Role of Artificial Intelligence in Healthcare',
                post_content: 'AI is transforming healthcare by improving diagnosis accuracy and streamlining administrative tasks.',
        },
        




];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
