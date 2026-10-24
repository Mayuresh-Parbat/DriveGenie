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

