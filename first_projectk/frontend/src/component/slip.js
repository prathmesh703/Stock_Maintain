import React from 'react'

const Slip = () => {
  return (
    <div className='flex bg-slate-300 w-[30%] h-auto flex-col justify-between rounded-md shadow-md  gap-4 border p-2 '>
        <div className='border bg-white rounded-md'>
            items..........
        </div>
        
        
        <div className='border rounded-md'>
        <div className='border'> 
            <textarea className='w-full  ' placeholder='add the note if you want....'>

            </textarea>
        </div>
            <button className=' border rounded-md bg-red-500 w-full'>
                make checkout
            </button>
        </div>
    </div>
  )
}

export default Slip