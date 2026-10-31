import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaGasPump, FaUsers } from "react-icons/fa";
import { featuredCars } from "../data/cars";

function CategoryPage({
  favorites,
  compareCars,
  onToggleFavorite,
  onCompare,
  onViewDetails,
}) {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("default");

  const category = decodeURIComponent(categoryName);

  const cars = useMemo(() => {
    const categoryCars = featuredCars.filter(
      (car) => car.category.toLowerCase() === category.toLowerCase()
    );

    if (sortBy === "low-to-high") {
      return [...categoryCars].sort(
        (firstCar, secondCar) =>
          parseFloat(firstCar.price.replace(/[₹Cr\s]/g, "")) -
          parseFloat(secondCar.price.replace(/[₹Cr\s]/g, ""))
      );
    }

    if (sortBy === "high-to-low") {
      return [...categoryCars].sort(
        (firstCar, secondCar) =>
          parseFloat(secondCar.price.replace(/[₹Cr\s]/g, "")) -
          parseFloat(firstCar.price.replace(/[₹Cr\s]/g, ""))
      );
    }

    return categoryCars;
  }, [category, sortBy]);

  if (cars.length === 0) {
    return (
      <main className="category-page">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back to Browse Cars
        </button>

        <div className="empty-state">
          <h3>No cars found in this category</h3>
          <p>Please return to the homepage and explore another category.</p>
        </div>
      </main>
    );
  }
