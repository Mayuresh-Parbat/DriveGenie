import { useState } from "react";
import { FaGasPump, FaUsers } from "react-icons/fa";
import { featuredCars } from "../data/cars";

const categories = ["All", "SUV", "Sedan", "Coupe", "Electric"];

function FeaturedCars({
  favorites,
  compareCars,
  onToggleFavorite,
  onCompare,
  onViewDetails,
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [fuelType, setFuelType] = useState("All");
  const [budget, setBudget] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const getNumericPrice = (price) => {
    return Number.parseFloat(price.replace(/[₹Cr\s]/g, ""));
  };

  const filteredCars = featuredCars
    .filter((car) => {
      const searchMatch = car.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const categoryMatch =
        category === "All" || car.category === category;

      const fuelMatch = fuelType === "All" || car.fuel === fuelType;

      const budgetMatch =
        budget === "All" || getNumericPrice(car.price) <= Number(budget);

      return searchMatch && categoryMatch && fuelMatch && budgetMatch;
    })
    .sort((firstCar, secondCar) => {
      if (sortBy === "low-to-high") {
        return getNumericPrice(firstCar.price) - getNumericPrice(secondCar.price);
      }

      if (sortBy === "high-to-low") {
        return getNumericPrice(secondCar.price) - getNumericPrice(firstCar.price);
      }

      return 0;
    });

  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setFuelType("All");
    setBudget("All");
    setSortBy("default");
  };

  const copyDetails = (car) => {
    navigator.clipboard.writeText(
      `Car: ${car.name}
Category: ${car.category}
Price: ${car.price}
Fuel: ${car.fuel}
Seats: ${car.seats}`
    );

    alert("Car details copied!");
  };

  return (
    <section className="featured">
      <div className="section-header">
        <h2>🔥 Featured Cars</h2>
        <p>Explore premium luxury and sports cars</p>
      </div>

      <div className="filter-panel">
        <input
          type="text"
          placeholder="🔍 Search cars..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="search-bar"
        />

        <div className="category-buttons">
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              className={`category-btn ${
                category === item ? "active-category" : ""
              }`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="filter-controls">
          <select
            value={fuelType}
            onChange={(event) => setFuelType(event.target.value)}
            className="filter-select"
          >
            <option value="All">All Fuel Types</option>
            <option value="Petrol">Petrol</option>
            <option value="Electric">Electric</option>
            <option value="Luxury">Luxury</option>
          </select>

          <select
            value={budget}
            onChange={(event) => setBudget(event.target.value)}
            className="filter-select"
          >
            <option value="All">Any Budget</option>
            <option value="2">Up to ₹2 Cr</option>
            <option value="5">Up to ₹5 Cr</option>
            <option value="10">Up to ₹10 Cr</option>
          </select>

          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="filter-select"
          >
            <option value="default">Sort by: Featured</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>

          <button type="button" className="reset-filter-btn" onClick={resetFilters}>
            Reset Filters
          </button>
        </div>

        <p className="result-count">
          Showing {filteredCars.length} of {featuredCars.length} cars
        </p>
      </div>

      {filteredCars.length === 0 ? (
        <div className="empty-state">
          <h3>No matching cars found</h3>
          <p>Try changing your search or resetting the filters.</p>

          <button type="button" className="reset-filter-btn" onClick={resetFilters}>
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="car-grid">
          {filteredCars.map((car) => {
            const isFavorite = favorites.some((item) => item.id === car.id);
            const isCompared = compareCars.some((item) => item.id === car.id);

            return (
              <div className="car-card" key={car.id}>
                <div className="car-image-wrapper">
                  <div className="new-badge">NEW</div>

                  <img src={car.image} alt={car.name} />

                  <button
                    className="wishlist-btn"
                    onClick={() => onToggleFavorite(car)}
                  >
                    {isFavorite ? "❤️" : "🤍"}
                  </button>
                </div>

                <div className="car-info">
                  <p className="car-category">{car.category}</p>

                  <h3>{car.name}</h3>
                  <h2>{car.price}</h2>

                  <div className="car-details">
                    <span>
                      <FaGasPump />
                      {car.fuel}
                    </span>

                    <span>
                      <FaUsers />
                      {car.seats}
                    </span>
                  </div>

                  <button
                    className="view-btn"
                    onClick={() => onViewDetails(car)}
                  >
                    View Details
                  </button>

                  <button
                    className="share-btn"
                    onClick={() => copyDetails(car)}
                  >
                    📋 Copy Details
                  </button>

                  <button
                    className="compare-btn"
                    onClick={() => onCompare(car)}
                  >
                    {isCompared ? "✓ Selected" : "⚖ Compare"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default FeaturedCars;