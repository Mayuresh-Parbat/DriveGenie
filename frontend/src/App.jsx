import { useEffect, useState } from "react";
import "./App.css";

import {
  FaCar,
  FaTruckPickup,
  FaCarSide,
} from "react-icons/fa";
import { GiElectric } from "react-icons/gi";

const heroImages = [
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c"
];

function App() {
  const [theme, setTheme] = useState("dark");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`app ${theme}`}>

      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">DriveGenie</h1>

        <div className="nav-links">
          <a>Home</a>
          <a>Explore</a>
          <a>AI Search</a>
          <a>Contact</a>
        </div>

        <div className="nav-right">
          <button onClick={toggleTheme} className="theme-btn">
            {theme === "dark" ? "Light" : "Dark"}
          </button>
          <button className="btn">Login</button>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImages[index]})` }}
      >
        <div className="overlay">
          <h1 className="hero-title">
            Discover Cars Like <span>Never Before</span>
          </h1>

          <p className="hero-sub">
            AI-powered search. Find your perfect ride instantly.
          </p>

          <div className="search-box">
            <input placeholder="SUV under 10L or Electric car" />
            <button>Search</button>
          </div>
        </div>
      </section>

      {/* BROWSE (FIXED PREMIUM VERSION) */}
      <section className="browse">
        <div className="browse-overlay">
          <h2>Browse By Type</h2>

          <div className="browse-row">
            {[
              { name: "Electric", icon: <GiElectric /> },
              { name: "Sedan", icon: <FaCarSide /> },
              { name: "Hatchback", icon: <FaCar /> },
              { name: "SUV", icon: <FaCar /> },
              { name: "Crossover", icon: <FaCar /> },
              { name: "Pickup", icon: <FaTruckPickup /> },
              { name: "Coupe", icon: <FaCarSide /> },
              { name: "Convertible", icon: <FaCarSide /> },
            ].map((item) => (
              <div className="browse-card" key={item.name}>
                <div className="icon">{item.icon}</div>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="calculator">
        <div className="calc-box">
          <h2>Financing Calculator</h2>

          <div className="calc-grid">
            <input placeholder="Car Price" />
            <input placeholder="Interest %" />
            <input placeholder="Months" />
            <input placeholder="Down Payment" />
          </div>

          <button className="calc-btn">Calculate</button>

          <div className="results">
            <p>Monthly: ₹0</p>
            <p>Total Interest: ₹0</p>
            <p>Total Loan: ₹0</p>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          alt="car"
        />
      </section>

    </div>
  );
}
export default App;