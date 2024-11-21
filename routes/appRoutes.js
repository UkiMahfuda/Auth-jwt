const express = require("express");
const appRouter = express.Router();
const { kalkulasiDosis, getArticles, getArticleById } = require("../controller/appController");
const { authorization, tokenDelete } = require("../middleware/authMiddleware");

appRouter.post("/kalkulator-obat", authorization, tokenDelete, kalkulasiDosis);
appRouter.get("/articles", authorization, tokenDelete, getArticles);
appRouter.get("/articles/:id", authorization, tokenDelete, getArticleById);

module.exports = appRouter;
