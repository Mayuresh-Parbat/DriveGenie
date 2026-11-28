require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Car = require("./models/Car");
const cars = require("./data/seedCars");
