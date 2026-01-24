import React from 'react'
import Nav2 from './Nav2'

const Navbar = (Props) => {
  return (
    <div className='nav'>
    <h2>Sheryians</h2>
    <Nav2 theme={Props.theme}/>

    </div>
  )
}

export default Navbar