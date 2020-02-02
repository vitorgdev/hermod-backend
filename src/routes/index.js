const auth = require("../middleware/auth");
const UserController = require("../controllers/UserController");

module.exports = {
  async register(app) {
    app.use("/v1/auth", UserController.login);
    // app.use(auth);
    app.use("/v1", require("./api"));
    app.get("/", ({ res }) => {
      res.json({
        appName: "Hermod API",
        currentVersionApi: "v1"
      });
    });
  }
};
