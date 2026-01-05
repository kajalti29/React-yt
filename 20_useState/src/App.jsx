import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(10)
  const [username, setUsername] = useState('Kajalti')
  const[userage, setUserage] = useState(29)

  function changeNum(){
    setNum(20)
    setUsername('Ayush')
    setUserage(26)
  }

  return (
    <div>
      <h1>
        Value of num is {num} <br/>
        Value of user is {username}<br/>
        value of user age {userage}
      </h1>

      <button onClick={changeNum}>Click</button>
    </div>
  )
}

export default App
