import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { MdRestaurantMenu } from "react-icons/md";
import { Provider } from "react-redux";
import appStore from "./constants/appStore";
import Auth from "./pages/Auth";
import CartPage from "./pages/CartPage";
const App = () => {
  const location = useLocation();

  // hide navbar on login page
  // const hideNavbar = location.pathname === "/login" || ;
  const hideNavbar = ["/login", "/signup"].includes(location.pathname);

  return (
    <Provider store={appStore}>
      <div className="mx-4 md:mx-20 lg:mx-40 xl:mx-55 pb-20 md:pb-0">
        {!hideNavbar && (
          <>
            <Navbar />
            <MobileNavbar />
          </>
        )}
        <Outlet />
      </div>
    </Provider>
  );
};
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/restaurant",
        element: <Restaurant />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },

      {
        path: "/login",
        element: <Auth mode="login" />,
      },
      {
        path: "/signup",
        element: <Auth mode={"signup"} />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
