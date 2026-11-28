require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Car = require("./models/Car");
const cars = require("./data/seedCars");
async function seedCars() {
  try {
    await connectDB();

    await Car.deleteMany();
    await Car.insertMany(cars);

    console.log("Database seeded with DriveGenie cars.");

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Database seeding failed:", error.message);

    await mongoose.connection.close();
    process.exit(1);
  }
}

seedCars();
