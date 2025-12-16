import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiHome, HiShoppingBag, HiUser } from "react-icons/hi";
import { MdRestaurantMenu } from "react-icons/md";
import { useSelector } from "react-redux";

const MobileNavbar = () => {
    const location = useLocation();
    const cartItems = useSelector((store) => store.cart.items);
    const [activeTab, setActiveTab] = useState("home");

    const menus = [
        { name: "Home", icon: HiHome, path: "/", id: "home" },
        { name: "Food", icon: MdRestaurantMenu, path: "/restaurant", id: "restaurant" },
        { name: "Cart", icon: HiShoppingBag, path: "/cart", id: "cart" },
        { name: "Profile", icon: HiUser, path: "/login", id: "profile" },
    ];

    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath === "/") setActiveTab("home");
        else if (currentPath.startsWith("/restaurant")) setActiveTab("restaurant");
        else if (currentPath === "/cart") setActiveTab("cart");
        else if (currentPath === "/login" || currentPath === "/signup") setActiveTab("profile");
        else setActiveTab("");
    }, [location]);

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[92%] max-w-md bg-white border border-gray-100 px-2 py-2 md:hidden z-50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <ul className="flex justify-around items-end relative h-16">
                {menus.map((menu, i) => {
                    const isActive = activeTab === menu.id;
                    return (
                        <li key={i} className="w-16 h-full flex justify-center">
                            <Link
                                to={menu.path}
                                className="relative flex flex-col items-center justify-end w-full h-full"
                                onClick={() => setActiveTab(menu.id)}
                            >
                                <div
                                    className={`relative flex items-center justify-center transition-all duration-500 ease-in-out z-10
                    ${isActive
                                            ? "-mt-12 bg-(--primary) text-white h-16 w-16 rounded-full border-[6px] border-[#e6e0e0] shadow-lg mb-1"
                                            : "text-gray-400 mb-7"
                                        }
                  `}
                                >
                                    <menu.icon size={isActive ? 30 : 26} />

                                    {/* Cart Badge */}
                                    {menu.id === "cart" && cartItems.length > 0 && !isActive && (
                                        <span className="absolute -top-1 -right-1 bg-(--primary) text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                                            {cartItems.reduce((total, item) => total + item.quantity, 0)}
                                        </span>
                                    )}
                                </div>

                                <span
                                    className={`text-[10px] font-medium transition-all duration-300 absolute bottom-1.5
                    ${isActive ? "opacity-100 text-(--primary) font-bold translate-y-0" : "opacity-100 text-gray-500 translate-y-0"}
                  `}
                                >
                                    {menu.name}
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>

            {/* SVG Curve Effect for active tab background (optional visually, but border on circle handles most of it) */}
            {/* We are simulating the curve with the border color of the circle matching the body bg. 
          Since the body bg is #e6e0e0, we set the border color of the active circle to that. 
          Ideally, the navbar background is white, so the border should match the navbar background if we want a "cutout" look, 
          OR match the page background above if we want it to float. 
          Looking at the image, it looks like a white blob on a purple background.
          Here our navbar is white, page is grey. Let's make the border transparent or match the navbar if we want the "cutout" valid.
       */}
        </div>
    );
};

export default MobileNavbar;
