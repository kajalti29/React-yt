
// 🎯 Practice 1: Simple Button Logic
// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [text, setText] = useState("Hello");

//   return (
//     <div>
//       <h1>{text}</h1>
//       <button onClick={() => setText("Welcome")}>Click Me</button>
//     </div>
//   )
// }

// export default App

// 🎯 Practice 2: Even or Odd Checker

import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0);

  return (
    <div>
      <h2>{num % 2 === 0 ? "Even" : "Odd"}</h2>

      <button onClick={() => setNum(num + 1)}>
        Increase
      </button>
    </div>
  )
}

export default App