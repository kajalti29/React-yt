import React from 'react'
import Card from './Component/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Aman' age={18}/> 
      <Card user='John' age={25}/>
    </div>
  )
}

export default App
