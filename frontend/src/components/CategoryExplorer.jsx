import { useNavigate } from "react-router-dom";
import { featuredCars } from "../data/cars";

const categoryDetails = {
  SUV: {
    title: "SUV",
    description: "Versatile comfort, space, and confidence.",
  },
  Sedan: {
    title: "Sedan",
    description: "Refined design for everyday luxury.",
  },
  Coupe: {
    title: "Coupe",
    description: "Performance-focused driving experiences.",
  },
  Electric: {
    title: "Electric",
    description: "Advanced technology with electric performance.",
  },
};

function CategoryExplorer() {
  const navigate = useNavigate();

  const categories = Object.values(categoryDetails).map((category) => {
    const carsInCategory = featuredCars.filter(
      (car) => car.category === category.title
    );

    return {
      ...category,
      count: carsInCategory.length,
      image: carsInCategory[0]?.image,
    };
  });

  return (
    <section className="category-explorer">
      <div className="section-header">
        <h2>Browse by Body Type</h2>
        <p>Start with the car style that matches your lifestyle.</p>
      </div>

      <div className="category-explorer-grid">
        {categories.map((category) => (
          <button
            type="button"
            key={category.title}
            className="category-explorer-card"
            onClick={() =>
              navigate(`/cars/category/${encodeURIComponent(category.title)}`)
            }
          >
                       <img src={category.image} alt={category.title} />

            <div className="category-explorer-overlay">
              <p>{category.count} cars available</p>
              <h3>{category.title}</h3>
              <span>{category.description}</span>

              <strong>
                Explore {category.title} <span>→</span>
              </strong>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

export default CategoryExplorer;
