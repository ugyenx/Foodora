import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import RestaurantCarousal from "../components/RestaurantCarousal";
import React from "react";
const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="mb-25">
        <HeroSection />
      </div>
      <RestaurantCarousal />
    </>
  );
};
export default Home;
