import React from 'react'
import ProfileCard from "./ProfileCard";


const App = () => {
  return (
    <div className='parent'>
      <Card user='kajalti' age={18}/> 
      <Card user='rahul99' age={22}/>
    </div>
  );
}

export default App
