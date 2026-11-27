const Car = require("../models/Car");

function getSortOption(sort) {
  const sortOptions = {
    priceLowToHigh: { priceInCrores: 1 },
    priceHighToLow: { priceInCrores: -1 },
    rating: { rating: -1 },
    recommended: { isFeatured: -1, rating: -1 },
  };

  return sortOptions[sort] || sortOptions.recommended;
}

async function getCars(req, res, next) {
  try {
    const { category, fuel, seats, minPrice, maxPrice, sort } = req.query;

    const filters = {};

    if (category) {
      filters.category = category;
    }

    if (fuel) {
      filters.fuel = fuel;
    }

    if (seats) {
      filters.seatingCapacity = Number(seats);
    }

    if (minPrice || maxPrice) {
      filters.priceInCrores = {};

      if (minPrice) {
        filters.priceInCrores.$gte = Number(minPrice);
      }

      if (maxPrice) {
        filters.priceInCrores.$lte = Number(maxPrice);
      }
    }

    const cars = await Car.find(filters).sort(getSortOption(sort));

    res.status(200).json({
      count: cars.length,
      cars,
    });
  } catch (error) {
    next(error);
  }
}

async function getCarById(req, res, next) {
  try {
    const car = await Car.findOne({
      legacyId: Number(req.params.id),
    });

    if (!car) {
      return res.status(404).json({
        message: "Car not found.",
      });
    }

    res.status(200).json({ car });
  } catch (error) {
    next(error);
  }
}
