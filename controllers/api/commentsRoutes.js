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

// router.put('/:id', withAuth, async (req, res) => {
// 	try {
// 		const updateComment = await Comment.update(
// 			{
// 				comment_text: req.body.comment_text,
// 			},
// 			{
// 				where: {
// 					id: req.params.id,
// 				},
// 			}
// 		);

// 		const updatedComment = await updateComment;
// 		if (!updatedComment) {
// 			res.status(404).json({ message: 'No comment found with this id' });
// 			return;
// 		}
// 		res.json(updatedComment);
// 	} catch (err) {
// 		console.log(err);
// 		res.status(500).json(err);
// 	}
// });

// router.delete('/:id', withAuth, async (req, res) => {
// 	try {
// 		const deleteComment = await Comment.destroy({
// 			where: {
// 				id: req.params.id,
// 			},
// 		});

// 		const deletedComment = await deleteComment;
// 		if (!deletedComment) {
// 			res.status(404).json({ message: 'No comment found with this id' });
// 			return;
// 		}
// 		res.json(deletedComment);
// 	} catch (err) {
// 		console.log(err);
// 		res.status(500).json(err);
// 	}
// });
module.exports = router;
