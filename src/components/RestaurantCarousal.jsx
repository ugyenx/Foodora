import { useState, useMemo, useEffect } from "react";
import CarousalCard from "./CarousalCard";
import { ShimmerCarousel } from "./Shimmer";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import useFetchResto from "../hooks/useFetchResto";
import { Link } from "react-router-dom";
import React from "react";

const RestaurantCarousal = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const restObject = useFetchResto();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const restaurants =
    restObject?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants ||
    restObject?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants ||
    [];
  const restInfo = restaurants;
  const totalItems = restInfo.length;

  const visibleItems = useMemo(() => {
    return restInfo.slice(currentIndex, currentIndex + itemsPerPage);
  }, [restInfo, currentIndex, itemsPerPage]);

  const isAtStart = currentIndex === 0;
  const lastPossibleIndex = totalItems - itemsPerPage;
  const isAtEnd = currentIndex >= lastPossibleIndex;

  const handlePrev = () => {
    if (!isAtStart) {
      const prevIndex = Math.max(0, currentIndex - itemsPerPage);
      setcurrentIndex(prevIndex);
    }
  };
  const handleNext = () => {
    if (!isAtEnd) {
      const nextIndex = Math.min(
        currentIndex + itemsPerPage,
        lastPossibleIndex
      );
      setcurrentIndex(nextIndex);
    }
  };

  return restInfo.length === 0 ? (
    <section className="flex justify-center items-center mt-10">
      <ShimmerCarousel />
    </section>
  ) : (
    <section className="flex justify-center items-center mt-32">
      <div
        className={`bg-gray-500 rounded-full p-2 hover:bg-[#d31b27] transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer ${isAtStart ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={!isAtStart ? handlePrev : undefined}
      >
        <FaLongArrowAltLeft
          size={20}
          className="text-white"
        />
      </div>
      <div className="flex justify-center gap-4 mx-2 md:mx-4 w-full pt-10 px-4 py-8">
        {visibleItems.map((restaurants) => (
          <Link
            to={"/restaurant/" + restaurants.info.id}
            key={restaurants.info.id}
            className="flex-shrink-0 w-[280px]"
          >
            <CarousalCard restData={restaurants} />
          </Link>
        ))}
      </div>
      <div
        className={`bg-gray-500 rounded-full p-2 hover:bg-[#d31b27] transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer ${isAtEnd ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={!isAtEnd ? handleNext : undefined}
      >
        <FaLongArrowAltRight
          size={20}
          className="text-white"
        />
      </div>
    </section>
  );
};
export default RestaurantCarousal;