import React from 'react'

const App = () => {

  const [page, setpage] = React.useState("home");


  return (
    <div>
      <h1>SPA Concept</h1>
      <button onClick={() => setpage("home")}>Home</button>
      <button onClick={() => setpage("about")}>About</button>

      {page === "home" ? <h2>Home Page</h2> : <h2>About Page</h2>}
    </div>
  )
}

export default App