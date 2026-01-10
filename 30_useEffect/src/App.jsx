import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react' //useEffect React Hook hai, iska use side effects ke liye hota hai
//  jaise:-API call, console.log, event listener, timer(setTimeout/setInterval)

const App = () => {   // ye ek fun compenent hai.

  const [num, setNum] = useState(0)

  useEffect(function(){
    console.log('use effect is running...');
  })

  return (
    <div>
       <h1>{num}</h1>
      <button onClick={() => {
        setNum(num+1)
      }}>Clcik</button>
    </div>
  )
}

export default App