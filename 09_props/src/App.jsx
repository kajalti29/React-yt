import React from 'react';
import Card from './components/Card';

const App = () => {
  return (
    <div className='parent'> 
      
      <Card user='kajalti' age={18}/>
      <Card />
    </div>
  );
};

export default App;
