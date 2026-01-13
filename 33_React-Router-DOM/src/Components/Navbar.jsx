import React from 'react'
import { Link } from 'react-router-dom'   // ✅ ye line missing thi

const Navbar = () => {
  return (
    <div className="nav">
      <h3>Sheryians</h3>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
