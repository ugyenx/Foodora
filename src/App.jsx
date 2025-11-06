import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outele } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import RestoCarousal from "./components/RestoCarousal";
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <RestoCarousal />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
