const express = require("express");
const appRouter = express.Router();
const { kalkulasiDosis, getHistory, deleteHistory, getAllHistory } = require("../controller/appController");
const { authorization, tokenDelete } = require("../middleware/authMiddleware");

appRouter.post("/kalkulator-dosis", authorization, tokenDelete, kalkulasiDosis);
appRouter.get("/history", authorization, tokenDelete, getHistory);
appRouter.delete("/history/:id", authorization, tokenDelete, deleteHistory);
appRouter.get("/allhistory", getAllHistory);

module.exports = appRouter;
