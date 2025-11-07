import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between mx-45 my-9">
      <h1 className="text-4xl font-bold tracking-wide font-logo">
        F<span className=" text-(--primary)">OO</span>DORA
      </h1>
      <ul className="flex gap-20 text-lg  pt-2 font-semibold tracking-wider text-gray-900 ">
        <Link to={"/"}>
          <li className="hover:text-(--primary) transition-transform duration-300 hover:-translate-y-2 ">
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
      <div className="flex gap-5 items-center justify-start mr-15">
        <CiShoppingCart
          className="text-3xl font-bold text-black mr-1.5 hover:text-(--primary) transition-transform duration-300 hover:-translate-y-2
"
        />
        <button
          className="bg-(--primary) text-white px-5 py-3  rounded-4xl hover:bg-(--my-color) transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg
"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
