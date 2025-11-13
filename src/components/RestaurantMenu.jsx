import React from "react";
import useFetchMenu from "../hooks/useFetchMenu";
import { useParams } from "react-router-dom";
import { FaCircle } from "react-icons/fa6";
import { FaGripLinesVertical } from "react-icons/fa6";
import { MdStars } from "react-icons/md";
import MenuCard from "./MenuCard";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuInfo = useFetchMenu(resId);
  if (menuInfo === null) {
    return <h2>Wait still fetching</h2>;
  }
  const {
    name,
    areaName,
    cuisines,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    sla,
  } = menuInfo.cards[2]?.card?.card?.info;
  const categories =
    menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  return (
    <div className="mx-50">
      <div>
        <h2>{name}</h2>
        <div className="bg-(--white-b)">
          <div className=" p-6 flex flex-col gap-2">
            <div className="flex items-center">
              <MdStars />
              <p>
                {avgRating}({totalRatingsString}) <span>•</span>{" "}
                {costForTwoMessage}
              </p>
            </div>
            <p>{cuisines.join(", ")}</p>
            <div className="flex items-center">
              <div>
                <FaCircle size={9} />
                <FaGripLinesVertical size={9} className="" />
                <FaCircle size={9} />
              </div>
              <div>
                <p>{areaName}</p>
                <p>{sla.slaString}</p>
              </div>
            </div>
          </div>
          <div className=" border-t">
            <p className="p-2">Free Delivery for orders above 99</p>
          </div>
        </div>
      </div>
      <div>
        {categories.map((items) => (
          <RestaurantCategories key={items.card.card.categoryId} data={items} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
