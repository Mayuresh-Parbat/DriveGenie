import { useEffect, useState } from "react";
import "./App.css";
import {
  FaHeart,
  FaRegHeart,
  FaGasPump,
  FaBolt,
  FaUsers
} from "react-icons/fa";

const heroImages = [
  "https://applescoop.org/image/wallpapers/mac/mansory-initiate-8k-black-supercars-luxury-popular-8k-hdr-desktop-wallpaper-background-images-for-apple-macbook-air-macbook-pro-imac-windows-pc-and-linux-computers-4k-high-resolution-14-03-2025-1741981693-hd-wallpaper.jpg",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2020/09/02191145/2021-rolls-royce-ghost-details.jpg",
];

const featuredCars = [
  {
    id: 1,
    name: "Lamborghini Aventador",
    price: "₹5.5 Cr",
    fuel: "Petrol",
    seats: "2 Seats",
    topSpeed: "350 km/h",
  horsepower: "770 HP",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
  },
  {
    id: 2,
    name: "Rolls Royce Ghost",
    price: "₹8.9 Cr",
    fuel: "Luxury",
    seats: "4 Seats",
    topSpeed: "350 km/h",
  horsepower: "770 HP",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
  },
  {
    id: 3,
    name: "Tesla Model S",
    price: "₹1.5 Cr",
    fuel: "Electric",
    seats: "5 Seats",
    topSpeed: "350 km/h",
  horsepower: "770 HP",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399",
  },
  {
    id: 4,
    name: "BMW M4 Competition",
    price: "₹1.8 Cr",
    fuel: "Petrol",
    seats: "4 Seats",
    topSpeed: "350 km/h",
    horsepower: "770 HP",
      rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d",
  },
];
const trendingCars = [
  {
    id: 1,
    rank: "#1",
    name: "Ferrari SF90",
    price: "₹7.5 Cr",
    image:
      "https://images.hdqwalls.com/wallpapers/bthumb/novitec-ferrari-sf90-xx-stradale-aerodynamic-hybrid-supercar-oe.jpg"
  },
  {
    id: 2,
    rank: "#2",
    name: "Porsche 911 Turbo",
    price: "₹3.3 Cr",
    image:
      "https://i.ytimg.com/vi/LfonoA3PGao/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAP-z6JfRTyx7zfatzgUEYm_WZmfw"
  },
  {
    id: 3,
    rank: "#3",
    name: "McLaren 720S",
    price: "₹4.8 Cr",
    image:
      "https://images5.alphacoders.com/128/1284109.jpg"
  }
];

