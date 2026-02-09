import React from 'react'
import { useState } from 'react'

const App = () => {
    // 1️⃣ State to store the text
  const[text, setText] = useState("Hello World!");

    // 2️⃣ Function to change text
  const changeText = () => {
        setText("Text Changed!");
  }  

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={changeText}>
        Click Me
      </button>
    </div>
  )
}

export default App