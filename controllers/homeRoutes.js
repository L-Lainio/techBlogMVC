const router = require('express').Router();
const sequelize = require('../config/connection');
const {
    User,
    Post,
    Comment
} = require('../models');
const withAuth = require('../utils/auth');

// Log in route (GET to render login page)
router.get('/login', (req, res) => {
    // Check if the user is already logged in, redirect to the homepage if true
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    // Render the login page
    res.render('login');
});

router.get('/', (req, res) => {
    // to do Cody console log not showing up homepage rendering on 50???
    console.log("*************************************");
    Post.findAll({
        attributes: [
            'post_id',
            'post_title',
            'post_content',
            'created_at'
        ],
        include: [{
            model: Comment,
            attributes: ['comment_id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
        ]
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({
                plain: true
            }));
            console.log(posts);
            res.render('homepage', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            post_id: req.params.id
        },
        attributes: [
            'post_id',
            'post_title',
            'post_content',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: [
                    'comment_id',
                    'comment_text',
                    'post_id',
                    'user_id',
                    'created_at'
                ],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No Post found with this id' });
                return;
            }
            // Serialize the data
            const post = dbPostData.get({ plain: true });

            // Pass data to the template
            res.render('singlePost', {
                post,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});


router.get('*', (req, res) => {
    res.status(404).send("Can't go there!");
    // res.redirect('/');
})


module.exports = router;
