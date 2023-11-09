const createError = require('http-errors');
const {Player} = require('../models');

class PlayerController {

  async getPlayers(req, res, next) {
    try {
      const allPlayers = await Player.find({}, {_id: 0});
      if (allPlayers) {
        console.log(`Result is: ${JSON.stringify(allPlayers, null, 2)}`);
        res.status(200).json(allPlayers);
      } else {
        next(createError(404, "Any players has not been found"));
      }
      
    } catch (error) {
      next(error.message);
    }
  }

  async getPlayerById(req, res, next) {
    try {
      const id = req.params._id;
      const playerById = await Player.findOne({_id: id}, {_id: 0});
      if (playerById) {
        console.log(`Result is: ${JSON.stringify(playerById, null, 2)}`);
        res.status(200).json(playerById);
      } else {
        console.log("Bad request");
        next(createError(404, "This player has not been found"));
      }
    } catch (error) {
      next(error.message);
    }
  }

  async createPlayer(req, res, next) {
    try {
      const body = req.body;
      const createdPlayer = await Player.insertOne(body);
      if(createdPlayer) {
        console.log(`Result is: ${JSON.stringify(createdPlayer, null, 2)}`);
        res.status(200).json(createdPlayer);
      } else {
        console.log("Bad request");
        next(createError(400, "Bad request"));
      }
    } catch (error) {
      next(error.message)
    }
  }

  async updatePlayer(req, res, next) {
    try {
      // const id = req.params._id;
      const {body} = req;
      const updatedPlayer = await Player.updateOne({_id: id}, body);
      if(updatedPlayer) {
        console.log(`Result is: ${JSON.stringify(updatedPlayer, null, 2)}`);
        res.status(200).json(updatedPlayer);
      } else {
        next(createError(404, "This player has not been found"));
      }
    } catch (error) {
      next(error.message);
    }
  }

  async changePartOfPlayer(req, res, next) {
    try {
      const {params: {_id}, body} = req;
      const [updatedPlayersCount, [updatedPlayer]] = await Player.updateOne(
        {id: _id}, body);
        if(updatedPlayersCount > 0) {
          console.log(updatedPlayer);
          res.status(200).json(updatedPlayer);
        } else {
          next(createError(404, "This player has not been found"));
        }
    } catch (error) {
      next(error.message);
    }
  }

  async deletePlayer(req, res, next) {
    try {
      const id = req.params._id;
      const deletedPlayer = await Player.deleteOne({_id: id});
      if(deletedPlayer) {
        res.send(res.statusCode);
      } else {
        next(createError(404, "This player has not been found"));
      }
    } catch (error) {
      next(error.message);
    }
  }
}

module.exports = new PlayerController();
