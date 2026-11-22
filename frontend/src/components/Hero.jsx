import { useEffect, useState } from "react";
import { heroImages } from "../data/cars";

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((previousIndex) => (previousIndex + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  
