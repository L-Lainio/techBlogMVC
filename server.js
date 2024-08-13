require('dotenv').config();

const express = require('express');
const session = require('express-session');
const path = require('path');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
// const routes = require('./controllers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const postRoutes = require('./controllers/api/postRoutes');
const userRoutes = require('./controllers/api/userRoutes');
const dashboardRoutes = require('./controllers/dashboardRoutes');
const apiRoutes = require('./controllers/api');
const User = require('./models/User');
const Post = require('./models/Post');

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
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

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
