import { useEffect, useState } from "react";
import "./App.css";
import carImage from "./assets/Final.png";
import {
  FaCar,
  FaTruckPickup,
  FaCarSide,
} from "react-icons/fa";
import { GiElectric } from "react-icons/gi";

const heroImages = [
  "https://applescoop.org/image/wallpapers/mac/mansory-initiate-8k-black-supercars-luxury-popular-8k-hdr-desktop-wallpaper-background-images-for-apple-macbook-air-macbook-pro-imac-windows-pc-and-linux-computers-4k-high-resolution-14-03-2025-1741981693-hd-wallpaper.jpg",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2020/09/02191145/2021-rolls-royce-ghost-details.jpg",
];

function App() {
  const [theme, setTheme] = useState("dark");
  const [index, setIndex] = useState(0);

  // CALCULATOR STATE
  const [price, setPrice] = useState("");
  const [interest, setInterest] = useState("");
  const [months, setMonths] = useState("");
  const [down, setDown] = useState("");

  const [monthly, setMonthly] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalLoan, setTotalLoan] = useState(0);

  // HERO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // THEME TOGGLE
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // EMI CALCULATION
  const calculateEMI = () => {
    const P = Number(price) - Number(down);
    const r = Number(interest) / 12 / 100;
    const n = Number(months);

    if (!P || !r || !n || P <= 0) return;

    const emi =
      (P * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    const total = emi * n;
    const interestTotal = total - P;

    setMonthly(Math.round(emi));
    setTotalLoan(Math.round(total));
    setTotalInterest(Math.round(interestTotal));
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

      {/* BROWSE */}
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

      <section className="calculator">

  {/* LEFT SIDE */}
  <div className="calc-box">
    <h2>Financing Calculator</h2>
    <p className="subtitle">
      Estimate your monthly auto loan payments easily.
    </p>

    <div className="calc-grid">
      <input
        placeholder="Car Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        placeholder="Interest Rate (%)"
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
      />
      <input
        placeholder="Loan Term (months)"
        value={months}
        onChange={(e) => setMonths(e.target.value)}
      />
      <input
        placeholder="Down Payment"
        value={down}
        onChange={(e) => setDown(e.target.value)}
      />
    </div>

    <button className="calc-btn" onClick={calculateEMI}>
      Calculate
    </button>

    <div className="results">
      <div>
        <p>Monthly Payment</p>
        <h3>₹{monthly}</h3>
      </div>
      <div>
        <p>Total Interest</p>
        <h3>₹{totalInterest}</h3>
      </div>
      <div>
        <p>Total Loan</p>
        <h3>₹{totalLoan}</h3>
      </div>
    </div>
  </div>

  {/* RIGHT SIDE IMAGE */}
  <div className="calc-image">
    <img src={carImage} alt="car" />
  </div>

</section>
    </div>
  );
}

export default App;