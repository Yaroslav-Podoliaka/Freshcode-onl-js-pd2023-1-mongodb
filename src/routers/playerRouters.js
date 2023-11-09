const { Router } = require("express");
const playerCtrl = require("../controllers/playerControllers");

const playerRouter = new Router();

playerRouter
  .route("/")
  .get(playerCtrl.getPlayers)
  .post(playerCtrl.createPlayer)
  .put(playerCtrl.updatePlayer);

playerRouter
  .route("/:id")
  .get(playerCtrl.getPlayerById)
  .delete(playerCtrl.deletePlayer)
  .patch(playerCtrl.changePartOfPlayer);

module.exports = playerRouter;
