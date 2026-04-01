import React from 'react'
import './App.css'
import Card from './Components/Card'
import { jobs } from '../src/Components/Data.js'  
import Header from './Components/Header.jsx'

const App = ()   => {

  return (
    <div className='parent'>
      {/* {jobs.map(function (job,idx) {
        return <div key={idx}>
          <Card job={job}/>
        </div>
      }
      )} */}
      <Header/>
    </div>
  )
}

export default App