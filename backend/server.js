const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authentication-route");

const app = express();

/* =========================
   CORS CONFIG (FIXED)
========================= */

const allowedOrigins = [
  "https://gyan-frontend1.vercel.app",
  "http://localhost:3000", // optional (for local testing)
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like Postman)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

// VERY IMPORTANT for preflight requests
app.options("*", cors());

/* ========================= */

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("GYAN backend is running");
});

// MongoDB connection
if (!mongoose.connections[0].readyState) {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = app;
