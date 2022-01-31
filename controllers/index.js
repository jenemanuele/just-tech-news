// collecting the pacaged group of api endpoints and prefixingt them with the path /api
// second use of router.use() : if we make a req to any endpoint that doesn't exist, 404 err will come up
// ready for import to server.js
const router = require('express').Router();

const apiRoutes = require('./api');

const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;