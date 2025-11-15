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
  return (
    <div className="mx-45">
      <div>
        <h2 className="text-3xl pl-2 font-bold tracking-wide mb-5">{name}</h2>
        <div className="bg-(--white-b) rounded-2xl border border-slate-900/10">
          <div className=" p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="">
                <MdStars size={24} className="text-green-800 " />
              </div>
              <p className=" font-bold">
                {avgRating}({totalRatingsString}){" "}
                <span className="text-gray-400 font-medium px-2">•</span>{" "}
                {costForTwoMessage}
              </p>
            </div>
            <p className="text-(--primary) font-semibold">
              {cuisines.join(", ")}
            </p>
            <div className="flex items-center gap-3">
              <div className="text-gray-400">
                <FaCircle size={9} />
                <FaGripLinesVertical size={9} className="" />
                <FaCircle size={9} />
              </div>
              <div>
                <div className="flex gap-4">
                  <span className="text-sm font-semibold tracking-wide">
                    Outlet
                  </span>
                  <span className="text-sm text-slate-900/70">{areaName}</span>
                </div>
                <p className="text-sm font-semibold tracking-wide">
                  {sla.slaString}
                </p>
              </div>
            </div>
          </div>
          <div className=" border-t border-slate-900/10 pl-2">
            <p className="p-2.5 text-(--primary) text-sm font-semibold">
              Free Delivery for orders above 99
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 mx-5">
        {categories.map((items) => (
          <RestaurantCategories key={items.card.card.categoryId} data={items} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
