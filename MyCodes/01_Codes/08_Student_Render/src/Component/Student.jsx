import React from 'react'

const Student = (props) => {
  return (
    <div>
        <h3>name: {props.name}</h3>
        <p>marks:{props.marks}</p>
    </div>
  )
}

export default Student