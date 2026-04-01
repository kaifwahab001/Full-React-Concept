import React, { use, useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setindex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
    setUserData(response.data)
  }

  let printUserData = 'No Data Available'
  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-44 bg-white rounded-xl overflow-hidden'>
          <img src={elem.download_url} alt="img"
            className='h-full object-cover' />
        </div>
        <h2 className='font-bold text-xl'>{elem.author}</h2>
        </a>
      </div>
    })
  }

  useEffect(function(){
    getData()
  },[index])

  return (
    <div className='bg-black min-h-screen p-5 text-white'>
      {/* <button
        onClick={getData}
        className='bg-green-600 px-5 py-2 text-white rounded active:scale-95'>
        get data
      </button> */}
      <div className='flex flex-wrap gap-5'>
        {printUserData}
      </div>
      <div className='p-5 flex justify-center items-center gap-5'>
        <button 
        onClick={()=>{
          if(index>1){
            setindex(index-1)
          }
        }}
        className='bg-amber-300 text-black font-bold px-5 py-3 rounded-xl active:scale-95 cursor-pointer'>Prev</button>
        <button 
        onClick={()=>{
          setindex(index+1)
        }}
        className='bg-amber-300 text-black font-bold px-5 py-3 rounded-xl active:scale-95 cursor-pointer'>Next</button>
      </div>
      <div className='fixed top-1 left-1 text-2xl'>{index}</div>
    </div>
  )
}

export default App