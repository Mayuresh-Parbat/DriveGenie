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
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
  },
  {
    id: 2,
    name: "Rolls Royce Ghost",
    price: "₹8.9 Cr",
    fuel: "Luxury",
    seats: "4 Seats",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
  },
  {
    id: 3,
    name: "Tesla Model S",
    price: "₹1.5 Cr",
    fuel: "Electric",
    seats: "5 Seats",
    image:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399",
  },
  {
    id: 4,
    name: "BMW M4 Competition",
    price: "₹1.8 Cr",
    fuel: "Petrol",
    seats: "4 Seats",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d",
  },
];

function App() {
  const [theme, setTheme] = useState("dark");
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
          <button onClick={toggleTheme} className="theme-btn">
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
        </div>

        <div className="car-grid">
          {featuredCars.map((car) => (
            <div className="car-card" key={car.id}>

              <div className="car-image-wrapper">
                <img src={car.image} alt={car.name} />

                <button
                  className="wishlist-btn"
                  onClick={() => toggleWishlist(car.id)}
                >
                  {wishlist.includes(car.id) ? (
                    <FaHeart />
                  ) : (
                    <FaRegHeart />
                  )}
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

                <button className="view-btn">
                  View Details
                </button>
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

    </div>
  );
}

export default App;