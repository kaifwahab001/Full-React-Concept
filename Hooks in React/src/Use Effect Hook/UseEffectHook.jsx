import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const UseEffectHook = () => {

    const [num, setNum] = useState(10)
    const [num2, setNum2] = useState(100)


    useEffect(() => {
        console.log('useEffect is running');
    }, [num]) // Thi is pass the dependecy like want to call the useeffect while change the state of array which we pass 




    return (
        <div>
            <h1>{num}</h1>
            <h1>{num2}</h1>
            <button onClick={() => {
                setNum(num + 1)
            }}>for num 1</button>
            <button
                onClick={() => {
                    setNum2(num2 + 10)
                }}
            >for num 2</button>
        </div>
    )
}

export default UseEffectHook