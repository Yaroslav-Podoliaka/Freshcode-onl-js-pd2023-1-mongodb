const {Router} = require('express');
const playerRouters = require('./playerRouters');

const router = new Router();

router.use('/players', playerRouters);

module.exports = router;
