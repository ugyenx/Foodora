import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const data = useSelector((store) => store.cart.items);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 md:py-6 relative sticky top-0 z-50 bg-[#e6e0e0]">
      {/* Logo */}
      <h1 className="text-2xl md:text-4xl font-bold tracking-wide font-logo z-50">
        F<span className="text-(--primary)">OO</span>DORA
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 lg:gap-20 text-lg pt-2 font-semibold tracking-wider text-gray-900">
        <Link to={"/"}>
          <li className="hover:text-(--primary) transition-transform duration-300 hover:-translate-y-2">
            Home
          </li>
        </Link>
        <Link to={"/restaurant"}>
          <li className="hover:text-(--primary) transition-transform duration-300 hover:-translate-y-2">
            Restaurant
          </li>
        </Link>
        <Link to={"/about"}>
          <li className="hover:text-(--primary) transition-transform duration-300 hover:-translate-y-2">
            About Us
          </li>
        </Link>
        <Link to={"/contact"}>
          <li className="hover:text-(--primary) transition-transform duration-300 hover:-translate-y-2">
            Contact
          </li>
        </Link>
      </ul>

      {/* Desktop Cart & Auth */}
      <div className="hidden md:flex gap-5 items-center">
        <Link to={"/cart"}>
          <div className="flex items-center">
            <CiShoppingCart
              className="text-3xl font-bold text-black mr-1.5 hover:text-(--primary) transition-transform duration-300 hover:-translate-y-2"
            />
            <p className="font-medium">items - {data.length}</p>
          </div>
        </Link>
        <Link to={"/login"}>
          <button className="bg-(--primary) text-white px-5 py-3 rounded-4xl hover:bg-(--my-color) transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
            Sign Up
          </button>
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-50 cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
          <ul className="flex flex-col items-center gap-8 text-2xl font-semibold text-gray-900">
            <Link to={"/"} onClick={toggleMenu}>
              <li className="hover:text-(--primary)">Home</li>
            </Link>
            <Link to={"/restaurant"} onClick={toggleMenu}>
              <li className="hover:text-(--primary)">Restaurant</li>
            </Link>
            <Link to={"/about"} onClick={toggleMenu}>
              <li className="hover:text-(--primary)">About Us</li>
            </Link>
            <Link to={"/contact"} onClick={toggleMenu}>
              <li className="hover:text-(--primary)">Contact</li>
            </Link>
          </ul>
          <div className="flex flex-col items-center gap-6">
            <Link to={"/cart"} onClick={toggleMenu}>
              <div className="flex items-center gap-2">
                <CiShoppingCart className="text-4xl text-black" />
                <p className="text-xl">items - {data.length}</p>
              </div>
            </Link>
            <Link to={"/login"} onClick={toggleMenu}>
              <button className="bg-(--primary) text-white px-8 py-4 rounded-full text-xl hover:bg-(--my-color)">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
