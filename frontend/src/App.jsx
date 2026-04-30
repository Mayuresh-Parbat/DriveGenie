import { useEffect, useState } from "react";
import "./App.css";
import {
  FaCar,
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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortType, setSortType] = useState("default");
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");

  // 🔥 EMI CALCULATOR STATES
  const [price, setPrice] = useState("");
  const [interest, setInterest] = useState("");
  const [months, setMonths] = useState("");
  const [down, setDown] = useState("");

  const [monthly, setMonthly] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalLoan, setTotalLoan] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // 🔥 EMI CALCULATION LOGIC
  const calculateEMI = () => {
    const P = price - down;
    const R = interest / 12 / 100;
    const N = months;

    if (!P || !R || !N) return;

    const emi =
      (P * R * Math.pow(1 + R, N)) /
      (Math.pow(1 + R, N) - 1);

    const totalPay = emi * N;
    const interestPay = totalPay - P;

    setMonthly(Math.round(emi));
    setTotalLoan(Math.round(totalPay));
    setTotalInterest(Math.round(interestPay));
  };

  const cars = [
    { name: "BMW M4", price: "₹75L", priceValue: 7500000, category: "Sedan", image: "https://backiee.com/static/wallpapers/1000x563/294176.jpg" },
    { name: "Audi R8", price: "₹2.3Cr", priceValue: 23000000, category: "Coupe", image: "https://motoringworld.in/wp-content/uploads/2022/10/Audi-R8-V10-GT-RWD.jpg" },
    { name: "Tesla Model S", price: "₹1.5Cr", priceValue: 15000000, category: "Electric", image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/93821/model-s-exterior-front-view.jpeg" },
    { name: "Range Rover", price: "₹1.2Cr", priceValue: 12000000, category: "SUV", image: "https://media.cdn-jaguarlandrover.com/api/v2/images/119766/w/1600/h/650.jpg" },
    { name: "Mercedes C-Class", price: "₹60L", priceValue: 6000000, category: "Sedan", image: "https://images.hgmsites.net/med/2025-mercedes-benz-c-class-c-300-4matic-sedan-angular-front-exterior-view_100959585_m.webp" },
    { name: "Toyota Fortuner", price: "₹45L", priceValue: 4500000, category: "SUV", image: "https://wallpapers.com/images/hd/toyota-fortuner-legender-super-white-yjakyf3ldvwe1knf.jpg" },
    { name: "Hyundai Creta", price: "₹18L", priceValue: 1800000, category: "SUV", image: "https://images.hindustantimes.com/auto/auto-images/hyundai/creta/exterior_hyundai-creta_front-view_600x400_04.jpg" },
    { name: "Tata Nexon EV", price: "₹16L", priceValue: 1600000, category: "Electric", image: "https://static.toiimg.com/thumb/msid-103479928,width-400,resizemode-4/103479928.jpg" },
  ];

  const filteredCars = cars
    .filter((car) =>
      selectedCategory === "All"
        ? true
        : car.category === selectedCategory
    )
    .filter((car) =>
      car.name.toLowerCase().includes(search.toLowerCase())
    );

  const sortedCars = [...filteredCars].sort((a, b) => {
    if (sortType === "low") return a.priceValue - b.priceValue;
    if (sortType === "high") return b.priceValue - a.priceValue;
    return 0;
  });

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

      {/* SEARCH */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search cars..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* FEATURED */}
      <section className="featured">
        <h2>Featured Cars</h2>

        <div className="car-grid">
          {sortedCars.map((car, i) => (
            <div key={i} className="car-card">

              <div className="wishlist-icon" onClick={() => toggleWishlist(car.name)}>
                {wishlist.includes(car.name) ? <FaHeart color="red" /> : <FaRegHeart />}
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

      {/* 🔥 EMI CALCULATOR */}
      <section className="calculator">

        <div className="calc-box">
          <h2>Financing Calculator</h2>
          <p className="subtitle">
            Estimate your monthly auto loan payments easily.
          </p>

          <div className="calc-grid">
            <input placeholder="Car Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input placeholder="Interest Rate (%)" value={interest} onChange={(e) => setInterest(e.target.value)} />
            <input placeholder="Loan Term (months)" value={months} onChange={(e) => setMonths(e.target.value)} />
            <input placeholder="Down Payment" value={down} onChange={(e) => setDown(e.target.value)} />
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

        <div className="calc-image">
          <img src="https://cdn.motor1.com/images/mgl/8APXP3/s1/aston-martin-dbs-770-ultimate-side-view.jpg" />
        </div>

      </section>

    </div>
  );
}

export default App;