const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const router = require("./routes/authRoutes");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
