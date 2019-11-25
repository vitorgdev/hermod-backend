const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const Number = mongoose.model("Number");

module.exports = {
  async index(req, res) {
    const numbers = await Number.find(req.body);
    return res.json(numbers);
  },

  async show(req, res) {
    const numbers = await Number.findById(req.params.id);
    return res.json(numbers);
  },

  async store(req, res) {
    const numbers = await Number.create(req.body);
    return res.json(numbers);
  },

  async update(req, res) {
    const number = await Number.findOneAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(number);
  },

  async destroy(req, res) {
    const deleted = await Number.findOneAndDelete(req.params.id);
    return res.json(deleted);
  }
};
