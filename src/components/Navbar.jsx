import { CiShoppingCart } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { logout } from "../constants/authSlice";

const Navbar = () => {
  const location = useLocation();
  const data = useSelector((store) => store.cart.items);
  const { isLoggedIn, user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsDropdownOpen(false);
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
          <li className={`hover:text-[#d31b27] transition-transform duration-300 hover:-translate-y-2 ${location.pathname === '/' ? "text-[#d31b27] border-b-2 border-[#d31b27]" : ""}`}>
            Home
          </li>
        </Link>
        <Link to={"/restaurant"}>
          <li className={`hover:text-[#d31b27] transition-transform duration-300 hover:-translate-y-2 ${location.pathname.startsWith('/restaurant') ? "text-[#d31b27] border-b-2 border-[#d31b27]" : ""}`}>
            Restaurant
          </li>
        </Link>
        <Link to={"/about"}>
          <li className={`hover:text-[#d31b27] transition-transform duration-300 hover:-translate-y-2 ${location.pathname === '/about' ? "text-[#d31b27] border-b-2 border-[#d31b27]" : ""}`}>
            About Us
          </li>
        </Link>
        <Link to={"/contact"}>
          <li className={`hover:text-[#d31b27] transition-transform duration-300 hover:-translate-y-2 ${location.pathname === '/contact' ? "text-[#d31b27] border-b-2 border-[#d31b27]" : ""}`}>
            Contact
          </li>
        </Link>
      </ul>

      {/* Desktop Cart & Auth */}
      <div className="hidden md:flex gap-5 items-center">
        <Link to={"/cart"}>
          <div className="relative flex items-center p-2">
            <CiShoppingCart
              className="text-3xl font-bold text-black hover:text-[#d31b27] transition-transform duration-300 hover:-translate-y-2"
            />
            {data.length > 0 && (
              <span className="absolute top-0 right-0 bg-[#d31b27] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform translate-x-1/4 -translate-y-1/4">
                {data.length}
              </span>
            )}
          </div>
        </Link>
        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer hover:text-(--primary) transition-transform duration-300 hover:-translate-y-2"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="bg-gray-200 p-2 rounded-full">
              <FaUser className="text-xl text-gray-700" />
            </div>
            {isLoggedIn && <span className="font-semibold text-sm">{user?.name || 'User'}</span>}
          </div>

          {/* Profile Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden py-1">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-(--primary) transition-colors"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-(--primary) transition-colors border-b border-gray-50"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-(--primary) transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
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
              <div className="relative flex items-center p-2">
                <CiShoppingCart className="text-4xl text-black" />
                {data.length > 0 && (
                  <span className="absolute top-0 right-0 bg-[#d31b27] text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center transform translate-x-1/4 -translate-y-1/4">
                    {data.length}
                  </span>
                )}
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
