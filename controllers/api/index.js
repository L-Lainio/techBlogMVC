const router = require('express').Router();
const loginRoute = require('./loginRoute');
const logoutRoute = require('./logoutRoute');
const postRoutes = require('./postRoutes');
const signupRoute = require('./signupRoutes');
const commentRoutes = require('./commentsRoutes');

router.use('/login', loginRoute);
router.use('/logout', logoutRoute);
// router.use('/user', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/signup', signupRoute);

module.exports = router;
