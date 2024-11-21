const express = require("express");
const { register, login, logout, userDelete } = require("../controller/authController");
const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.delete("/user/:id", userDelete);

module.exports = authRouter;
