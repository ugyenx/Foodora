import { CiShoppingCart } from "react-icons/ci";
const Navbar = () => {
  return (
    <nav className="flex justify-between mx-45 my-9">
      <div className="flex ">
        <h1 className="text-3xl font-bold tracking-wide">F</h1>
        <h1 className="text-3xl font-bold text-red-500 tracking-wide">OO</h1>
        <h1 className="text-3xl font-bold tracking-wide">DORA</h1>
      </div>
      <ul className="flex gap-20 text-lg  pt-2 font-semibold tracking-wider text-gray-900 ">
        <li className="hover:text-red-500">Home</li>
        <li className="hover:text-red-500">Restaurant</li>
        <li className="hover:text-red-500">About Us</li>
        <li className="hover:text-red-500">Contact</li>
      </ul>
      <div className="flex gap-5 items-center justify-start mr-15">
        <CiShoppingCart className="text-3xl font-bold text-black mr-1.5 hover:text-red-500" />
        <button className="bg-red-500 text-white px-5 py-3  rounded-4xl hover:bg-(--my-color)">
          Sign Up
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
