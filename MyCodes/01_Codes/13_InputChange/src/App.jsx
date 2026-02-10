import React from 'react'
import { useState } from 'react'

const App = () => {

  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value); //Update state
  };
  
  return (
    <div>
      <input 
        type="text"
        name={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <p>Hello, {name}</p>
    </div>
  )
}

export default App