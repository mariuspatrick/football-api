const { Router } = require("express");
const Team = require("../team/model");

const router = new Router();

router.get("/team", (req, res, next) => {
  Team.findAll()
    .then(list => res.send(list))
    .catch(error => next(error));
});

router.post("/team", (req, res) => {
  Team.create(req.body)
    .then(res)
    .catch(err => next(err));
});

module.exports = router;
