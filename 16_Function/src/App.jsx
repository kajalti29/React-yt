// import React from 'react'

// const App = () => {

//   function inputChanging(val){
//     console.log(val);
//   }


//   return (
//     <div>
//     <input onChange={function(elem){
//       inputChanging(elem.target.value)
//     }} type="text" placeholder='Enter Name'>
//     </input>
//     </div>
//   )
// }

// export default App











// Mouse Events
import React from 'react'

const App = () => {
  return (
    <div>
      <div onMouseMove={(elem)=> {
        console.log(elem)


      }} className='box'></div>
    </div>
  )
}

export default App