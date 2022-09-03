const router = require('express').Router();
const sequelize = require('../config/connection');
const {Post, User, Comment} = require('../models')

router.get('/', (req, res) => {
    res.render('homepage',{
        id: 1,
        title: "Why MVC is so important",
        created_at: new Date(),
        comments: [{}, {}],
        user: {
            username: 'test user'
        }
    });
});

// router.get('/', (req, res) => {
//     Post.findAll({
//         attributes: [
//             'id',
//             'title',
//             'comments',
//             'created_at',
//             'username'
//         ]
//     })
// })

module.exports = router;