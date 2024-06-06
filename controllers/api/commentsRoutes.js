const router = require('express').Router();
const { Comment } = require('../../models');
// const withAuth = require('../../utils/authGuard);

router.post('/:id', async (req, res) => {
		try {
			const message = await Comment.create({
				...req.body,
				post_id: req.body.post_id,
				user_id: req.session.user_id,
			});
			res.json({ message: 'Comment created!' });
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	})

module.exports = router;
