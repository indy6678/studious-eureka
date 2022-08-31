const router = require('express').Router();
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {
    res.render('homepage', {
        id: 1,
        title: "Why MVC is so important",
        created_at: new Date(),
        comments: [{}, {}],
        user: {
            username: 'test user'
        }
    });
});

module.exports = router;