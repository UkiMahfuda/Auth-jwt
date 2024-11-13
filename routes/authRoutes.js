const express = require("express");
const router = express.Router();

const authController = require("../controller/authController");

router.post("/api/auth/register", authController.registerUser);
router.post("/api/auth/login", authController.loginUser);
router.post("/api/auth/logout", authController.logoutUser);

module.exports = router;
