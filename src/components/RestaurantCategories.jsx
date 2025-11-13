import React from "react";
import { FaChevronDown } from "react-icons/fa";
const RestaurantCategories = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="flex flex-col">
        <p>
          {data?.card?.card?.title} ({data?.card?.card?.itemCards.length})
        </p>
        <FaChevronDown />
      </div>
    </div>
  );
};

export default RestaurantCategories;
