import React, { useState } from 'react'


// Set Funciton run asynchronously means side by side





const AdvanceState = () => {
    const [num, setnum] = useState(10)
    const btnClicked = () => {
        setnum(20)
        console.log(num);  // according to this first value change then print mean value is 20 but i got 10 due to asynchronous value
    }

    return (
        <div>
            <h1>{ num}</h1>
            <button onClick={btnClicked}>Change</button>
        </div>
    )
}

export default AdvanceState