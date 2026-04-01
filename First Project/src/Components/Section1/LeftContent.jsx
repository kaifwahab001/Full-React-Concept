import React from 'react'
import 'remixicon/fonts/remixicon.css'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col w-1/3 justify-between text-7xl font-bold'>
      {/* Hero text */}
        <div className='p-4'>
            <h3 className='mb-7'>Prospective <br />Customer <br />Segmentation</h3>
            <p className='text-xl font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, praesentium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, accusamus! </p>
        </div>
        {/* Arrow */}
        <div className='text-8xl'>
            <i className="ri-arrow-right-up-line"></i>
        </div>
    </div>
  )
}

export default LeftContent