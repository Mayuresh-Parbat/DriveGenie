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
{/* FEATURED CARS */}
{/* FEATURED CARS */}
<section className="featured">
  <h2>Featured Cars</h2>

  <div className="car-grid">
    {[
      {
        name: "BMW M4",
        price: "₹75L",
        image: "https://backiee.com/static/wallpapers/1000x563/294176.jpg",
      },
      {
        name: "Audi R8",
        price: "₹2.3Cr",
        image: "https://motoringworld.in/wp-content/uploads/2022/10/Audi-R8-V10-GT-RWD.jpg ",
      },
      {
        name: "Tesla Model S",
        price: "₹1.5Cr",
        image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/93821/model-s-exterior-front-view.jpeg?q=80&q=80",
      },
      {
        name: "Lamborghini Huracan",
        price: "₹3.2Cr",
        image: "https://s.yimg.com/ny/api/res/1.2/y6x1Kv_QhfM6wPVhFx4_uA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD03MDA-/https://media.zenfs.com/en/motorious_297/3794108e9e1c87f4c674922b51e889c6",
      },
      {
        name: "Porsche 911",
        price: "₹2Cr",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      },
      {
        name: "Range Rover",
        price: "₹1.2Cr",
        image: "https://media.cdn-jaguarlandrover.com/api/v2/images/119766/w/1600/h/650.jpg",
      },
      {
        name: "Mercedes C-Class",
        price: "₹60L",
        image: "https://images.hgmsites.net/med/2025-mercedes-benz-c-class-c-300-4matic-sedan-angular-front-exterior-view_100959585_m.webp",
      },
      {
        name: "Toyota Fortuner",
        price: "₹45L",
        image: "https://wallpapers.com/images/hd/toyota-fortuner-legender-super-white-yjakyf3ldvwe1knf.jpg",
      },
      {
        name: "Hyundai Creta",
        price: "₹18L",
        image: "https://images.hindustantimes.com/auto/auto-images/hyundai/creta/exterior_hyundai-creta_front-view_600x400_04.jpg",
      },
      {
        name: "Tata Nexon EV",
        price: "₹16L",
        image: "https://static.toiimg.com/thumb/msid-103479928,width-400,resizemode-4/103479928.jpg",
      },
      {
        name: "Ferrari 488",
        price: "₹3.5Cr",
        image: "https://i.pinimg.com/736x/bf/5e/40/bf5e40b61090cf3760e27f1866915f35.jpg",
      },
      {
        name: "Bugatti Chiron",
        price: "₹19Cr",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
      },
    ].map((car, i) => (
      <div key={i} className="car-card">
        <img src={car.image} alt={car.name} />

        <div className="car-info">
          <h3>{car.name}</h3>
          <p>{car.price}</p>
          <button className="view-btn">View Details</button>
        </div>
      </div>
    ))}
  </div>
</section>
</div>
);
}

export default App;