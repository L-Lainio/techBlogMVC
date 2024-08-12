const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//Get all comments
router.get("/", (req, res) => {
    Comment.findAll()
        .then((dbCommentData) => res.json(dbCommentData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Create a comment
router.post('/:post_id', withAuth, async (req, res) => {
    try {
        // Create a new comment associated with a specific post and user
        const newComment = await Comment.create({
            comment_content: req.body.comment_content,
            post_id: req.params.post_id,
            user_id: req.session.user_id,
        });

        res.status(201).json(newComment);
    } catch (err) {
        res.status(500).json({ error: 'Error has occurred' });
    }
});

// Delete a comment by ID
router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id // Delete the comment with ID
        }
    })
        .then(dbCommentData => {
            if (!dbCommentData) {
                res.status(404).json({ message: 'No comment found with this id' });
                return;
            }
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err); // Handle errors
        });
});



module.exports = router;
