import React from 'react'

const Student = (props) => {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>Marks: {props.marks}</p>
    </div>
  )
}

export default Student
