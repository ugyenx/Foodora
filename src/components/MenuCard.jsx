import React from "react";
import { FaStar } from "react-icons/fa";
import { RESTO_IMG_URL } from "../constants/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../constants/cartSlice";
const MenuCard = ({ items, restaurantInfo }) => {
  const dispatch = useDispatch();
  const handleAdd = (items) => {
    dispatch(addItem({ item: items, restaurant: restaurantInfo }));
  };
  return (
    <div>
      <div className="flex justify-between mb-17">
        <div className=" flex flex-col w-4/5  ">
          <p className="text-lg font-bold text-gray-900/80 tracking-wider">
            {items.name}
          </p>

          <p className="font-bold text-sm pb-1.5">
            ₹{(items.price || items.defaultPrice) / 100}
          </p>

          <div className="flex items-center gap-2 pb-1.5">
            <FaStar className="text-green-800 " size={10} />

            <div>
              {items?.ratings?.aggregatedRating?.rating ? (
                <p className="text-sm text-green-800 font-bold">
                  {items?.ratings?.aggregatedRating?.rating}{" "}
                  <span className="text-gray-500">
                    ({items?.ratings?.aggregatedRating?.ratingCountV2})
                  </span>
                </p>
              ) : (
                <p className="text-sm text-gray-500 font-bold">No Ratings</p>
              )}
            </div>
          </div>
          <p className="font-sm text-gray-500 tracking-wide">
            {items.description.length > 120
              ? items.description.substring(0, 120) + "...    more"
              : items.description}
          </p>
        </div>
        <div className="relative   ml-10 mt-1.5">
          <div className="w-39 ">
            {items.imageId ? (
              <img
                src={RESTO_IMG_URL + items.imageId}
                alt=""
                className="w-full h-39 object-cover rounded-xl"
              />
            ) : (
              <img
                src="dfdfd"
                alt="no image"
                className="w-full h-39 object-cover rounded-xl"
              />
            )}
          </div>
          <button
            className="absolute -bottom-6 right-3.5 bg-(--white-b) border border-slate-900/10 rounded-lg px-10 py-2 font-semibold text-xl text-red-500 hover:bg-gray-200"
            onClick={() => handleAdd(items)}
          >
            ADD
          </button>
        </div>
      </div>
      <div className="border-t-2 border-slate-900/20"></div>
    </div>
  );
};

export default MenuCard;
