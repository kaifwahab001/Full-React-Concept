import React from 'react'
import { useState } from 'react'

const TwoWayBinding = () => {
    const [title, setTitle] = useState('')
    const formHandle=(e)=>{
        e.preventDefault()
        console.log("Form submitted", title);
        setTitle('')
        
    }

  return (
    <div>
        <form onSubmit={formHandle}>
            <input type="text" placeholder='Enter your name' value={title}
            onChange={(e)=>{
                setTitle(e.target.value)
            }}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default TwoWayBinding