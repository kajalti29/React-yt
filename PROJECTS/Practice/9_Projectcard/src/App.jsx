import React from 'react'
import Card from './Components/Card';

const App = () => {

  const arr = [10, 20, 30];


  return (
  <div className='parent'>
    {arr.map(function(elem){
      return <h1>{elem*2}</h1>  
      })}
  </div>
  )
}
export default App
