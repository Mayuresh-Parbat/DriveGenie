const express = require("express");
const cors = require("cors");

const carRoutes = require("./routes/carRoutes");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    message: "DriveGenie API is running.",
  });
});

app.use("/api/cars", carRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found.",
  });
});

