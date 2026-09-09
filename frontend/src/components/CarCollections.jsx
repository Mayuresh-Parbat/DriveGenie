function CarCollections({ recentCars, favorites, onClearFavorites }) {
  return (
    <>
      {recentCars.length > 0 && (
        <section className="recent-section">
          <div className="section-header">
            <h2>🕒 Recently Viewed</h2>
            <p>Your recently explored cars</p>
          </div>

          <div className="featured-grid">
            {recentCars.map((car) => (
              <div className="car-card" key={car.id}>
                <img src={car.image} alt={car.name} />

                <div className="car-info">
                  <h3>{car.name}</h3>
                  <p className="car-rating">⭐ {car.rating}</p>
                  <h2>{car.price}</h2>

                  <div className="car-meta">
                    <span>{car.fuel}</span>
                    <span>{car.seats}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {favorites.length > 0 && (
        <section className="favorite-section">
          <div className="favorite-header">
            <div>
              <h2>❤️ My Favorite Cars</h2>
              <p>Your saved dream cars</p>
            </div>

            <button className="clear-btn" onClick={onClearFavorites}>
              Clear Wishlist
            </button>
          </div>

          <div className="featured-grid">
            {favorites.map((car) => (
              <div className="car-card" key={car.id}>
                <img src={car.image} alt={car.name} />

                <div className="car-info">
                  <h3>{car.name}</h3>
                  <p className="car-rating">⭐ {car.rating}</p>
                  <h2>{car.price}</h2>

                  <div className="car-meta">
                    <span>{car.fuel}</span>
                    <span>{car.seats}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default CarCollections;