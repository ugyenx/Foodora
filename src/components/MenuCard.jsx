import React from "react";
import { FaStar } from "react-icons/fa";
import { RESTO_IMG_URL } from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../constants/cartSlice";
const MenuCard = ({ items, restaurantInfo }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const existingItem = cartItems.find((item) => item.id === items.id);
  const quantity = existingItem ? existingItem.quantity : 0;

  const handleAdd = (items) => {
    dispatch(addItem({ item: items, restaurant: restaurantInfo }));
  };

  const handleRemove = (id) => {
    dispatch(removeItem({ id }));
  };
  return (
    <div>
      <div className="flex justify-between mb-17 md:gap-5">
        <div className=" flex flex-col w-[60%] md:w-4/5  ">
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
        <div className="relative ml-2 md:ml-10 mt-1.5 w-[35%] md:w-auto flex flex-col items-center">
          <div className="w-full md:w-39 h-32 md:h-39">
            {items.imageId ? (
              <img
                src={RESTO_IMG_URL + items.imageId}
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <img
                src="dfdfd"
                alt="no image"
                className="w-full h-full object-cover rounded-xl"
              />
            )}
          </div>
          {quantity > 0 ? (
            <div className="absolute -bottom-4 md:-bottom-6 left-1/2 transform -translate-x-1/2 bg-(--white-b) border border-slate-900/10 rounded-lg px-2 md:px-4 py-1 md:py-2 font-semibold text-sm md:text-xl text-red-500 hover:bg-gray-200 shadow-sm whitespace-nowrap flex items-center gap-3 md:gap-4 w-auto justify-between">
              <button
                className="px-2"
                onClick={() => handleRemove(items.id)}
              >
                -
              </button>
              <span className="text-gray-700 font-bold">{quantity}</span>
              <button
                className="px-2"
                onClick={() => handleAdd(items)}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="absolute -bottom-4 md:-bottom-6 left-1/2 transform -translate-x-1/2 bg-(--white-b) border border-slate-900/10 rounded-lg px-4 md:px-10 py-1 md:py-2 font-semibold text-sm md:text-xl text-red-500 hover:bg-gray-200 shadow-sm whitespace-nowrap"
              onClick={() => handleAdd(items)}
            >
              ADD
            </button>
          )}
        </div>
      </div>
      <div className="border-t-2 border-slate-900/20"></div>
    </div>
  );
};

export default MenuCard;
