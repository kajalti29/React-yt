// 2️⃣ Ek Button component jisme click par parent function call ho

import Button from './Components/Button.jsx'


const App = () => {

  const parentFunc = () => {
    alert("Parent function called")
  }

  return (
    <div>
       <button onClick={parentFunc}>Click Me</button>
    </div>
  )
}

export default App