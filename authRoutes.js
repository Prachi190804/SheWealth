const express = require("express");
const router = express.Router();
const User = require("../models/User");

// REGISTER
router.post("/register", async (req, res) => {
  console.log("BODY:", req.body);
  try {
     // 👈 MUST ADD

    const { name, email, password } = req.body;

    const user = new User({ name, email, password });
    await user.save();

    res.json({ message: "User registered successfully" });

  } catch (error) {
    console.log("ERROR:", error); // 👈 MUST ADD
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;