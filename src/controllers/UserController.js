const mongoose = require("mongoose");

const Model = mongoose.model("User");

const { generateToken } = require("../helpers/jwt")



const { validate, setCustomError } = require("../helpers/response");

const Entity = "user";

module.exports = {
  async login(req, res) {
    const resultQuery = await Model.findOne({ username: req.body.username });
    try {
      await validate(resultQuery, Entity, process.env.CODE_FOUND);
    } catch (error) {
      let result = JSON.parse(error.message)
      res.status(result.statusCode).json(result);
    }
    const isPasswordMatch = resultQuery.password === req.body.password;
    if (!isPasswordMatch) {
      let error = await setCustomError(null, Entity, null, "Wrong password", 400);
      res.status(400).json(error);
    }
    const token = await generateToken(resultQuery);
    resultQuery.auth.token = token
    await resultQuery.save();
    res.json(await validate(resultQuery, Entity, process.env.CODE_FOUND))
  },

  async index(req, res) {
    const resultQuery = await Model.find(req.body).populate('departaments');
    try {
      let result = await validate(resultQuery, Entity, process.env.CODE_FOUND, process.env.MESSAGE_FOUND);
      res.json(result)
    } catch (error) {
      let result = JSON.parse(error.message)
      res.status(result.statusCode).json(result);
    }
  },

  async show(req, res) {
    try {
      let resultQuery = null
      if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        resultQuery = await Model.findById(req.params.id);
      }
      let result = await validate(resultQuery, Entity, process.env.CODE_FOUND, process.env.MESSAGE_FOUND);
      res.json(result)
    } catch (error) {
      let result = JSON.parse(error.message)
      res.status(result.statusCode).json(result);
    }
  },

  async store(req, res) {
    const resultQuery = await Model.create(req.body);
    try {
      let result = await validate(resultQuery, Entity, process.env.CODE_CREATED, process.env.MESSAGE_CREATED);
      res.json(result)
    } catch (error) {
      let result = JSON.parse(error.message)
      res.status(result.statusCode).json(result);
    }
  },
  async update(req, res) {
    try {
      let resultQuery = null
      if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        resultQuery = await Model.findOneAndUpdate({ _id: req.params.id }, req.body, {
          new: true
        });
      }
      let result = await validate(resultQuery, Entity, process.env.CODE_UPDATED, process.env.MESSAGE_UPDATED);
      res.json(result)
    } catch (error) {
      let result = JSON.parse(error.message)
      res.status(result.statusCode).json(result);
    }
  },

  async destroy(req, res) {

    try {
      let resultQuery = null
      if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        resultQuery = await Model.findOneAndDelete({ _id: req.params.id });
      }
      let result = await validate(resultQuery, Entity, process.env.CODE_DELETED, process.env.MESSAGE_DELETED);
      res.json(result)
    } catch (error) {
      let result = JSON.parse(error.message)
      res.status(result.statusCode).json(result);
    }
  }
};
