import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Register.js";
import Browse from "./Browse.js";
import Home from "./home.js";
import Stocks from "./stocks/stocks.js";
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
      element: <Home />,
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
