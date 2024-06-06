const sequelize = require('../conf/connections');
const { Post, User, Comment } = require('../models');
const router = require('express').Router();
// const app =- express();
//the get request for the main page.
router.get('/', async (req, res) => {
	try {
		const findPosts = await Post.findAll({
			include: [
				User
			],
		});
		const posts = findPosts.map((post) => post.get({ plain: true }));
		res.render('homepage', { posts: req.session.loggedIn });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get('/login', (req, res) => {
	// if (req.session.loggedIn) {
	// 	res.redirect('/');
	// 	return; //if person is logged in, redirect to home page.
	// }
	res.render('login'); //if not, render the login page.
});

router.get('/signup', (req, res) => {
	res.render('signup');
}); //If you click the signup link it takes you to the handlebars signup page!

router.get('/post/:id', async (req, res) => {
	try {
		const postbyID = await Post.findByPk(req.params.id, {

			include: [ User,
				{
					model: Comment,

					include:[User],
				}
			],
		});

		if (!postbyID) {
			res.status(404).json({ message: 'No post found with this id' });
			return;
		}
		const post = postbyID.get({ plain: true });
		console.log(post);
		res.render('single-post', { post, loggedIn: req.session.loggedIn }); //This is similar to how the homepage works, except if we click on a post it instead renders the individual post!
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});


module.exports = router;
