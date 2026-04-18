import { useEffect, useState } from "react";
import "./App.css";
import carImage from "./assets/Final.png";
import {
  FaCar,
  FaTruckPickup,
  FaCarSide,
  FaHeart,
  FaRegHeart
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

  // 🔥 FILTER STATE
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 🔥 WISHLIST STATE
  const [wishlist, setWishlist] = useState([]);

  // LOAD WISHLIST
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(saved);
  }, []);

  const toggleWishlist = (carName) => {
    let updated;
    if (wishlist.includes(carName)) {
      updated = wishlist.filter((item) => item !== carName);
    } else {
      updated = [...wishlist, carName];
    }
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  // CALCULATOR STATE
  const [price, setPrice] = useState("");
  const [interest, setInterest] = useState("");
  const [months, setMonths] = useState("");
  const [down, setDown] = useState("");

  const [monthly, setMonthly] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalLoan, setTotalLoan] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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

  // 🔥 CAR DATA WITH CATEGORY
  const cars = [
    { name: "BMW M4", price: "₹75L", category: "Sedan", image: "https://backiee.com/static/wallpapers/1000x563/294176.jpg" },
    { name: "Audi R8", price: "₹2.3Cr", category: "Coupe", image: "https://motoringworld.in/wp-content/uploads/2022/10/Audi-R8-V10-GT-RWD.jpg" },
    { name: "Tesla Model S", price: "₹1.5Cr", category: "Electric", image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/93821/model-s-exterior-front-view.jpeg" },
    { name: "Range Rover", price: "₹1.2Cr", category: "SUV", image: "https://media.cdn-jaguarlandrover.com/api/v2/images/119766/w/1600/h/650.jpg" },
    { name: "Mercedes C-Class", price: "₹60L", category: "Sedan", image: "https://images.hgmsites.net/med/2025-mercedes-benz-c-class-c-300-4matic-sedan-angular-front-exterior-view_100959585_m.webp" },
    { name: "Toyota Fortuner", price: "₹45L", category: "SUV", image: "https://wallpapers.com/images/hd/toyota-fortuner-legender-super-white-yjakyf3ldvwe1knf.jpg" },
    { name: "Hyundai Creta", price: "₹18L", category: "SUV", image: "https://images.hindustantimes.com/auto/auto-images/hyundai/creta/exterior_hyundai-creta_front-view_600x400_04.jpg" },
    { name: "Tata Nexon EV", price: "₹16L", category: "Electric", image: "https://static.toiimg.com/thumb/msid-103479928,width-400,resizemode-4/103479928.jpg" },
  ];

  // 🔥 FILTER LOGIC
  const filteredCars =
    selectedCategory === "All"
      ? cars
      : cars.filter((car) => car.category === selectedCategory);

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
      <section className="hero" style={{ backgroundImage: `url(${heroImages[index]})` }}>
        <div className="overlay">
          <h1 className="hero-title">
            Discover Cars Like <span>Never Before</span>
          </h1>
        </div>
      </section>

      {/* BROWSE (FILTER CLICK ENABLED) */}
      <section className="browse">
        <div className="browse-overlay">
          <h2>Browse By Type</h2>

          <div className="browse-row">
            {["All","Electric","Sedan","SUV","Coupe"].map((type) => (
              <div
                key={type}
                className={`browse-card ${selectedCategory === type ? "active" : ""}`}
                onClick={() => setSelectedCategory(type)}
              >
                <div className="icon">
                  {type === "Electric" && <GiElectric />}
                  {type === "Sedan" && <FaCarSide />}
                  {type === "SUV" && <FaCar />}
                  {type === "Coupe" && <FaCarSide />}
                </div>
                <p>{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="featured">
        <h2>Featured Cars</h2>

        <div className="car-grid">
          {filteredCars.map((car, i) => (
            <div key={i} className="car-card">

              {/* ❤️ WISHLIST */}
              <div
                className="wishlist-icon"
                onClick={() => toggleWishlist(car.name)}
              >
                {wishlist.includes(car.name) ? (
                  <FaHeart color="red" />
                ) : (
                  <FaRegHeart />
                )}
              </div>

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