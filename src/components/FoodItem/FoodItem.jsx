import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/storecontext";

const FoodItem = ({ id, name, price, description, image }) => {
  const [countItems, setCountItems] = useState(0);
  //   const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={image} alt={name} />
        {!countItems[id] ? (
          <img
            className="add"
            onClick={() => setCountItems((prev) => ({ ...prev, [id]: 1 }))}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => setCountItems((prev) => ({ ...prev, [id]: 0 }))} //removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{countItems[id]}</p>
            <img
              onClick={() => setCountItems((prev) => ({ ...prev, [id]: 1 }))} //addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
