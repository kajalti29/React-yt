import React from 'react'

const App = () => {

  function inputChanging(){
    console.log('User is typing')
  }

  return (
    <div>
      {/* inputChanging() call karne pr apne aap call jo jata hai user is typing */}
      <input onChange={inputChanging()} type="text" placeholder="Enter name"/>
      
    </div>
  )
}

export default App
