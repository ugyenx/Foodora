import { TbShoppingCartCopy } from "react-icons/tb";
import { RESTO_IMG_URL } from "../constants/constants";
import React from "react";

const CarousalCard = (props) => {
  const { restData } = props;
  const { name, areaName, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    restData?.info;
  return (
    <section>
      {/* shadow-[0px_0px_12px_5px_#cecccd,inset_11px_16px_78px_11px_#cecccd] ring-2 ring-gray-500/50*/}
      <div className="bg-white rounded-3xl  ring-2 ring-blue-500/10 shadow-[0_10px_30px_rgba(0,0,0,0.15),inset_11px_16px_78px_11px_rgba(0,0,0,0.15)]   w-64 h-60 mb-7 transition-transform duration-300 hover:-translate-y-2">
        <div className="relative flex justify-center  mb-25 mt-10">
          <div className="absolute -top-30">
            <img
              src={RESTO_IMG_URL + cloudinaryImageId}
              alt={name}
              className="w-50 h-50 object-cover rounded-full shadow-xl shadow-gray-500/50"
            />
          </div>
          {/* <div className="absolute -top-20 right-5 bg-black text-white p-2 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-3xl cursor-pointer hover:bg-gray-800">
            <TbShoppingCartCopy size={25} />
          </div> */}
        </div>

        <div className="text-center ">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-gray-500 text-sm">{cuisines.join(", ")}</p>
          <p className="text-gray-700 font-medium mt-2">{costForTwo}</p>
        </div>
      </div>
    </section>
  );
};
export default CarousalCard;
