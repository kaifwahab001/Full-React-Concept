import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='h-[90vh] py-10 px-18 flex justify-between gap-10'>
        <LeftContent/>
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content