// import React from 'react'

// const App = () => {

//   const pageScrolling = ()=>{
//     console.log('page scrolling....');

//   }

//   return (
//     //pageScrolling
//     <div onWheel ={pageScrolling}>
//       <div className='page1'></div>
//       <div className='page2'></div>
//       <div className='page3'></div>
//     </div>
//   )
// }

// export default App



import React from 'react'

const App = () => {

  // first logic
  const pageScrolling = (elem) =>{
    if(elem){
      console.log('Seedha Scrolling');
    }else{
      console.log("ulta Scrolling");
    }
  }


  return (
    <div onWheel={(elem) =>{
      pageScrolling(elem.deltaY)
    }}>
         <div className='page1'></div>
         <div className='page2'></div>
         <div className='page3'></div>

    </div>
  )
}

export default App