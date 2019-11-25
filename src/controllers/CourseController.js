const mongoose = require("mongoose");

const Course = mongoose.model("Course");

module.exports = {
  async index(req, res) {
    const courses = await Course.find(req.body);
    return res.json(courses);
  },

  async show(req, res) {
    const courses = await Course.findById(req.params.id);
    return res.json(courses);
  },

  async store(req, res) {
    console.log(req.body);

    const courses = await Course.create(req.body);
    return res.json(courses);
  },

  async update(req, res) {
    const course = await Course.findOneAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(course);
  },

  async destroy(req, res) {
    const deleted = await Course.findOneAndDelete(req.params.id);
    return res.json(deleted);
  }
};
