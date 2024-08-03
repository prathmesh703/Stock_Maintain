import React from 'react'

const Displaycard = () => {
  return (
    
         <div className=' w-full h-12 flex justify-between shadow-md  items-center  p-4 gap-5'>
        
        <div className=' flex text-[18px] font-semibold  gap-8 '>
           <h1>sr.no</h1>
        <h1>category</h1>
        <h1>name......</h1>
        </div>
        
        <div className='flex text-[18px] font-semibold gap-8'>
            <h1>quantity</h1>
        
          <h1>cost</h1>
        </div>
       
    </div>
    
  )
}

export default Displaycard