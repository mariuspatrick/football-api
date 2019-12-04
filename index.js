const express = require("express");
const db = require("./db");
const Team = require("./team/model");

const app = express();

const port = process.env.PORT || 4000;

app.listen(port, console.log(`Listening on port: ${port}`));
//app.get("/", (req, res) => res.send(`Listening on port: ${port}`))
