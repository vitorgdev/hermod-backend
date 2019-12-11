const mongoose = require("mongoose");

const Departament = mongoose.model("Departament");
const Queue = mongoose.model("Queue");
const Owner = mongoose.model("User");

const Response = require("../helpers/response");

const Entity = "departament";

module.exports = {
  async index(req, res) {
    try {
      const departaments = await Departament.find(req.body).populate('queue');
      throw new Error('something bad happened');
    } catch (error) {
      res.json("teste")
    }
    const departaments = await Departament.find(req.body).populate('queue');
    return res.json(departaments);
  },

  async show(req, res) {
    const departament = await Departament.findById(req.params.id).populate('queue');
    Response.sendResponse(departament, res, Entity);
  },

  async store(req, res) {
    const departaments = await Departament.create(req.body);
    Response.sendResponse(departaments, res, Entity);
  },

  async storeQueue(req, res) {
    const queue = await Queue.create(req.body);
    const departaments = await Departament.findById(req.params.id);
    departaments.queue.push(queue);
    await departaments.save();
    Response.sendResponse(departaments, res, Entity);
  },

  async storeOwner(req, res) {
    if (req.body.ownerId) {
      const departaments = await Departament.findById(req.params.id);
      if (departaments === null) Response.sendResponse(departaments, res, Entity);
      const owner = await Departament.findById(req.body.ownerId);
      if (owner === null) Response.sendResponse(owner, res, `User`);
      departaments.owner.push(req.body.ownerId);
      await departaments.save();
      Response.sendResponse(departaments, res, Entity);
    } else {
      Response.sendResponse(null, res, Entity);
    }
  },

  async update(req, res) {
    const departament = await Departament.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    });
    Response.sendResponse(departament, res, Entity);
  },

  async destroy(req, res) {
    const deleted = await Departament.findOneAndDelete({ _id: req.params.id });
    Response.sendResponse(deleted, res, Entity);
  }
};
