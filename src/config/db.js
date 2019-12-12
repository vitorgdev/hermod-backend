const mongoose = require("mongoose");
const requireDir = require("require-dir");

module.exports = {
    async connect() {
        mongoose.connect("mongodb://db:27017/hermod", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        requireDir("../models");
    }
};