function App() {
  const [theme, setTheme] = useState("dark");
  const [currentTime, setCurrentTime] = useState("");
  const [index, setIndex] = useState(0);
  const [wishlist, setWishlist] = useState([]);

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
useEffect(() => {
  const timer = setInterval(() => {
    const now = new Date();

    setCurrentTime(
      now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    );
  }, 1000);

  return () => clearInterval(timer);
}, []);
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleWishlist = (carId) => {
    if (wishlist.includes(carId)) {
      setWishlist(wishlist.filter((id) => id !== carId));
    } else {
      setWishlist([...wishlist, carId]);
    }
  };
  const [budget, setBudget] = useState("");
const [fuelType, setFuelType] = useState("");
const [recommendedCars, setRecommendedCars] = useState([]);
const [compareCars, setCompareCars] = useState([]);
const [favorites, setFavorites] = useState([]);
const [recentCars, setRecentCars] = useState([]);
const [selectedCar, setSelectedCar] = useState(null);
const [search, setSearch] = useState("");
const filteredCars = featuredCars.filter((car) =>
  car.name.toLowerCase().includes(
    search.toLowerCase()
  )
);
const handleCompare = (car) => {
  const exists = compareCars.find(
    (item) => item.id === car.id
  );

const toggleFavorite = (car) => {
  const exists = favorites.find(
    (item) => item.id === car.id
  );
const addToRecent = (car) => {
  const exists = recentCars.find(
    (item) => item.id === car.id
  );

  if (exists) {
    setRecentCars([
      car,
      ...recentCars.filter((item) => item.id !== car.id),
    ]);
  } else {
    setRecentCars([car, ...recentCars]);
  }
};
  if (exists) {
    setFavorites(
      favorites.filter(
        (item) => item.id !== car.id
      )
    );
  } else {
    setFavorites([...favorites, car]);
  }
};

  if (exists) {
    setCompareCars(
      compareCars.filter(
        (item) => item.id !== car.id
      )
    );
    return;
  }

  if (compareCars.length >= 2) {
    alert("You can compare only 2 cars");
    return;
  }

  setCompareCars([...compareCars, car]);
};
const recommendCars = () => {
  const filtered = featuredCars.filter((car) => {

    const numericPrice = parseFloat(
      car.price.replace(/[₹Cr\s]/g, "")
    );

    const budgetMatch =
      !budget || numericPrice <= Number(budget);

    const fuelMatch =
      !fuelType ||
      car.fuel.toLowerCase() === fuelType.toLowerCase();

    return budgetMatch && fuelMatch;
  });

  setRecommendedCars(filtered);
};

  const calculateEMI = () => {
    const P = Number(price) - Number(down || 0);
    const R = Number(interest) / 12 / 100;
    const N = Number(months);

    if (P <= 0 || R <= 0 || N <= 0) {
      alert("Enter valid positive values");
      return;
    }

    if (Number(down) > Number(price)) {
      alert("Down payment cannot exceed price");
      return;
    }

    const emi =
      (P * R * Math.pow(1 + R, N)) /
      (Math.pow(1 + R, N) - 1);

    const totalPay = emi * N;
    const interestPay = totalPay - P;

    setMonthly(Math.round(emi));
    setTotalLoan(Math.round(totalPay));
    setTotalInterest(Math.round(interestPay));
  };

  return (
    <div className={`app ${theme}`}>

      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">DriveGenie</h1>

        <div className="nav-right">

  <div className="wishlist-counter">
    ❤️ {favorites.length}
  </div>

  <div className="live-clock">
    🕒 {currentTime}
  </div>

  <button
    onClick={toggleTheme}
    className="theme-btn"
  >
    {theme === "dark" ? "Light" : "Dark"}
  </button>

</div>
      </nav>

      {/* HERO */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroImages[index]})`,
        }}
      >
        <div className="overlay">
          <h1 className="hero-title">
            Discover Cars Like <span>Never Before</span>
          </h1>

          <p className="hero-subtitle">
            Luxury • Performance • Intelligence
          </p>
        </div>
      </section>

      {/* FEATURED CARS */}
      <section className="featured">
        <div className="section-header">
          <h2>🔥 Featured Cars</h2>
          <p>Explore premium luxury and sports cars</p>
          <input
  type="text"
  placeholder="🔍 Search cars..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="search-bar"
/>
        </div>

        <div className="car-grid">
          {filteredCars.map((car) => (
            <div className="car-card" key={car.id}>

              <div className="car-image-wrapper">
                <div className="new-badge">
  NEW
</div>
                <img src={car.image} alt={car.name} />

<button
  className="wishlist-btn"
  onClick={() => toggleFavorite(car)}
>
  {favorites.find(
    (item) => item.id === car.id
  )
    ? "❤️"
    : "🤍"}
</button>
              </div>

              <div className="car-info">
                <h3>{car.name}</h3>

                <h2>{car.price}</h2>

                <div className="car-details">

                  <span>
                    <FaGasPump />
                    {car.fuel}
                  </span>

                  <span>
                    <FaUsers />
                    {car.seats}
                  </span>

                </div>

  <button
  className="view-btn"
  onClick={() => {
    setSelectedCar(car);
    addToRecent(car);
  }}
>
  View Details
</button>
<button
  className="share-btn"
  onClick={() => {
    navigator.clipboard.writeText(
      `Car: ${car.name}
Price: ${car.price}
Fuel: ${car.fuel}
Seats: ${car.seats}`
    );

    alert("Car details copied!");
  }}
>
  📋 Copy Details
</button>
<button
  className="compare-btn"
  onClick={() => handleCompare(car)}
>
  {compareCars.find(
    (item) => item.id === car.id
  )
    ? "✓ Selected"
    : "⚖ Compare"}
</button>
              </div>

            </div>
          ))}
        </div>
      </section>


      {compareCars.length > 0 && (
  
  <section className="compare-section">
    <div className="section-header">
      <h2>⚖ Compare Cars</h2>
      <p>Side by side luxury car comparison</p>
    </div>

    <div className="compare-grid">
      {compareCars.map((car) => (
        <div className="compare-card" key={car.id}>
          <img src={car.image} alt={car.name} />

          <div className="compare-info">
          <h3>{car.name}</h3>

<div className="verified-badge">
  ✔ Verified Dealer
</div>
<div className="compare-row">
  <span>Rating</span>
  <strong>⭐ {car.rating}</strong>
</div>

<div className="compare-row">
  <span>Price</span>
  <strong>{car.price}</strong>
</div>

            <div className="compare-row">
              <span>Fuel</span>
              <strong>{car.fuel}</strong>
            </div>

            <div className="compare-row">
              <span>Seats</span>
              <strong>{car.seats}</strong>
            </div>

            <div className="compare-row">
              <span>Top Speed</span>
              <strong>{car.topSpeed}</strong>
            </div>

            <div className="compare-row">
              <span>Horsepower</span>
              <strong>{car.horsepower}</strong>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
)}
{recentCars.length > 0 && (
  <section className="recent-section">

    <div className="section-header">
      <h2>🕒 Recently Viewed</h2>
      <p>Your recently explored cars</p>
    </div>

    <div className="featured-grid">

      {recentCars.map((car) => (

        <div className="car-card" key={car.id}>

          <img
            src={car.image}
            alt={car.name}
          />

          <div className="car-info">

            <h3>{car.name}</h3>

            <p className="car-rating">
              ⭐ {car.rating}
            </p>

            <h2>{car.price}</h2>

            <div className="car-meta">
              <span>{car.fuel}</span>
              <span>{car.seats}</span>
            </div>

          </div>

        </div>

      ))}

    </div>

  </section>
)}

{favorites.length > 0 && (

<section className="favorite-section">

<div className="favorite-header">

  <div>
    <h2>❤️ My Favorite Cars</h2>
    <p>Your saved dream cars</p>
  </div>

  <button
    className="clear-btn"
    onClick={() => setFavorites([])}
  >
    Clear Wishlist
  </button>

</div>

  <div className="featured-grid">

    {favorites.map((car) => (

      <div
        className="car-card"
        key={car.id}
      >

        <img
          src={car.image}
          alt={car.name}
        />

        <div className="car-info">

          <h3>{car.name}</h3>

          <p className="car-rating">
            ⭐ {car.rating}
          </p>

          <h2>{car.price}</h2>

          <div className="car-meta">

            <span>
              {car.fuel}
            </span>

            <span>
              {car.seats}
            </span>

          </div>

        </div>

      </div>

    ))}

  </div>

</section>

)}

      {/* TRENDING CARS */}

<section className="trending">

  <div className="section-header">
    <h2>🔥 Trending This Week</h2>
    <p>Most viewed luxury cars on DriveGenie</p>
  </div>

  <div className="trending-grid">

    {trendingCars.map((car) => (

      <div
        className="trending-card"
        key={car.id}
      >

        <div className="trending-badge">
          {car.rank}
        </div>

        <img
          src={car.image}
          alt={car.name}
        />

        <div className="trending-info">

          <h3>{car.name}</h3>

          <h2>{car.price}</h2>

        </div>

      </div>

    ))}

  </div>

</section>

      {/* AI RECOMMENDATION */}

<section className="recommendation">

  <div className="recommendation-header">
    <h2>🤖 AI Car Recommendation</h2>
    <p>
      Find the perfect car based on your preferences
    </p>
  </div>

  <div className="recommendation-box">

    <div className="recommendation-grid">

      <div className="input-group">
        <label>Maximum Budget (Cr)</label>

        <select
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        >
          <option value="">Select Budget</option>
          <option value="2">₹2 Cr</option>
          <option value="5">₹5 Cr</option>
          <option value="10">₹10 Cr</option>
        </select>
      </div>

      <div className="input-group">
        <label>Fuel Type</label>

        <select
          value={fuelType}
          onChange={(e) => setFuelType(e.target.value)}
        >
          <option value="">Any</option>
          <option value="Petrol">Petrol</option>
          <option value="Electric">Electric</option>
          <option value="Luxury">Luxury</option>
        </select>
      </div>

    </div>

    <button
      className="recommend-btn"
      onClick={recommendCars}
    >
      Recommend Cars
    </button>

  </div>

  {/* RESULTS */}

  {recommendedCars.length > 0 && (

    <div className="recommend-grid">

      {recommendedCars.map((car) => (

        <div className="recommend-card" key={car.id}>

          <img src={car.image} alt={car.name} />

          <div className="recommend-info">

            <h3>{car.name}</h3>

            <h2>{car.price}</h2>

            <p>{car.fuel}</p>

          </div>

        </div>

      ))}

    </div>

  )}

</section>


      {/* CALCULATOR */}
      <section className="calculator">

        <div className="calc-left">

          <h2>Financing Calculator</h2>

          <p className="subtitle">
            Estimate your monthly auto loan payments with this calculator.
          </p>

          <div className="calc-grid">

            <div className="input-group">
              <label>Car Price (₹)</label>

              <input
                type="number"
                min="0"
                value={price}
                onChange={(e) =>
                  setPrice(Math.max(0, e.target.value))
                }
                placeholder="e.g. 500000"
              />
            </div>

            <div className="input-group">
              <label>Interest Rate (%)</label>

              <input
                type="number"
                min="0"
                step="0.1"
                value={interest}
                onChange={(e) =>
                  setInterest(Math.max(0, e.target.value))
                }
                placeholder="e.g. 8.5"
              />
            </div>

            <div className="input-group">
              <label>Loan Term</label>

              <select
                value={months}
                onChange={(e) => setMonths(e.target.value)}
              >
                <option value="">Select duration</option>
                <option value="12">12 months</option>
                <option value="24">24 months</option>
                <option value="36">36 months</option>
                <option value="48">48 months</option>
                <option value="60">60 months</option>
                <option value="72">72 months</option>
                <option value="84">84 months</option>
              </select>
            </div>

            <div className="input-group">
              <label>Down Payment (₹)</label>

              <input
                type="number"
                min="0"
                value={down}
                onChange={(e) =>
                  setDown(Math.max(0, e.target.value))
                }
                placeholder="optional"
              />
            </div>

          </div>

          <button
            className="calc-btn"
            onClick={calculateEMI}
          >
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

        <div className="calc-right">
          <img src="https://www.pngarts.com/files/12/Aston-Martin-Silver-Car-Transparent-Image.png" />
        </div>

            </section>

      {selectedCar && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedCar(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCar.image}
              alt={selectedCar.name}
            />

            <h2>{selectedCar.name}</h2>

            <p>
              <strong>Price:</strong> {selectedCar.price}
            </p>

            <p>
              <strong>Fuel:</strong> {selectedCar.fuel}
            </p>

            <p>
              <strong>Seats:</strong> {selectedCar.seats}
            </p>

            <p>
              <strong>Top Speed:</strong> {selectedCar.topSpeed}
            </p>

            <p>
              <strong>Horsepower:</strong> {selectedCar.horsepower}
            </p>

            <button
              className="close-btn"
              onClick={() => setSelectedCar(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
<footer className="footer">

  <div className="footer-container">

    <div className="footer-section">
      <h2> DriveGenie</h2>
      <p>
        Your intelligent destination for discovering,
        comparing and exploring luxury cars with AI-powered
        recommendations.
      </p>
    </div>

    <div className="footer-section">
      <h3>Quick Links</h3>

      <a href="#">Home</a>
      <a href="#">Featured Cars</a>
      <a href="#">Compare Cars</a>
      <a href="#">EMI Calculator</a>
    </div>

    <div className="footer-section">
      <h3>Contact</h3>

      <p>📧 support@drivegenie.com</p>
      <p>📍 Pune, Maharashtra</p>
      <p>📞 +91 9000000000</p>
    </div>

    <div className="footer-section">
      <h3>Follow Us</h3>

      <div className="social-icons">
        <a href="#">📸</a>
        <a href="#">💼</a>
        <a href="#">▶️</a>
      </div>
    </div>

  </div>

  <div className="footer-bottom">
    © 2026 DriveGenie. All Rights Reserved.
  </div>

</footer>
    </div>
    
  );
}

export default App;
