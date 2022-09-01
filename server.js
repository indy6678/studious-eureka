const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

// set up template engine (using handlebars)
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// turn on routes
app.use(routes);

sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});