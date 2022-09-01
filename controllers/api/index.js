const router = require('express').Router();

const postRoutes = require('./post-routes');

//implement routes to another router instance
router.use('/posts',postRoutes);

module.exports = router;