const express = require("express");
const app = express();
// const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const dbConnection = require("./config/config");
const router = require("./routes/authRoutes");
const routerApp = require("./routes/appRoutes");
const PORT = process.env.PORT || 9000;

// dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", router);
app.use("/api", routerApp);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
