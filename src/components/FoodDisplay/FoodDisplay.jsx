// eslint-disable-next-line no-empty-pattern, no-unused-vars
import React, { useContext } from "react";
import "./fooddisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

// eslint-disable-next-line no-unused-vars, react/prop-types
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item) =>
          // Use ternary expression to conditionally render FoodItem
          category === "All" || category === item.category ? (
            <FoodItem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ) : null // If the condition is not met, return null or an empty fragment
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
