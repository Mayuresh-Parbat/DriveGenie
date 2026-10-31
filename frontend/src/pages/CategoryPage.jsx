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
