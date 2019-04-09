const express = require("express");
const routes = express.Router();

const NumberController = require("./controllers/NumberController");

routes.get("/numbers", NumberController.index);
routes.get("/numbers/:id", NumberController.show);
routes.post("/numbers", NumberController.store);
routes.put("/numbers/:id", NumberController.update);
routes.delete("/numbers/:id", NumberController.destroy);

module.exports = routes;
