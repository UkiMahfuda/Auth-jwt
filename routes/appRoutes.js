const express = require("express");
const router = express.Router();
const { kalkulasiDosis, getArticles, getArticleById } = require("../controller/appController");

router.post("/kalkulator-obat", kalkulasiDosis);
router.get("/articles", getArticles);
router.get("/articles/:id", getArticleById);

module.exports = router;
