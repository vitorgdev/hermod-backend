const mongoose = require("mongoose");

const Number = mongoose.model("Course");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const numbers = await Number.paginate(req.body, { page, limit: 5 });
    return res.json(numbers);
  },

  async show(req, res) {
    const numbers = await Number.findById(req.params.id);
    return res.json(numbers);
  },

  async store(req, res) {
    console.log(req.body);
    
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
    await Number.findOneAndRemove(req.params.id);
    return res.json();
  }
};
