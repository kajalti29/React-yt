import React from 'react'

const Card = ({ name, role, image, desc }) => {
  return (
    <div className="card">
      <img
        src={image}
        alt={name}
      />
      <h1>{name}</h1>
      <h2>{role}</h2>
      <p>{desc}</p>
      <button>Click Me</button>
    </div>
  )
}

export default Card
