import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4'>
      <h1>Count App</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  )
}

export default App