const express = require("express");
const routes = express.Router();

const UserController = require("../controllers/UserController");
const DepartamentController = require("../controllers/DepartamentController");

routes.get("/", (req, res) => {
    return res.json("Version 1 of HERMOD API is on")
});

routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show);
routes.post("/users", UserController.store);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.destroy);

routes.get("/departaments", DepartamentController.index);
routes.get("/departaments/:id", DepartamentController.show);
routes.post("/departaments", DepartamentController.store);
routes.post("/departaments/:id/queue", DepartamentController.storeQueue);
routes.post("/departaments/:id/owner", DepartamentController.storeOwner);
routes.put("/departaments/:id", DepartamentController.update);
routes.delete("/departaments/:id", DepartamentController.destroy);

module.exports = routes;
