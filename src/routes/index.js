const auth = require("../middleware/auth")

module.exports = {
    async register(app) {
        app.use(auth);
        app.use("/v1", require("./api"));
        app.get("/", ({ res }) => {
            res.json({
                appName: "Hermod API",
                currentVersionApi: "v1",
            })
        })
    }
};
