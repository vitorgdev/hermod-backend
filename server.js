const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");
require('dotenv').config({
  path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
})
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://db:27017/hermod", {
  useNewUrlParser: true
});

requireDir("./src/models");

app.use("/v1", require("./src/routes"));
console.log(process.env.APP_PORT);

app.listen(process.env.APP_PORT);

module.exports = app;
