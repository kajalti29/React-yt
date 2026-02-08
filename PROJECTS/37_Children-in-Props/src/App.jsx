import React from 'react'
import Navbar from './Components/Navbar'

const App = () => {
  const [theme, setTheme] = useState('light');  
  return (
    <div>
    <Navbar theme={theme}/>

    </div>
  )
}

export default App 