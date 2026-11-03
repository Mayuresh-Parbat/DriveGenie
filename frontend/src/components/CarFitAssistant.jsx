import { useMemo, useState } from "react";

function CarFitAssistant({ car }) {
  const [purpose, setPurpose] = useState("Daily commute");
  const [priority, setPriority] = useState("Performance");
  const [showResult, setShowResult] = useState(false);

  const result = useMemo(() => {
    let score = 65;
    const reasons = [];

    const isElectric = car.fuel === "Electric";
    const isSUV = car.category === "SUV";
    const isCoupe = car.category === "Coupe";
    const seatCount = Number.parseInt(car.seats, 10);

    if (purpose === "Daily commute") {
      if (isElectric) {
        score += 22;
        reasons.push("Electric performance is ideal for efficient daily driving.");
      } else if (seatCount >= 4) {
        score += 14;
        reasons.push("Its seating capacity makes it practical for regular use.");
      } else {
        score += 6;
        reasons.push("It offers a focused, driver-first commute experience.");
      }
    }

    if (purpose === "Family travel") {
      if (isSUV && seatCount >= 5) {
        score += 24;
        reasons.push("SUV space and five seats make it family-friendly.");
      } else if (seatCount >= 4) {
        score += 14;
        reasons.push("The cabin provides practical passenger capacity.");
      } else {
        score -= 8;
        reasons.push("The two-seat layout is less suitable for family travel.");
      }
    }

    if (purpose === "Weekend performance") {
      if (isCoupe || Number.parseInt(car.horsepower, 10) >= 700) {
        score += 23;
        reasons.push("High-performance specifications suit enthusiastic driving.");
      } else {
        score += 10;
        reasons.push("It still offers a strong and engaging drive.");
      }
    }

    if (purpose === "Premium presence") {
      if (car.price.includes("Cr")) {
        score += 16;
        reasons.push("Its premium positioning creates a strong road presence.");
      }
      if (car.fuel === "Luxury") {
        score += 8;
        reasons.push("Luxury-focused engineering supports a refined experience.");
      }
    }

    if (priority === "Performance") {
      if (Number.parseInt(car.horsepower, 10) >= 600) {
        score += 12;
        reasons.push(`${car.horsepower} delivers exceptional performance potential.`);
      } else {
        score += 5;
        reasons.push(`${car.horsepower} provides capable performance.`);
      }
    }

    if (priority === "Sustainability") {
      if (isElectric) {
        score += 14;
        reasons.push("Its electric powertrain aligns with sustainability goals.");
      } else {
        score -= 4;
        reasons.push("A non-electric powertrain is less aligned with this priority.");
      }
    }

    if (priority === "Space & comfort") {
      if (seatCount >= 5) {
        score += 12;
        reasons.push("Five-seat capacity improves everyday comfort and flexibility.");
      } else if (seatCount >= 4) {
        score += 8;
        reasons.push("Four seats provide useful comfort for passengers.");
      } else {
        score -= 3;
        reasons.push("The compact seating layout prioritizes driving dynamics.");
      }
    }

    return {
      score: Math.max(55, Math.min(98, score)),
      reasons: reasons.slice(0, 3),
    };
  }, [car, purpose, priority]);

  const getScoreLabel = () => {
    if (result.score >= 90) return "Excellent match";
    if (result.score >= 78) return "Strong match";
    return "Potential match";
  };

  return (
    <section className="fit-assistant">
      <div className="fit-assistant-heading">
        <div>
          <p className="fit-eyebrow">DRIVEGENIE MATCH</p>
          <h2>Is this car right for you?</h2>
          <p>
            Tell us what matters to you and get a transparent suitability score.
          </p>
        </div>

        {showResult && (
          <div className="fit-score">
            <strong>{result.score}%</strong>
            <span>{getScoreLabel()}</span>
          </div>
        )}
      </div>


      <div className="fit-form">
        <label>
          How will you use this car?
          <select
            value={purpose}
            onChange={(event) => setPurpose(event.target.value)}
          >
            <option>Daily commute</option>
            <option>Family travel</option>
            <option>Weekend performance</option>
            <option>Premium presence</option>
          </select>
        </label>

