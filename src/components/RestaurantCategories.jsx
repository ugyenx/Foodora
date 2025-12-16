import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import MenuCard from "./MenuCard";
const RestaurantCategories = ({ data, restaurantInfo }) => {
  const [showItem, setshowItem] = useState(true);
  const handleClick = () => {
    showItem ? setshowItem(false) : setshowItem(true);
  };
  return (
    <div>
      <div
        className="flex justify-between  items-start mb-8 "
        onClick={handleClick}
      >
        <p className="text-xl font-semibold">
          {data?.card?.card?.title} ({data?.card?.card?.itemCards.length})
        </p>
        <div className="pr-5">
          <FaChevronDown />
        </div>
      </div>
      <div className="flex flex-col  gap-10 mb-10">
        {data?.card?.card?.itemCards.map(
          (item) =>
            showItem && (
              <MenuCard key={item.card.info.id} items={item.card.info} restaurantInfo={restaurantInfo} />
            )
        )}
      </div>
    </div>
  );
};

export default RestaurantCategories;
