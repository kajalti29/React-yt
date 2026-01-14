import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'


const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />

      <Footer />
    </div>
  )
}

export default App
