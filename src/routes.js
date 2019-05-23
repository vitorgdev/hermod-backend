const express = require("express");
const routes = express.Router();

const NumberController = require("./controllers/NumberController");
const UserController = require("./controllers/UserController");
const CourseController = require("./controllers/CourseController");

routes.get("/numbers", NumberController.index);
routes.get("/numbers/:id", NumberController.show);
routes.post("/numbers", NumberController.store);
routes.put("/numbers/:id", NumberController.update);
routes.delete("/numbers/:id", NumberController.destroy);

routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show);
routes.post("/users", UserController.store);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.destroy);

routes.get("/courses", CourseController.index);
routes.get("/courses/:id", CourseController.show);
routes.post("/courses", CourseController.store);
routes.put("/courses/:id", CourseController.update);
routes.delete("/courses/:id", CourseController.destroy);

module.exports = routes;
