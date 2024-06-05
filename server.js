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
const PORT = process.env.PORT || 3001;

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
};

// Move the declaration of 'app' outside of the selection
app.set(session(sess));
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', exphbs.engine);

app.use(express.json());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
