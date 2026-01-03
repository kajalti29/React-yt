import React from 'react'
import Right from './Right'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl'> 
      
      <img
        className='h-full w-full object-cover'
        src={props.img}
        alt=""
      /> 
      <Right  tag={props.tag}/>

    </div>
  )
}

export default RightCard
