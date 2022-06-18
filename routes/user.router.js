module.exports = app => {
    var router = require("express").Router();
    var users = require("../controllers/user.controller");

    router.post("/sign-up", users.SignUp);
    router.post("/logout", () => {console.log("logout Called")});
    router.post("/login", () => {console.log("Login Called")});

    app.use("/api", router);
}