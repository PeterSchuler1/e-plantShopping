import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";

// Products grouped into categories
const categories = [
  {
    name: "Indoor Plants",
    plants: [
      { name: "Fiddle Leaf Fig", cost: "$25", image: "/images/fiddle-leaf-fig.jpg" },
      { name: "Snake Plant", cost: "$15", image: "/images/snake-plant.jpg" },
      { name: "Peace Lily", cost: "$20", image: "/images/peace-lily.jpg" },
    ],
  },
  {
    name: "Outdoor Plants",
    plants: [
      { name: "Monstera Deliciosa", cost: "$30", image: "/images/monstera.jpg" },
      { name: "Aloe Vera", cost: "$18", image: "/images/aloe-vera.jpg" },
      { name: "Spider Plant", cost: "$12", image: "/images/spider-plant.jpg" },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  // Add selected plant to cart
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list">
      <h2>Plant Shop</h2>

      {categories.map((category) => (
        <div key={category.name} className="category-section">
          <h3 className="category-heading">{category.name}</h3>
          <div className="products-container">
            {category.plants.map((plant) => (
              <div className="product-card" key={plant.name}>
                <img
                  className="product-image"
                  src={plant.image}
                  alt={plant.name}
                />
                <h4 className="product-name">{plant.name}</h4>
                <p className="product-cost">{plant.cost}</p>
                <button
                  className="add-to-cart-button"
                  onClick={() => handleAddToCart(plant)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
