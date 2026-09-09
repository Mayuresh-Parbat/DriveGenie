import { useState } from "react";
import { FaGasPump, FaUsers } from "react-icons/fa";
import { featuredCars } from "../data/cars";

function FeaturedCars({
  favorites,
  compareCars,
  onToggleFavorite,
  onCompare,
  onViewDetails,
}) {
  const [search, setSearch] = useState("");

  const filteredCars = featuredCars.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  const copyDetails = (car) => {
    navigator.clipboard.writeText(
      `Car: ${car.name}
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

        <input
          type="text"
          placeholder="🔍 Search cars..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="search-bar"
        />
      </div>

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

                <button className="view-btn" onClick={() => onViewDetails(car)}>
                  View Details
                </button>

                <button className="share-btn" onClick={() => copyDetails(car)}>
                  📋 Copy Details
                </button>

                <button className="compare-btn" onClick={() => onCompare(car)}>
                  {isCompared ? "✓ Selected" : "⚖ Compare"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FeaturedCars;