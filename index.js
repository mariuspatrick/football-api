const express = require('express');

const app = express();

const port = process.env.PORT || 4000

app.listen(port, console.log(`This is the port ${port}`));
//app.get("/", (req, res) => res.send("hello"))