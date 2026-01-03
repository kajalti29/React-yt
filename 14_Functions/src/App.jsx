import React from 'react'

const App = () => {


  // {button Click fun}
  function btnClicked(){
    console.log('button is clicked');
  }

  // {Mouse Enter fun}
  function mouseEnter(){
    console.log('Mouse Entered');
  }


  return (
    // {btnClicked():- btn ke sath ()call pr code apne aap chal jayege btn pe click karne ki bhi need nhi rhegi}
    <div>
      <button onMouseEnter={mouseEnter} onClick={btnClicked}>Click here
      </button>
      <br/>
      <button onClick={btnClicked}>Explore this</button>


      {/* {ham function bna kr bhi events apply kar sakte hai like uper fun se hi event apply kiya hai or bina fun bna kr bhi :-Arrow fun ke through events apply kar sakte hai } */}
      <div>
        <h2 onClick = {() =>{
        console.log('Button Clicked');
        }}>Click here</h2>
      </div>
    </div>

  )
}

export default App