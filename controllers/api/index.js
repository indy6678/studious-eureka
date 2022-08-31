// collect API routes
const router = require('express').Router();

const apiRoutes = require('../api');

// all routes will be prepended accordingly
router.use('/api', apiRoutes); 
router.use('/', homeRoutes);

// captures endpoint requests that do not exist
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;