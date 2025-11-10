import React from 'react';

const Card = () => {
  return (
    <div className='card'>
      <img 
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=500&q=60" 
        alt="profile" 
      />
      <h1>Rohan Verma</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, rerum!</p>
      <button>View Profile</button>
    </div>
  );
};

export default Card;
