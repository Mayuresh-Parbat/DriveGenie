function CarComparison({ compareCars }) {
  if (compareCars.length === 0) {
    return null;
  }

  return (
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

              <div className="verified-badge">✔ Verified Dealer</div>

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
  );
}

export default CarComparison;