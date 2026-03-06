import React from 'react'
import { useState } from 'react'


const App = () => {

  const [page, setPage] = React.useState("Home");
  return (

     <div>

      <button onClick={() => setPage("Home")}>Home</button>
      <button onClick={() => setPage("About")}>About</button>

      {page === "Home" ? <h1>Home</h1> : <h1>About</h1>}

    </div>
  )
}
 
export default App 