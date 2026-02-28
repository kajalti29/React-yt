import React from 'react'
import Card from './components/card.jsx'  

const App = () => {
  return (
    <div className='parent'>  
      {/* <div className="card">
        <img src="src\assets\Kajalti (2).png" alt="profile pic" /> 
        <h1>Kajalti Sirame</h1> 
        <p>Lorem ipsum dolor sit amet consectur adipisicing elit.</p>
        <button>View profile</button>
      </div> */}
      <Card />
      <Card />
      <Card />
      <Card />
    </div> 
  )
}

export default App
