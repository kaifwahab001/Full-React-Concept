import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Contact fom

const Advance_Routing_App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<About/>}/>
        <Route path='/' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default Advance_Routing_App