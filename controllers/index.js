// collect API routes
const router = require('express').Router();
const homeRoutes = require('./api/home-routes');

// const apiRoutes = require('./api/');

// all routes will be prepended accordingly
// router.use('/api', apiRoutes); 
router.use('/', homeRoutes);

// captures endpoint requests that do not exist
router.use((req, res) => {
    res.status(404).json({message: "nothing to see here!"}).end();
});

module.exports = router;