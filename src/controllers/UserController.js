const mongoose = require("mongoose");

const User = mongoose.model("User");

const Response = require("../helpers/response");

module.exports = {
  async index(req, res) {
    const users = await User.find(req.body);
    return res.json(users);
  },

  async show(req, res) {
    const users = await User.findById(req.params.id);
    return res.json(users);
  },

  async store(req, res) {
    const users = await User.create(req.body);
    return res.json(users);
  },

  async update(req, res) {
    const user = await User.findOneAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(user);
  },

  async destroy(req, res) {
    const deleted = await User.findOneAndDelete({ _id: req.params.id });
    Response.sendResponse(deleted, res);
  }
};
