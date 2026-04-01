import React, { useState } from 'react'

const UseState = () => {
    const [name, setName] = useState()
    const [age, setAge] = useState()

    //  what if you have array
    const [User, setUser] = useState([10,20,30])
    
return (
    // <div style={{display:'', gap:'20px',padding:'20px'}}> 
    <div>
            {/* <input type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder='Enter your age' onChange={(e) => setAge(e.target.value)} />
            <button>Upload</button>
            {name && <div style={{display:'block'}}>Name : {name} , Age : {age}</div>} */}

            {/* array use */}
            {User.map(function(elem, idx){
                return <h1 key={`${idx}-${elem}`} style={{display:"block", marginBottom:"10px"}}>{idx+1} element : {elem}</h1>
            })}
    </div>
)
}

export default UseState