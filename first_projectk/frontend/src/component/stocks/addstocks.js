import React, { useState } from "react";
import axios from "axios";
import { API_END_POINT } from "../../utils/constant";

const Addstocks = () => {
  const [cat,setcat]=useState();
  return (
    <div className="flex w-full flex-col gap-5">
      <form className="flex w-full h-full flex-col gap-10 justify-between border bg-slate-300 rounded-md p-5 text-center">
        <h1 className=" text-[20px] font-semibold">Add New product</h1>
        <select
          type="text"
          className=" outline-none text-center border"
          placeholder="category"
        >
          <option selected className="text-gray-700" >
            choose category
          </option>
          <option>adharcard</option>
          <option>pancard</option>
          <option>himanshucard</option>
        </select>
        <input
          type="text"
          className=" text-center border"
          placeholder="name of product"
        />
        <input
          type="number"
          className=" text-center border"
          placeholder="cost"
        />
        <input
          type="number"
          className=" text-center border"
          placeholder="quantity"
        />
        <button className="border rounded-md bg-red-500">Add</button>
      </form>
      <form onSubmit={ async ()=>{
          try {
            const response= await axios.post(`${API_END_POINT}/stocks/addcat`,{
              cat
            })
            
            
          } catch (error) {
            console.log(error)
          }
          
        } } className="flex w-full h-full flex-col gap-10 justify-between border bg-slate-300 rounded-md p-5 text-center">
        <h1 className=" text-[20px] font-semibold">Add New product</h1>
        <input
          type="text"
          onChange={(e)=>{
            setcat(e.target.value)
          }}
          className=" outline-none text-center border"
          placeholder="New category"
        />
        <button className="border rounded-md bg-red-500">Add Category</button>
      </form>
    </div>
  );
};

export default Addstocks;
