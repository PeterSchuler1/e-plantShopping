import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";

const products = [
  {
    name: "Fiddle Leaf Fig",
    cost: "$25",
    image: "/images/fiddle-leaf-fig.jpg",
  },
  {
    name: "Snake Plant",
    cost: "$15",
    image: "/images/snake-plant.jpg",
  },
  {
    name: "Monstera Deliciosa",
    cost: "$30",
    image: "/images/monstera.jpg",
  },
  {
    name: "Peace Lily",
    cost: "$20",
    image: "/images/peace-lily.jpg",
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
      <div className="products-container">
        {products.map((plant) => (
          <div className="product-card" key={plant.name}>
            <img
              className="product-image"
              src={plant.image}
              alt={plant.name}
            />
            <h3 className="product-name">{plant.name}</h3>
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
  );
};

export default ProductList;
