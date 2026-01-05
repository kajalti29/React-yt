import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('Hello');
  }

  return (
    <div>
      <button onClick={btnClicked}>Clicked</button>
    </div>
  )
}

export default App