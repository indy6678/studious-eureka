// import parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import database connection from config.js
const sequelize = require('../config/connection');

// initialize Post model by extending off of sequelize's Model class
class Post extends Model {}

// set up fields for Post model
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false,
            user_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'user',
                    key: 'id'
                }
            }           
        },
        // user: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }    
);

module.exports = Post;