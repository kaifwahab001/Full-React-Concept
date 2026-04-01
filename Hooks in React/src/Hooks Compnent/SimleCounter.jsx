import React, { useState } from 'react'

const SimleCounter = () => {
    const [counter, setcounter] = useState(0)

    function increment(){
        setcounter(counter+1)
    }

    function decrement(){
        if(counter > 0){
            setcounter(counter-1)
        }
    }

  return (
    <div style={{padding:'50px'}}>
        <div style={{height:'200px', width:'200px', background:'gray', borderRadius:'5%', display:'flex',justifyContent:'center', alignItems:'center', fontSize:'50px', fontWeight:'bold'}}>{counter}</div>
        <div style={{display:'flex',gap:'10px', marginTop:'10px'}}>
            <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
        </div>
    </div>
  )
}

export default SimleCounter