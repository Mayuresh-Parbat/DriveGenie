import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCars from "./components/FeaturedCars";
import CarComparison from "./components/CarComparison";
import CarCollections from "./components/CarCollections";
import TrendingCars from "./components/TrendingCars";
import Recommendation from "./components/Recommendation";
import Calculator from "./components/Calculator";
import CarModal from "./components/CarModal";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("dark");
  const [compareCars, setCompareCars] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [recentCars, setRecentCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  const toggleFavorite = (car) => {
    const exists = favorites.some((item) => item.id === car.id);

    if (exists) {
      setFavorites(favorites.filter((item) => item.id !== car.id));
      return;
    }

    setFavorites([...favorites, car]);
  };

  const addToRecent = (car) => {
    const exists = recentCars.some((item) => item.id === car.id);

    if (exists) {
      setRecentCars([
        car,
        ...recentCars.filter((item) => item.id !== car.id),
      ]);
      return;
    }

    setRecentCars([car, ...recentCars]);
  };

  const handleViewDetails = (car) => {
    setSelectedCar(car);
    addToRecent(car);
  };

  const handleCompare = (car) => {
    const exists = compareCars.some((item) => item.id === car.id);

    if (exists) {
      setCompareCars(compareCars.filter((item) => item.id !== car.id));
      return;
    }

    if (compareCars.length >= 2) {
      alert("You can compare only 2 cars");
      return;
    }

    setCompareCars([...compareCars, car]);
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar
        theme={theme}
        favoritesCount={favorites.length}
        onToggleTheme={toggleTheme}
      />

      <Hero />

      <FeaturedCars
        favorites={favorites}
        compareCars={compareCars}
        onToggleFavorite={toggleFavorite}
        onCompare={handleCompare}
        onViewDetails={handleViewDetails}
      />

      <CarComparison compareCars={compareCars} />

      <CarCollections
        recentCars={recentCars}
        favorites={favorites}
        onClearFavorites={() => setFavorites([])}
      />

      <TrendingCars />

      <Recommendation />

      <Calculator />

      <CarModal
        selectedCar={selectedCar}
        onClose={() => setSelectedCar(null)}
      />

      <BackToTop show={showTop} />

      <Footer />
    </div>
  );
}

export default App;