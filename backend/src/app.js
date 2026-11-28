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

