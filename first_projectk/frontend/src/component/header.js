import React from 'react'
import { TiHome } from "react-icons/ti";
import { VscGraphLine } from "react-icons/vsc";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiStockLine } from "react-icons/ri";
import {  useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate=useNavigate();
  return (
    <div className='  z-10 w-[100%] flex p-4 justify-between text-semibold' >
        <div className='text-3xl flex gap-2 font-bold ml-4'>
            <div><RiStockLine size={30} />
            </div><h1>Stock Maintainer</h1>
        </div>
        <div className=' flex gap-3 mx-3 '>
            <button onClick={()=>{
                navigate("/")
            }} className='p-2 flex gap-1  hover:bg-red-600 rounded-md text-white  bg-red-500'>
            <div >
            <TiHome size={25} /> </div> 
            
                Home
            
            </button>
            <button onClick={()=>{
                navigate("/stocks")
            }}  className='p-2 hover:bg-red-600 flex gap-2  rounded-md text-white  bg-red-500'>
            <div >
            <VscGraphLine size={25} />
             </div>
             
                Stock
             
             
            </button>
            <button className='p-2 hover:bg-red-600 flex gap-1  rounded-md text-white  bg-red-500'>
                <div>
                    <GiTakeMyMoney size={25} />
                </div>
                Profit
            </button>
            <button className='px-4 hover:bg-red-600 rounded-[100%] text-white  bg-red-500'>
                U
            </button>
        </div>

    </div>
  )
}

export default Header