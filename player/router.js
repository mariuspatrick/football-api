const { Router } = require("express");
const Player = require("../player/model");

const router = new Router();

router.get("/player", (req, res, next) => {
  Player.findAll()
    .then(playerList => res.send(playerList))
    .catch(err => next(err));
});

router.post("/player", (req, res, next) => {
  Player.create(req.body)
    .then(res)
    .catch(err => next(err));
});

router.get("/player/:id", (req, res, next) => {
  Player.findByPk(req.params.id)
    .then(player => res.send(player))
    .catch(err => next(err));
});

module.exports = router;
