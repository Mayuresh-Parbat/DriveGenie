import { trendingCars } from "../data/cars";

function TrendingCars() {
  return (
    <section className="trending">
      <div className="section-header">
        <h2>🔥 Trending This Week</h2>
        <p>Most viewed luxury cars on DriveGenie</p>
      </div>

      <div className="trending-grid">
        {trendingCars.map((car) => (
          <div className="trending-card" key={car.id}>
            <div className="trending-badge">{car.rank}</div>

            <img src={car.image} alt={car.name} />

            <div className="trending-info">
              <h3>{car.name}</h3>
              <h2>{car.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingCars;