import React from 'react'

const App = () => {

  const showMessage = (name) => {
    alert(`Hello, ${name}!`)
  }
  return (
    <div>
        <button onClick={() => showMessage("kajal")}>
          Say Hello
        </button>
    </div>
  );
};

export default App

// We use an arrow function to pass parameters.