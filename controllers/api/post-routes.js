const router = require('express').Router();
const {Post, User, Comment} = require('../../models');
const sequelize = require('../../config/connection');

// submit a post
router.post('/', (req, res) => {
    // console.log(req.body.title)
    Post.create({
        title: req.body.title,
        comment: req.body.comment,
        username: req.body.username,
        created_at: req.body.created_at
    })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// expose the changes to the router
module.exports = router;