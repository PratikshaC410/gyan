const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authentication-route");

const app = express();

// CORS
const allowedOrigins = [
  "http://localhost:3000",
  "https://gyan-frontend1.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("GYAN backend is running");
});

// Connect MongoDB
if (!mongoose.connections[0].readyState) {
  mongoose.connect(process.env.MONGO_URI);
}

module.exports = app;
