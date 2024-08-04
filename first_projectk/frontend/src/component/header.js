import React from 'react'
import { TiHome } from "react-icons/ti";
import { VscGraphLine } from "react-icons/vsc";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiStockLine } from "react-icons/ri";
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux';
import { setHome,setProfit,setStock } from '../redux/navigateSlice';

const Header = () => {
  const dispatch= useDispatch()
  const navigator = useSelector(store=>store.navigator)
  const user = useSelector(store=>store.user.user)

  const HomeHandler=()=>{
    dispatch(setHome(true))
    dispatch(setProfit(false))
    dispatch(setStock(false))
  }
  const StockHandler=()=>{
    dispatch(setStock(true))
    dispatch(setProfit(false))
    dispatch(setHome(false))
  }
  const ProfitHandler=()=>{
    dispatch(setProfit(true))
    dispatch(setHome(false))
    dispatch(setStock(false))
  }


=======
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate=useNavigate();
>>>>>>> b6334c9202fdb78f3af4976f792a3fe471d82c9a
  return (
    <div className='  z-10 w-[100%] flex p-4 justify-between text-semibold' >
        <div className='text-3xl flex gap-2 font-bold ml-4'>
            <div><RiStockLine size={30} />
            </div><h1>Stock Maintainer</h1>
        </div>
<<<<<<< HEAD
        <div className='flex gap-3 mx-3 '>
            {user&& !navigator.isHome && <button onClick={HomeHandler}  className='p-2 flex gap-1  hover:bg-red-600 rounded-md text-white  bg-red-500'>
            <div >
            <TiHome size={25} /> </div> 
            Home
            </button>}
            {user && !navigator.isStock && <button onClick={StockHandler}  className='p-2 flex gap-2  rounded-md text-white  bg-red-500'>
=======
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
>>>>>>> b6334c9202fdb78f3af4976f792a3fe471d82c9a
            <div >
            <VscGraphLine size={25} />
             </div>
             
                Stock
<<<<<<< HEAD
            </button>}
            {user && !navigator.isProfit && <button onClick={ProfitHandler}  className='p-2 flex gap-1  rounded-md text-white  bg-red-500'>
=======
             
             
            </button>
            <button className='p-2 hover:bg-red-600 flex gap-1  rounded-md text-white  bg-red-500'>
>>>>>>> b6334c9202fdb78f3af4976f792a3fe471d82c9a
                <div>
                    <GiTakeMyMoney size={25} />
                </div>
                Profit
<<<<<<< HEAD
            </button>}
           {user && <button className='px-4 rounded-[100%] text-white  bg-red-500'>
                {user.username[0].toUpperCase()}
            </button>}
=======
            </button>
            <button className='px-4 hover:bg-red-600 rounded-[100%] text-white  bg-red-500'>
                U
            </button>
>>>>>>> b6334c9202fdb78f3af4976f792a3fe471d82c9a
        </div>

    </div>
  )
}

export default Header