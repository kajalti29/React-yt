
import React from 'react'

function Card(props) {
  console.log(props);  // ← Ye console me output dega

  return (
    <div>
      {props.user} — {props.age}
    </div>
  )
}

export default Card;
