import React from 'react'
import { useNavigate } from 'react-router-dom'

const UseNavigate = () => {
    let navigate = useNavigate()

    const goto=()=>{
        navigate('/contact')
        navigate(-1) // it is used for back  
    }
  return (
    <div className='p-5'>
        <button 
        onClick={goto}
        className='bg-red-400 p-5 text-xl font-bold rounded-2xl'>Go to home</button>
    </div>
  )
}

export default UseNavigate