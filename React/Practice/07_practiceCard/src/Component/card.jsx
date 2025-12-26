import React from 'react'

const card = (props) => {

  console.log(props);

  return (
    <div>
      <div className="card">
        <img src="src\assets\images.jpg" alt="profile pic" /> 
        <h1>{props.user}, {props.age}</h1> 
        <p>Lorem ipsum dolor sit amet consectur adipisicing elit.</p>
        <button>View profile</button>
      </div>
    </div>
  )
}

export default card
