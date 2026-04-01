import React from 'react'
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
    const userparam = useParams ()
    console.log(userparam);
    
  return (
    <div>CourseDetails {userparam.id}</div>
  )
}

export default CourseDetails