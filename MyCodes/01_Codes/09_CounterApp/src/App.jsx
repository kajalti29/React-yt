import React from 'react'
import { useState } from 'react'

const App = () => {
      // 1️⃣ State to store count
    const[count, setCount] = useState(0)

      // 2️⃣ Functions to increment & decrement
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App


