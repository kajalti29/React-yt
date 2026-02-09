// 👉 Show current year using JSX expression.

// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <h1>Current Year: {new Date().getFullYear()} </h1>
//     </div>
//   )
// }

// export default App

import React from 'react'

const App = () => {

    const isLoggedIn = true;

  return (
    <div>
      <h1>{isLoggedIn ? "Welcome User" : "Please Login"}</h1>
    </div>
  )
}

export default App