// import the sequelize constructor from the library
const Sequelize = require('sequelize')

// do not save this to a variable
require('dotenv').config();

// create connection to the database, deploying to heroku
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;