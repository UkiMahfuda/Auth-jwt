const express = require("express");
const appRouter = express.Router();
const { kalkulasiDosis } = require("../controller/appController");
const { authorization, tokenDelete } = require("../middleware/authMiddleware");

appRouter.post("/kalkulator-dosis", authorization, tokenDelete, kalkulasiDosis);

module.exports = appRouter;
