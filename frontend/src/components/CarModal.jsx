function CarModal({ selectedCar, onClose }) {
  if (!selectedCar) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(event) => event.stopPropagation()}>
        <img src={selectedCar.image} alt={selectedCar.name} />

        <h2>{selectedCar.name}</h2>

        <p>
          <strong>Price:</strong> {selectedCar.price}
        </p>

        <p>
          <strong>Fuel:</strong> {selectedCar.fuel}
        </p>

        <p>
          <strong>Seats:</strong> {selectedCar.seats}
        </p>

        <p>
          <strong>Top Speed:</strong> {selectedCar.topSpeed}
        </p>

        <p>
          <strong>Horsepower:</strong> {selectedCar.horsepower}
        </p>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default CarModal;