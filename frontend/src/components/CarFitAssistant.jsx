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

