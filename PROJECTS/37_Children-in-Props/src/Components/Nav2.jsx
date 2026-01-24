import React from 'react'

const Nav2 = (Props) => {
  return (
    <div className='nav2'>
    <h4>Home</h4>
    <h4>About</h4>
    <h4>Courses</h4>
    <h4>Product</h4>   
    <h4>{Props.theme}</h4> 
    </div>
  )
}

export default Nav2