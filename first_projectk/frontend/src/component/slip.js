import React from 'react'

const Slip = () => {
  return (
    <div className='flex w-[30%] h-auto flex-col justify-between rounded-md shadow-md shadow-red-500 gap-4 border p-2 '>
        <div className='border'>
            items..........
        </div>
        
        <div className='border'> 
            <textarea placeholder='add the note if you want'>

            </textarea>
        </div>
        <div className='border'>
            <button>
                make checkout
            </button>
        </div>
    </div>
  )
}

export default Slip