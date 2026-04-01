import React from 'react'
import axios from 'axios'
import { useState } from 'react'



export const App = () => {
  const [data, setdata] = useState([])

  const getData = async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')

    setdata(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Click</button>
      {data.map((elem, idx)=>{
        return <div key={idx}>Hello {elem.name}</div>
      })}
    </div>
  )
}
export default App
