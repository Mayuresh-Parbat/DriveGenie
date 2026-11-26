const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    legacyId: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: true,
    },
    priceInCrores: {
      type: Number,
      required: true,
      min: 0,
    },
    fuel: {
      type: String,
      required: true,
    },
    seats: {
      type: String,
      required: true,
    },
        seatingCapacity: {
      type: Number,
      required: true,
      min: 1,
    },
    topSpeed: {
      type: String,
      required: true,
    },
    horsepower: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
