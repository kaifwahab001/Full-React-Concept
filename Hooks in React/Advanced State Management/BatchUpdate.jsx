import React, { useState } from 'react'

const BatchUpdate = () => {

    const [count, setcount] = useState(10)
    function handleBatchUpdate(){
        setcount(prev=>prev +1)
        setcount(prev=>prev +1)
        setcount(prev=>prev +1)
    }

    //  with object
    const [arr, setarr] = useState({name:'kaif',age:21})
    function arrbatch(){
        //  ### This method can remove another if you update only one from them
        // setarr({name:'shaik'})
        // setarr({age:22})


        //  this is batch update for single update 
        setarr(prev=>({...prev,name:'sharik'})) 
        setarr(prev=>({...prev,age:22}))
    }
  return (
    <div>
        <h1>{arr.name}, {arr.age}</h1>
        <button onClick={arrbatch}>Change</button>
    </div>
  )
}

export default BatchUpdate