import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_END_POINT } from "../../utils/constant";

const Addstocks = () => {
  const [cate,setcat]=useState([]);
  const [newcate,setnewcate]=useState("");

  useEffect(()=>{
    const fetchcategories=async ()=>{
      try {
        const response= await axios.get(`${API_END_POINT}/stocks/categories`,{withCredentials:true});
      
         setcat(response.data.category);
        console.log("hiwhwllo")
        
      } catch (error) {
        console.log(error)
      }
    }
    fetchcategories();
  },[])
const options=cate.map((item)=>{
  return(
    item.category
  )
 
  })

  const handler= async (e)=>{
    e.preventDefault();
   
    try {
      console.log("before handler post");
      const response= await axios.post(`${API_END_POINT}/stocks/addcat`,{
        category:newcate
      },{withCredentials:true})
      
      
      setcat([...cate ,  response.data.cates.category])
      
      setnewcate("");
      
      
    } catch (error) {
      console.log(error)
    }
    
  }
  
  let optionItems = options.map((item) =>
    <option >{item}</option>
);
  return (
    <div className="flex w-full flex-col gap-5">
      <form className="flex w-full h-full flex-col gap-10 justify-between border bg-slate-300 rounded-md p-5 text-center">
        <h1 className=" text-[20px] font-semibold">Add New product</h1>
        <select type="text"
          className=" outline-none text-center border"
          placeholder="category"
  >
    <option selected>choose category</option>
          
          {optionItems}
          
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
      <form onSubmit={ handler } className="flex w-full h-full flex-col gap-10 justify-between border bg-slate-300 rounded-md p-5 text-center">
        <h1 className=" text-[20px] font-semibold">Add New product</h1>
        <input
          type="text"
          value={newcate}
          onChange={(e)=>{
            

            setnewcate(e.target.value)
            
          }}
          className=" outline-none text-center border"
          placeholder="New category"
        />
        <button  type="submit" className="border rounded-md bg-red-500">Add Category</button>
      </form>
    </div>
  );
};

export default Addstocks;
