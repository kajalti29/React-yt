import React from 'react'
import RightCard from './RightCard'


const RightContent = (props) => {
  console.log(props.users);

  return (
    <div className="h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3 scrollbar-hide ">
       {props.users.map(function(elem, index){

        return <RightCard key={index} img={elem.img} tag={elem.tag}/>
       })}
    </div>
  )
}

export default RightContent
