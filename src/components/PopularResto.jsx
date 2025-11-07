//
import React from "react";
import RestoCarousal from "./RestoCarousal";

const PopularResto = () => {
  return (
    <section>
      <div className="px-80 pb-5">
        <hr className=" border-blue-500/10 pb-7 " />
        <h3 className="text-lg font-semibold ">Popular Restaurants</h3>
      </div>
      <div className="scale-93">
        <RestoCarousal />
      </div>
    </section>
  );
};

export default PopularResto;
