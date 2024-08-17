import React from "react";
import Header from "./Header.js";
import { useSelector } from "react-redux";
import Profit from "./Profit.js";
import Stock from "./Stock.js";
import Home from "./Home.js";


const Browse =()=>{
    const navigator = useSelector(store=>store.navigator)

    return(
       
        <div>
           
            {navigator.isProfit && <Profit/>}
            {navigator.isStock && <Stock/>}
            {navigator.isHome && <Home/>}

        </div>
    )
}
export default Browse