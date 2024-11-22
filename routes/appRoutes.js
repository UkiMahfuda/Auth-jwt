const express = require("express");
const appRouter = express.Router();
const { getArticles, getArticleById } = require("../controller/appController");
const { authorization, tokenDelete } = require("../middleware/authMiddleware");

appRouter.get("/articles", authorization, tokenDelete, getArticles);
appRouter.get("/articles/:id", authorization, tokenDelete, getArticleById);

module.exports = appRouter;
