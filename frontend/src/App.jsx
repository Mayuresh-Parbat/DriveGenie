import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import CarDetails from "./components/CarDetails";
import Home from "./pages/Home";

function App() {
  const navigate = useNavigate();

  const [theme, setTheme] = useState("dark");
  const [compareCars, setCompareCars] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [recentCars, setRecentCars] = useState([]);
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
    addToRecent(car);
    navigate(`/cars/${car.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
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

      <Routes>
        <Route
          path="/"
          element={
            <Home
              favorites={favorites}
              compareCars={compareCars}
              recentCars={recentCars}
              onToggleFavorite={toggleFavorite}
              onCompare={handleCompare}
              onViewDetails={handleViewDetails}
              onClearFavorites={() => setFavorites([])}
            />
          }
        />

        <Route
          path="/cars/:carId"
          element={
            <CarDetails
              favorites={favorites}
              compareCars={compareCars}
              onToggleFavorite={toggleFavorite}
              onCompare={handleCompare}
              onOpenCar={handleViewDetails}
            />
          }
        />
      </Routes>

      <BackToTop show={showTop} />
      <Footer />
    </div>
  );
}

export default App;