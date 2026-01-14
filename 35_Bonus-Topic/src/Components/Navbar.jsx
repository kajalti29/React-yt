import React from 'react'

const Navbar = (props) => {

  function changeTheme() {  
    props.setTheme('Dark');  
  }

  return (
    <div>
      <button onClick={handleTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar
