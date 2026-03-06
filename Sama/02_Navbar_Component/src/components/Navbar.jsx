import React from 'react'

const navbar = () => {
  return (
    <div>
      <nav style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:"30px", background:"black",  color:"white", padding:"10px"}}>
        <h2>MyWebsite</h2>

        <ul style={{display:"flex", gap:"15px", listStyle:"none"}}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default navbar
