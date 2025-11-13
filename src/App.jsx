import Navbar from "./components/Navbar";
import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { MdRestaurantMenu } from "react-icons/md";
const App = () => {
  return (
    <div className=" mx-55">
      <Navbar />
      <Outlet />
    </div>
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
