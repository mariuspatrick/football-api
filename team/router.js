const { Router } = require("express");
const Team = require("../team/model");

const router = new Router();

router.get("/team", (req, res, next) => {
  Team.findAll()
    .then(list => res.send(list))
    .catch(error => next(error));
});

module.exports = router;
