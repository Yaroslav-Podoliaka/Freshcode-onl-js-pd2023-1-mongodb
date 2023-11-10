const { Router } = require("express");
const playerRouters = require("./playerRouters");
const roleRouters = require("./roleRouters");

const router = new Router();

router.use("/players", playerRouters);
router.use("/roles", roleRouters);

module.exports = router;
