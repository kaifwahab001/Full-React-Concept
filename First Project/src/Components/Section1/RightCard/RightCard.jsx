import React from 'react'
import 'remixicon/fonts/remixicon.css'

const RightCard = (props) => {
  return (
    <div className='h-full w-80  rounded-4xl shrink-0 overflow-hidden relative '>
        <img className='h-full w-full object-cover' src={props.user.img} alt="image" />

        <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between p-10'>
            <h2 className='bg-white text-2xl rounded-full h-12 w-12 flex justify-center items-center font-bold'>{props.user.id+1}</h2>
            <div className='text-white'>
                <p className='text-lg mb-10'>{props.user.intro}</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 font-medium px-8 py-3 rounded-full'>{props.user.tag}</button>
                    <button className='bg-blue-600 font-medium px-4 py-3 rounded-full'><i className="ri-arrow-right-line "></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCard