import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import NotFound from './Pages/NotFound'
import Product from './Pages/Product'
import Men from './Pages/Men'
import Women from './Pages/Women'
import CourseDetails from './Pages/CourseDetails'
import Course from './Pages/Course'
import UseNavigate from './Component/UseNavigate'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        {/* <Route path='/product' element={<Product/>}></Route> */}
        <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />}></Route>
          <Route path='women' element={<Women />}></Route>
        </Route>


        {/* <Route path='/product/men' element={<Men />}></Route>
        <Route path='/product/women' element={<Women />}></Route> */}



        {/* Dynamic Routing */}
        <Route path='/course' element={<Course/>}></Route>
        <Route path='/course/:id' element={<CourseDetails/>}></Route>
        <Route path='/usenavigate' element={<UseNavigate/>}></Route>



        <Route path='*' element={<NotFound />} ></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App