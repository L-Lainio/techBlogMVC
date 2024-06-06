const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const auth = require('../utils/authGuard')

router.get('/', async (req, res) => {
	try {
		const user = await Post.findAll({
			where: {
				user_id: req.session.user_id,
			}, include : [{
				model: Comment,
				include: {
					model : User,
					attributes : ['username']
				}
			}]
		});

		const posts = await userData.map((post) => post.get({ plain: true }));
		res.render('dashboard', { posts, loggedIn: true });
	} catch (err) {
		console.log(err);
		res.status(400).json(err);
	}
});


router.get('/:id', async (req, res) => {
	try {
		const post = await Post.findByPk(req.params.id,
			{
				include: [{
					model: Comment,
					include: {
						model: User,
						attributes: ['user_name']
					}
				},
				{
					model: User,
					attributes: ['user_name']
				}
				]
			});
		const editPost = post.get({ plain: true });
		res.render('editDeletePost', {
			editPost,
		});
	} catch (err) {
		console.error(err);
		res.status(400).json(err);
	}
});

module.exports = router;
