import React from "react";
import Header from "../header";
import Addstocks from "./addstocks";
import Displaycard from "./Displaycard";

const Stocks = () => {
  return (
    <div className="m-4">
      <Header />
      <div className="flex  p-4 mx-10 justify-between">
        <div className=" p-4 w-[40%]">
          <Addstocks />
        </div>
        <div className="  p-4 w-full flex  gap-3 flex-col ">
          <Displaycard/>
          <Displaycard/>
          <Displaycard/>
          <Displaycard/>
          <Displaycard/>
        </div>
      </div>
    </div>
  );
};

export default Stocks;
