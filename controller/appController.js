const dosisObat = require("../utils/dataObat");

const kalkulasiDosis = (req, res) => {
  const { luasLahan, penyakit } = req.body;

  if (!luasLahan || isNaN(luasLahan) || !penyakit || !dosisObat[penyakit]) {
    return res.status(400).json({ error: "Input invalid" });
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

module.exports = { kalkulasiDosis };
