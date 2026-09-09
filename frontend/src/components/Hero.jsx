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

  return (
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
  );
}

export default Hero;