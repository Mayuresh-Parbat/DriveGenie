import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import CarDetails from "./components/CarDetails";
import Home from "./pages/Home";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const navigate = useNavigate();

  const [theme, setTheme] = useLocalStorage("drivegenie-theme", "dark");

  const [compareCars, setCompareCars] = useLocalStorage(
    "drivegenie-compare-cars",
    []
  );

  const [favorites, setFavorites] = useLocalStorage(
    "drivegenie-favorites",
    []
  );

  const [recentCars, setRecentCars] = useLocalStorage(
    "drivegenie-recent-cars",
    []
  );

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

