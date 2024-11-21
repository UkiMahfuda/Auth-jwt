const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../config/config");
require("dotenv").config();

const register = async (req, res) => {
  const { username, email, password } = req.body;
  if (password.length < 5) {
    return res.status(400).json({
      status: false,
      message: "Password min 5 characters",
    });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(sql, [username, email, hashedPassword], (err) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(400).json({
            status: false,
            message: "Email is already registered",
          });
        }
        return res.status(500).json({ status: false, message: err.message });
      }
      res.status(201).json({ status: true, message: "Registered Successfully" });
    });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

const login = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], async (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).json({ error: "Email is not registered" });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Password is not valid" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "30d" });
    res.json({ status: true, message: "Login Successful", token });
  });
};

const tokenBlacklist = new Set();

const logout = (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token undefined" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    tokenBlacklist.add(token);
    res.json({ status: true, message: "Logout successful" });
  } catch (error) {
    res.status(400).json({ status: false, message: "Token invalid" });
  }
};

module.exports = { register, login, logout, tokenBlacklist };
