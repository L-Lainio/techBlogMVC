const router = require('express').Router();
const loginRoute = require('./loginRoute');
const logoutRoute = require('./logoutRoute');
const postRoutes = require('./postRoutes');
const signupRoute = require('./signupRoute');
const commentRoutes = require('./commentRoutes');

router.use('/login', loginRoute);
router.use('/logout', logoutRoute);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/signup', signupRoute);

module.exports = router;
