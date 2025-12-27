import React from 'react'

const Card = (props) => {

    console.log(props);
    
  return (
    <div>
      <div className='card'>
      <img src="src\assets\srimadbhagavadgita.jpg" alt="book" />
      <h1>{props.user}</h1>
      <p>The Gita, most famously the Bhagavad Gita is a revered Hindu scripture in Sanskrit, meaning "Song of God" or "Divine Song,"</p>
      <button>Read More</button>
      </div>
    </div>
  )
}

export default Card
