const UserController = require("../controllers/users.controller");
const {authenticate} = require("../config/jwt")


module.exports = app=>{
    app.post("/api/register", UserController.register);
    app.post("/api/login", UserController.login);
    app.get("/api/users/getloggedinuser", authenticate, UserController.getLoggedInUser);
    app.get("/api/logout", UserController.logout);
}