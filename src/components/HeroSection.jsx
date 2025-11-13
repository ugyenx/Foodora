// import pizza from "url:../assets/pizza.png";
import hero from "../assets/hero.png";
import React from "react";
const HeroSection = () => {
  return (
    <section className="flex items-center justify-between  mt-18">
      <div className=" w-2/5">
        <h1 className="text-7xl font-semibold mb-13 text-left">
          It’s not just <span className="text-(--primary)">Food</span>, It’s an
          Experience.
        </h1>
        <div className="flex gap-2">
          <button
            className="bg-(--primary) text-white px-6 py-3  rounded-4xl mr-5  hover:bg-(--my-color) transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg
"
          >
            View Resto
          </button>
          <button
            className="bg-(--white-b) text-black px-6 py-3 rounded-4xl  hover:bg-(--my-color) transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg
"
          >
            Order
          </button>
        </div>
      </div>
      <div className="">
        <img src={hero} alt="hero-image" className="w-[600px]" />
      </div>
    </section>
  );
};
export default HeroSection;
