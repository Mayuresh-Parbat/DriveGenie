import { useState } from "react";
import { featuredCars } from "../data/cars";

function Recommendation() {
  const [budget, setBudget] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [recommendedCars, setRecommendedCars] = useState([]);

  const recommendCars = () => {
    const filteredCars = featuredCars.filter((car) => {
      const numericPrice = parseFloat(car.price.replace(/[₹Cr\s]/g, ""));

      const budgetMatch = !budget || numericPrice <= Number(budget);
      const fuelMatch =
        !fuelType || car.fuel.toLowerCase() === fuelType.toLowerCase();

      return budgetMatch && fuelMatch;
    });

    setRecommendedCars(filteredCars);
  };

  return (
    <section className="recommendation">
      <div className="recommendation-header">
        <h2>🤖 AI Car Recommendation</h2>
        <p>Find the perfect car based on your preferences</p>
      </div>

      <div className="recommendation-box">
        <div className="recommendation-grid">
          <div className="input-group">
            <label>Maximum Budget (Cr)</label>

            <select
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
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
              onChange={(event) => setFuelType(event.target.value)}
            >
              <option value="">Any</option>
              <option value="Petrol">Petrol</option>
              <option value="Electric">Electric</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>
        </div>

        <button className="recommend-btn" onClick={recommendCars}>
          Recommend Cars
        </button>
      </div>

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
  );
}

export default Recommendation;