import React from 'react'
import RightCard from './RightCard/RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full p-6 w-full rounded-4xl flex gap-10 overflow-x-auto'>
      {props.users.map(function(elem, index){
        return <RightCard key={elem.id ?? elem.img ?? `${elem.intro}-${index}`} user={elem}/>
      })}
    </div>
  )
}

export default RightContent