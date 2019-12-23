const express = require("express");
const cors = require("cors");

const db = require("./src/config/db")
const routes = require("./src/routes")

require('dotenv').config({
  path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
})

const app = express();
app.use(express.json());
app.use(cors());

db.connect();
routes.register(app);

app.listen(process.env.APP_PORT);

module.exports = app;
