import Search from "../components/Search";
import RestoCarousal from "../components/RestaurantCarousal";
import useFetchResto from "../hooks/useFetchResto";
import CarousalCard from "../components/CarousalCard";
import { Link } from "react-router-dom";
import React from "react";
const Restaurant = () => {
  const restObject = useFetchResto();
  const restaurants =
    restObject?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants || [];
  const restList = restaurants;
  return (
    <section>
      <Search />
      <div>
        <div className="px-18 ">
          <hr className=" border-blue-500/10 pb-7 " />
          <h3 className="text-lg font-semibold ">Popular Restaurants</h3>
        </div>
        <div className="scale-93">
          <RestoCarousal />
        </div>
      </div>
      <div className="px-18 pt-5 pb-20 ">
        <hr className=" border-blue-500/10 pb-7 " />
        <h3 className="text-lg font-semibold ">All Restaurants</h3>
      </div>
     
      <div className="flex gap-6 justify-center flex-wrap scale-93">
        {restList.map((res) => (
          <div key={res.info.id} className="pb-25">
            <Link to={"/restaurant/" + res.info.id}>
              <CarousalCard restData={res} />
            </Link>
          </div>
        ))}
      </div>
     
    </section>
  );
};

export default Restaurant;
