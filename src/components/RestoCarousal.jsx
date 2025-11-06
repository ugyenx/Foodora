import { useState, useEffect, useMemo } from "react";
import { RESTO_API } from "../constants/constants";
import CarousalCard from "./CarousalCard";
import Navbar from "./Navbar";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const ITEMS_PER_PAGE = 4;

const RestoCarousal = () => {
  const [restInfo, setrestInfo] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESTO_API);
    const json = await data.json();

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      [];
    setrestInfo(restaurants);

    console.log(json);
  };
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
    <section className="flex justify-around items-center mx-45">
      <FaLongArrowAltLeft onClick={handlePrev} />
      <div className="flex gap-4  w-[250px]">
        {visibleItems.map((restaurants) => (
          <CarousalCard key={restaurants.info.id} restData={restaurants} />
        ))}
      </div>
      <FaLongArrowAltRight onClick={handleNext} />
    </section>
  );
};
export default RestoCarousal;
