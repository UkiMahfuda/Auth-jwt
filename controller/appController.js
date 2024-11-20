const dosisObat = require("../utils/dataObat");
const { articles } = require("../utils/dataArticle");

const kalkulasiDosis = (req, res) => {
  const { luasLahan, penyakit } = req.body;

  if (!luasLahan || isNaN(luasLahan) || !penyakit || !dosisObat[penyakit]) {
    return res.status(400).json({ error: "Input tidak valid" });
  }

  const { obat, kandunganBahan, dosis } = dosisObat[penyakit];
  const jumlahObat = luasLahan * dosis;

  const hasil = {
    luasLahan,
    penyakit,
    obat,
    kandunganBahan,
    jumlahObat,
  };

  res.status(200).json({ status: true, data: hasil });
};

const getArticles = (req, res) => {
  res.status(200).json(articles);
};

const getArticleById = (req, res) => {
  const articleId = parseInt(req.params.id);
  const article = articles.find((a) => a.id === articleId);

  if (article) {
    res.status(200).json(article);
  } else {
    res.status(404).json({ message: "Artikel tidak ditemukan" });
  }
};

module.exports = { kalkulasiDosis, getArticles, getArticleById };
