import React, { useState } from 'react'

const CopyArray = () => {
    const [num, setnum] = useState([10,20,30])

    const change=()=>{
        console.log(num);
        setnum(num.push(90)) // it give the count after adding the data
        console.log(num);
    }

    const change2=()=>{
       const newnum = [...num]
        newnum.push(99)
        console.log(newnum);
        setnum(newnum) 
        console.log(` updated ${newnum}`);
    }

    const change3=()=>{
       num.push(99)
       console.log(num);
       setnum(num)
    }
    

  return (
    <div>
        <h1>{num}</h1>
        <button onClick={change3}>Change</button>
    </div>
  )
}

export default CopyArray