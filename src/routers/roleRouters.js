const { Router } = require("express");
const roleCtrl = require("../controllers/roleControllers");

const roleRouter = new Router();

roleRouter
  .route("/")
  .get(roleCtrl.getRoles)
  .post(roleCtrl.createRole)
  .put(roleCtrl.updateRole);

roleRouter
  .route("/:id")
  .get(roleCtrl.getRoleById)
  .delete(roleCtrl.deleteRole)
  .patch(roleCtrl.changePartOfRole);

module.exports = roleRouter;
