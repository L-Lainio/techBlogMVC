const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');
const express = require('express');
const router = express.Router();


// Get all posts
router.get("/", (req, res) => {
    Post.findAll({
        attributes: ['post_id', 'post_title', 'post_content', 'created_at'],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['comment_id', 'comment_content', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
        .then(dbPostData => res.json(dbPostData)) // Respond with the retrieved data in JSON format
        .catch(err => {
            console.log(err);
            res.status(500).json(err); // Handle errors
        });
});


// Get a single post
router.get("/:id", (req, res) => {
    Post.findOne({
        where: {
            post_id: req.params.id
        },
        attributes: ['post_id', 'post_title', 'post_content', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['comment_id', 'comment_content', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' }); // Respond with a 404 Not Found
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Create a post
router.post('/', withAuth, async (req, res) => {
    try {
        // Create a new post associated with the currently auth user
        const newPost = await Post.create({
            post_title: req.body.post_title,
            post_content: req.body.post_content,
            user_id: req.session.user_id,
        });

        res.status(201).json(newPost);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Error has occurred' });
    }
});

// Update a post
router.put('/:id', async (req, res) => {
    try {
        // Update the specified post
        const updatedPost = await Post.update(
            {
                post_title: req.body.post_title,
                post_content: req.body.post_content,
                user_id: req.session.user_id
            },
            {
                where: {
                    post_id: req.params.id,
                    user_id: req.session.user_id,
                },
            }
        );

        if (updatedPost[0] === 0) {
            res.status(404).json({ error: 'Error has occurred' });
            return;
        }

        // Respond with a success message
        res.status(201).json({ message: 'Post updated successfully.' });
    } catch (err) {
        res.status(500).json({ error: 'Error has occurred' });
    }
});

//Delete a post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                post_id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        // Check if the deletion was successful
        if (!postData) {
            res.status(404).json({ error: 'Error has occurred' });
            return;
        }

        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: 'Error has occurred' });
    }
});

module.exports = router;
