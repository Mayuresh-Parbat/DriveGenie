import { useNavigate, useParams } from "react-router-dom";
import {
  FaGasPump,
  FaUsers,
  FaTachometerAlt,
  FaHorseHead,
} from "react-icons/fa";
import { featuredCars } from "../data/cars";
import CarFitAssistant from "./CarFitAssistant";

function CarDetails({
  favorites,
  compareCars,
  onToggleFavorite,
  onCompare,
  onOpenCar,
}) {
  const { carId } = useParams();
  const navigate = useNavigate();

  const car = featuredCars.find((item) => item.id === Number(carId));

  if (!car) {
    return (
      <section className="car-not-found">
        <h2>Car not found</h2>
        <p>The car you are looking for is unavailable.</p>

        <button className="view-btn" onClick={() => navigate("/")}>
          Back to Cars
        </button>
      </section>
    );
  }

  const isFavorite = favorites.some((item) => item.id === car.id);
  const isCompared = compareCars.some((item) => item.id === car.id);

  const similarCars = featuredCars
    .filter((item) => item.id !== car.id && item.category === car.category)
    .slice(0, 3);

  const goToCalculator = () => {
    navigate("/");

    setTimeout(() => {
      document
        .getElementById("calculator")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <main className="car-details-page">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to Browse Cars
      </button>

      <section className="car-details-hero">
        <div className="details-image-box">
          <img src={car.image} alt={car.name} />
          <span className="details-category">{car.category}</span>
        </div>

        <div className="details-content">
          <div className="details-title-row">
            <div>
              <p className="verified-badge">✔ Verified Dealer</p>
              <h1>{car.name}</h1>
              <p className="details-rating">⭐ {car.rating} / 5.0</p>
            </div>

            <button
              className="details-wishlist-btn"
              onClick={() => onToggleFavorite(car)}
              aria-label="Toggle wishlist"
            >
              {isFavorite ? "❤️" : "🤍"}
            </button>
          </div>
