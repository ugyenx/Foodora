// import pizza from "url:../assets/pizza.png";
import hero from "../assets/hero.png";
import React from "react";
const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between mt-10 md:mt-18">
      <div className="w-full md:w-2/5 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-8 md:mb-13">
          It’s not just <span className="text-(--primary)">Food</span>, It’s an
          Experience.
        </h1>
        <div className="flex justify-center md:justify-start gap-2">
          <button
            className="bg-(--primary) text-white px-6 py-3 rounded-4xl mr-5 hover:bg-(--my-color) transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            View Resto
          </button>
          <button
            className="bg-(--white-b) text-black px-6 py-3 rounded-4xl hover:bg-(--my-color) transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            Order
          </button>
        </div>
      </div>
      <div className="mb-10 md:mb-0">
        <img src={hero} alt="hero-image" className="w-full max-w-[300px] md:max-w-[600px]" />
      </div>
    </section>
  );
};
export default HeroSection;
