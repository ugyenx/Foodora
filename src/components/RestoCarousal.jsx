import { useState, useMemo } from "react";
import CarousalCard from "./CarousalCard";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import useFetchResto from "../hooks/useFetchResto";

const ITEMS_PER_PAGE = 4;

const RestoCarousal = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const restObject = useFetchResto();
  const restaurants =
    restObject?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants ||
    restObject?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants ||
    [];
  const restInfo = restaurants;
  const totalItems = restInfo.length;
  const visibleItems = useMemo(() => {
    return restInfo.slice(currentIndex, currentIndex + ITEMS_PER_PAGE);
  }, [restInfo, currentIndex]);
  const isAtStart = currentIndex === 0;
  const lastPossibleIndex = totalItems - ITEMS_PER_PAGE;
  const isAtEnd = currentIndex >= lastPossibleIndex;

  const handlePrev = () => {
    if (!isAtStart) {
      const prevIndex = Math.max(0, currentIndex - ITEMS_PER_PAGE);
      setcurrentIndex(prevIndex);
    }
  };
  const handleNext = () => {
    if (!isAtEnd) {
      const nextIndex = Math.min(
        currentIndex + ITEMS_PER_PAGE,
        lastPossibleIndex
      );
      setcurrentIndex(nextIndex);
    }
  };

  return restInfo.length === 0 ? (
    <h1>Hello not Workiong</h1>
  ) : (
    <section className="flex justify-around items-center mx-45 mt-20 ">
      <div className="bg-gray-500 rounded-full  hover:bg-(--primary) transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
        <FaLongArrowAltLeft
          onClick={handlePrev}
          size={20}
          className="text-white m-3"
        />
      </div>
      <div className="flex gap-4 mx-4">
        {visibleItems.map((restaurants) => (
          <CarousalCard key={restaurants.info.id} restData={restaurants} />
        ))}
      </div>
      <div className="bg-gray-500 rounded-full  hover:bg-(--primary) transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
        <FaLongArrowAltRight
          onClick={handleNext}
          size={20}
          className="text-white m-3"
        />
      </div>
    </section>
  );
};
export default RestoCarousal;
