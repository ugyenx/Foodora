import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outele } from "react-router-dom";
import HeroSection from "./components/HeroSection";
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
