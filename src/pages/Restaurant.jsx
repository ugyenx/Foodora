import Search from "../components/Search";
import { ShimmerGrid } from "../components/Shimmer";
import RestoCarousal from "../components/RestaurantCarousal";
import useFetchResto from "../hooks/useFetchResto";
import CarousalCard from "../components/CarousalCard";
import { Link } from "react-router-dom";
import React, { useState } from "react";
const Restaurant = () => {
  const [searchText, setSearchText] = useState("");
  const restObject = useFetchResto();
  const restaurants =
    restObject?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants || [];

  const restList = restaurants.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="w-full bg-[#f6f5f3] min-h-screen font-sans text-[#1A1A1A] rounded-2xl ">
      {/* Hero Section */}
      <div className="w-full bg-white py-20 px-4 sm:px-8 text-center border-b border-gray-100 shadow-sm rounded-2xl">
        <h1 className="text-5xl font-bold text-[#1A1A1A] mb-4 tracking-tight">
          Order from <span className="text-[#d31b27]">Top Restaurants</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
          Fresh food, delivered fast. Explore the best local flavors in your area.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">

        {/* Search */}
        <div className="mb-12">
          <Search searchText={searchText} setSearchText={setSearchText} />
        </div>

        {searchText === "" && (
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold text-[#1A1A1A] border-l-4 border-[#d31b27] pl-4">Popular Restaurants</h3>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>
            <div className="">
              <RestoCarousal />
            </div>
          </div>
        )}

        {/* Restaurant List Header */}
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-2xl font-bold text-[#1A1A1A] border-l-4 border-[#d31b27] pl-4">
            {searchText === "" ? "All Restaurants" : "Matching Restaurants"}
          </h3>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>

        {/* Restaurant Grid */}
        {restaurants.length === 0 ? (
          <ShimmerGrid />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-32 justify-items-center mt-40">
            {restList.map((res) => (
              <div key={res.info.id} className="w-full hover:scale-95 transition-transform duration-200">
                <Link to={"/restaurant/" + res.info.id}>
                  <CarousalCard restData={res} />
                </Link>
              </div>
            ))}
          </div>
        )}

        {restList.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No restaurants found fitting that description.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Restaurant;
