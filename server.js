// Import required packages
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const cors = require("cors");
const Expense = require("./models/Expense");
require("dotenv").config();   // Load .env file

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

  app.post("/api/register", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.json({ message: "User saved Successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/api/login",async (req, res) => 
{
    try{
        const { email ,password } = req.body;
        
        const user = await
User.findOne({ email, password });
        if(user){
         return   res.json({ message: "Login successful" });
        } else {
            res.status(401).json({ error: "Invalid credentials" });
        }

        res.json({ message: "Login successful" });
    } catch (error) {
        res.status(500).json({ error: error.message });

    }
});

app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.post("/expenses", async (req, res) => {
  try {
    const expense = new Expense(req.body);
    await expense.save();
    res.json({ message: "Expense added" });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("/expenses", async (req, res) => {
  try {
    const data = await Expense.find();
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});


// Test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});