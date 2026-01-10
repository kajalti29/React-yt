
// 👉 API मतलब server से data मंगाना या भेजना

import React from 'react'

const App = () => {
  
  function getData(){
     const response =  fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response);
    
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App