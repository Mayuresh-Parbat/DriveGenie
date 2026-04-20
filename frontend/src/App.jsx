import { useState } from "react";
import "./App.css";

function App() {
  const [compareList, setCompareList] = useState([]);
  const [showCompare, setShowCompare] = useState(false);

  const cars = [
    {
      name: "BMW M4",
      price: "₹75L",
      priceValue: 7500000,
      category: "Sedan",
      image:
        "https://backiee.com/static/wallpapers/1000x563/294176.jpg",
    },
    {
      name: "Audi R8",
      price: "₹2.3Cr",
      priceValue: 23000000,
      category: "Coupe",
      image:
        "https://motoringworld.in/wp-content/uploads/2022/10/Audi-R8-V10-GT-RWD.jpg",
    },
    {
      name: "Tesla Model S",
      price: "₹1.5Cr",
      priceValue: 15000000,
      category: "Electric",
      image:
        "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/93821/model-s-exterior-front-view.jpeg",
    },
    {
      name: "Range Rover",
      price: "₹1.2Cr",
      priceValue: 12000000,
      category: "SUV",
      image:
        "https://media.cdn-jaguarlandrover.com/api/v2/images/119766/w/1600/h/650.jpg",
    },
    {
      name: "Mercedes C-Class",
      price: "₹60L",
      priceValue: 6000000,
      category: "Sedan",
      image:
        "https://images.hgmsites.net/med/2025-mercedes-benz-c-class-c-300-4matic-sedan-angular-front-exterior-view_100959585_m.webp",
    },
    {
      name: "Toyota Fortuner",
      price: "₹45L",
      priceValue: 4500000,
      category: "SUV",
      image:
        "https://wallpapers.com/images/hd/toyota-fortuner-legender-super-white-yjakyf3ldvwe1knf.jpg",
    },
    {
      name: "Hyundai Creta",
      price: "₹18L",
      priceValue: 1800000,
      category: "SUV",
      image:
        "https://images.hindustantimes.com/auto/auto-images/hyundai/creta/exterior_hyundai-creta_front-view_600x400_04.jpg",
    },
    {
      name: "Tata Nexon EV",
      price: "₹16L",
      priceValue: 1600000,
      category: "Electric",
      image:
        "https://static.toiimg.com/thumb/msid-103479928,width-400,resizemode-4/103479928.jpg",
    },
  ];

  const toggleCompare = (car) => {
    if (compareList.find((c) => c.name === car.name)) {
      setCompareList(compareList.filter((c) => c.name !== car.name));
    } else {
      if (compareList.length < 2) {
        setCompareList([...compareList, car]);
      }
    }
  };

  return (
    <div className="app dark">
      <section className="featured">
        <h2>Featured Cars</h2>

        <div className="car-grid">
          {cars.map((car, i) => (
            <div key={i} className="car-card">
              <img src={car.image} alt={car.name} />

              <div className="car-info">
                <h3>{car.name}</h3>
                <p>{car.price}</p>

                {/* PRIMARY BUTTON */}
                <button className="view-btn">View Details</button>

                {/* COMPARE BUTTON */}
                <button
                  className={`compare-btn ${
                    compareList.find((c) => c.name === car.name)
                      ? "active"
                      : compareList.length === 2
                      ? "disabled"
                      : ""
                  }`}
                  onClick={() => {
                    if (
                      compareList.length === 2 &&
                      !compareList.find((c) => c.name === car.name)
                    )
                      return;
                    toggleCompare(car);
                  }}
                >
                  {compareList.find((c) => c.name === car.name)
                    ? "Added ✓"
                    : compareList.length === 2
                    ? "Limit Reached"
                    : "Compare"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARE BAR */}
      {compareList.length > 0 && (
        <div className="compare-bar">
          <p>{compareList.length} selected</p>

          {compareList.length === 2 && (
            <button onClick={() => setShowCompare(true)}>
              Compare Now
            </button>
          )}
        </div>
      )}

      {/* COMPARE MODAL */}
      {showCompare && (
        <div className="compare-modal">
          <div className="compare-box">
            <button
              className="close-btn"
              onClick={() => setShowCompare(false)}
            >
              ✕
            </button>

            <h2>Car Comparison</h2>

            <div className="compare-cars">
              {compareList.map((car, i) => (
                <div key={i} className="compare-card">
                  <img src={car.image} alt={car.name} />
                  <h3>{car.name}</h3>

                  {car.priceValue ===
                    Math.min(...compareList.map((c) => c.priceValue)) && (
                    <span className="winner">Best Value</span>
                  )}
                </div>
              ))}
            </div>

            <div className="compare-table">
              <div className="compare-row">
                <span>Price</span>
                {compareList.map((car, i) => (
                  <span
                    key={i}
                    className={
                      car.priceValue ===
                      Math.min(...compareList.map((c) => c.priceValue))
                        ? "better"
                        : ""
                    }
                  >
                    {car.price}
                  </span>
                ))}
              </div>

              <div className="compare-row">
                <span>Category</span>
                {compareList.map((car, i) => (
                  <span key={i}>{car.category}</span>
                ))}
              </div>

              <div className="compare-row">
                <span>Mileage</span>
                {compareList.map((_, i) => (
                  <span key={i}>{15 + i * 3} km/l</span>
                ))}
              </div>

              <div className="compare-row">
                <span>Power</span>
                {compareList.map((_, i) => (
                  <span key={i}>{200 + i * 50} hp</span>
                ))}
              </div>

              <div className="compare-row">
                <span>Rating</span>
                {compareList.map((_, i) => (
                  <span key={i}>⭐ {4 + i * 0.3}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;