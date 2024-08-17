import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Register.js";
import Browse from "./Browse.js";
import Stocks from "./stocks/stocks.js";
import Home from "./Home.js";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/stocks",
      element: <Stocks />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;
