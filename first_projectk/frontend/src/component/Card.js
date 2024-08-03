import React from 'react'

const Card = () => {
  return (
    <div className=' h-12 flex shadow-md m-3 justify-between items-center gap-2'>
        <div>
           <h1>sr.no</h1>
        </div>
        <div className='mr-52'>
        <h1>sony max sony pal</h1>
        </div>
        <div>
            <input className=' ml-52 outline-none' type='number' placeholder='price'/>
        
        </div>
        <div>
            <input className='outline-none w-20' type='number' placeholder='quantity'/>
        
        </div>
        <button className='px-4  py-1 flex gap-1 font-semibold  rounded-md text-white  bg-red-500'>
            Sell
        </button>
    </div>
  )
}

export default Card