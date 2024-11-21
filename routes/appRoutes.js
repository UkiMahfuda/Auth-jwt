const express = require("express");
const appRouter = express.Router();
const { kalkulasiDosis, getArticles, getArticleById } = require("../controller/appController");
const { authenticate, isTokenBlacklisted } = require("../middleware/authMiddleware");

appRouter.post("/kalkulator-obat", authenticate, isTokenBlacklisted, kalkulasiDosis);
appRouter.get("/articles", authenticate, isTokenBlacklisted, getArticles);
appRouter.get("/articles/:id", authenticate, isTokenBlacklisted, getArticleById);

module.exports = appRouter;
