const express = require("express");
// const router = require("./routes/authRoutes");
const routerApp = require("./routes/appRoutes");
const PORT = process.env.PORT || 9000;
const app = express();

app.use(express.json());

// app.use("/api/auth", router);
app.use("/api", routerApp);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
