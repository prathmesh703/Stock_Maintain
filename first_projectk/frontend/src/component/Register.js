import React, { useState } from "react";
import Header from "./header.js";
import { RiStockLine } from "react-icons/ri";

const Register =()=>{
    const [isLogin , setIsLogin]=useState(false)
    const LoginHandler=()=>{
        setIsLogin(!isLogin)
    }
    return(<>
    <div className=" flex gap-2 absolute z-10 text-3xl font-bold p-4 text-white">
    
    <RiStockLine size={40} />
    Stock Maintainer
    
        
    </div>
       
        <div className="w-full">
            
            <div className=" absolute w-full h-screen overflow-hidden">
                <img className="w-full h-[vh]" src="https://www.unleashedsoftware.com/wp-content/uploads/2018/04/inventory-warehouse-boxes.jpg" alt="stock" />
            </div>
            <form className=" absolute  bg-grey-800 w-3/12 left-0 right-0   mx-auto ">
                <div className="bg-gray-600  opacity-85  flex flex-col gap-4 rounded-md my-36 px-4 py-6  items-center ">
               
                    <h1 className="text-white text-3xl font-bold">SignUp</h1>
                    <input  className="outline-none rounded-sm bg-gray-800 w-10/12 my-2  p-2 text-sm text-white" placeholder="UserName"></input>
                    {!isLogin && <input placeholder="Email" className="outline-none w-10/12 rounded-sm bg-gray-800 my-2 p-2 text-sm text-white"></input>}
                    <input placeholder="Password" className="outline-none w-10/12 rounded-sm bg-gray-800 my-1 p-2 text-sm text-white"></input>
                    <p className="text-sm text-white">{isLogin?"Create New Account!":"Already an User!"} <span onClick={LoginHandler} className="text-sm cursor-pointer text-blue-400 underline">{isLogin?"SigUp":"Login"}</span></p>
                    <button className="p-2 py-1 flex gap-1   hover:bg-red-600 rounded-md text-white  bg-red-500">{isLogin?"Login":"SignUp"}</button>
                </div>
            </form>
        </div>
        </>
    )
}
export default Register