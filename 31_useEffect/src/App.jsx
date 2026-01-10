import React, { useEffect, useState } from 'react'

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  useEffect(function(){
    console.log('use effect is running....');
  }, [a])   // sirf A change hone par chalega

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>

      <button onClick={() => setA(a + 1)}>
        Change A
      </button>

      <button onClick={() => setB(b - 1)}>
        Change B
      </button>
    </div>
  )
}

export default App
