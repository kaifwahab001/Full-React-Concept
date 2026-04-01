import React from 'react'

const NotesCard = ({ title, desc ,deleteNote }) => {
    return (
        
            <div
                className='flex flex-col gap-3 bg-blue-200 p-5 w-50 rounded-xl text-black'>
                <h1 className='text-xl'>{title}</h1>
                <p
                    className='mb-4 h-19 overflow-hidden line-clamp-3'>
                    {desc}
                </p>
                <button
                onClick={deleteNote}
                    className='bg-red-500 rounded-full text-white py-1'>
                    Delete
                </button>
            </div>
    )
}

export default NotesCard