const { articles } = require("../utils/dataArticle");

const getArticles = (req, res) => {
  res.status(200).json(articles);
};

const getArticleById = (req, res) => {
  const articleId = parseInt(req.params.id);
  const article = articles.find((a) => a.id === articleId);

  if (article) {
    res.status(200).json(article);
  } else {
    res.status(404).json({ message: "Article not found" });
  }
};

module.exports = {  getArticles, getArticleById };
