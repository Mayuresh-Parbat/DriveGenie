import Hero from "../components/Hero";
import FeaturedCars from "../components/FeaturedCars";
import CarComparison from "../components/CarComparison";
import CarCollections from "../components/CarCollections";
import TrendingCars from "../components/TrendingCars";
import Recommendation from "../components/Recommendation";
import Calculator from "../components/Calculator";

function Home({
  favorites,
  compareCars,
  recentCars,
  onToggleFavorite,
  onCompare,
  onViewDetails,
  onClearFavorites,
}) {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <div id="browse-cars">
        <FeaturedCars
          favorites={favorites}
          compareCars={compareCars}
          onToggleFavorite={onToggleFavorite}
          onCompare={onCompare}
          onViewDetails={onViewDetails}
        />
      </div>

      <div id="compare">
        <CarComparison compareCars={compareCars} />
      </div>

      <CarCollections
        recentCars={recentCars}
        favorites={favorites}
        onClearFavorites={onClearFavorites}
      />

      <TrendingCars />

      <div id="recommendation">
        <Recommendation />
      </div>

      <div id="calculator">
        <Calculator />
      </div>
    </>
  );
}

export default Home;
