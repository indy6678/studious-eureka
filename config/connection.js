// import the sequelize constructor from the library
const Sequelize = require('sequelize')

// do not save this to a variable
require('dotenv').config();

// create connection to the database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;