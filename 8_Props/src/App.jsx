import React from 'react';
import './App.css'; // ✅ ये तुम्हारा CSS file import करेगा

const App = () => {
  return (
    <div className='parent'> 
      <div className='card'>
        <img 
          src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=500&q=60' 
          alt='profile' 
        />
        <h1>Sarthak Sharma</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, vitae!</p>
        <button>View Profile</button>   
      </div>

      <div className='card'>
        <img 
          src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=500&q=60' 
          alt='profile' 
        />
        <h1>Sarthak Sharma</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, vitae!</p>
        <button>View Profile</button>   
      </div>

      <div className='card'>
        <img 
          src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=500&q=60' 
          alt='profile' 
        />
        <h1>Sarthak Sharma</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, vitae!</p>
        <button>View Profile</button>   
      </div>
    </div>
  );
}

export default App;
