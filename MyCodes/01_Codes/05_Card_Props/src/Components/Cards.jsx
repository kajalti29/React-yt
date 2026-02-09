import React from 'react'

const Cards = ({ name, img }) => {
  return (
    <div className="Card">
      <img src={img} alt={name} />
      <h1>{name}</h1>
      <p>
        Tree is very helpful for people. <br />
        It gives air, water, and oxygen.
      </p>
      <button>View Profile</button>
    </div>
  )
}

export default Cards
