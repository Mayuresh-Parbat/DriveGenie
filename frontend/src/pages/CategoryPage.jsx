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
