const path = require('path');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const express = require('express');
const session = require('express-session');
const sequelize = require('./conf/connections');

// Create a new sequelize store using the express-session package
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Initialize an instance of Express.js
// Move the declaration of 'app' outside of the selection
const app = express();
app.set('views', path.join(__dirname), 'views');
routes
app.use('/home', require('./controllers/homeRoutes'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
get('/', async (req, res) => {

    try {
        if (req.session && req.session.loggedIn) {
            res.redirect('/homepage');

        } else {
            res.redirect('/login');
        }
} catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});

    // } catch (err)

    // Set up Handlebars.js as the default engine with custom helpers
    const handlebars = exphbs.create({ helpers });

    // Sets up the connect session through sequelize
    const sess = {
        secret: 'Nunyabusiness',
        cookie: {},
        resave: false,
        saveUninitialized: true,

        // Sets up session store
        store: new SequelizeStore({
            db: sequelize,
        }),
    }





        // Move the declaration of 'app' outside of the selection
        app.set(session(sess));
        app.use(express.urlencoded({ extended: true }));
        app.engine('handlebars', exphbs.engine);

        app.use(express.json());
        app.set('views', path.join(__dirname, 'views'));
        app.use(express.static(path.join(__dirname, 'views')));
        app.use(routes);

        sequelize.sync();

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}.`);
        });
