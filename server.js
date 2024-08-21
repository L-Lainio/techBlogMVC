const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./controllers');
const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize instance
const sequelize = require('./config/connection'); // Adjust the path to your sequelize instance

// Import models
const Post = require('./models/Post');

app.use(express.static(path.join(__dirname,'public')));

// Inform Express.js on which template engine to use
const hbs = exphbs.create({});

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/', routes);

sequelize.sync({ force: true }).then(() => {
    console.log('Database & tables created!');
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
        console.log(`Server started running on PORT ${PORT}`);
    });
});
