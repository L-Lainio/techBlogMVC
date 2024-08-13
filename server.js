const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars'); // Add this line
const path = require('path');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection'); // Ensure this path is correct
const postRoutes = require('./controllers/api/postRoutes');
const userRoutes = require('./controllers/api/userRoutes');
const dashboardRoutes = require('./controllers/dashboardRoutes');
const apiRoutes = require('./controllers/api');
const User = require('./models/User');
const Post = require('./models/Post');
const Comment = require('./models/Comment');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// Use session middleware with the defined configuration
app.use(session(sess));

// Inform Express.js on which template engine to use
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Add this route to handle requests to the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Tech Blog!');
});

// Use routes
app.use('/posts', postRoutes);
app.use('/users', userRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/api', apiRoutes);

sequelize.sync({ force: true }).then(() => {
    console.log('Database & tables created!');
    app.listen(PORT, () => {
        console.log('Server listening on: http://localhost:' + PORT);
    });
});
