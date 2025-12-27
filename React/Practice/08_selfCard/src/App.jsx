import React from 'react'
import Card from './Components/Card.jsx'


const App = () => {
  return (
    <div className='parent'>
      <Card user='Bhagavad Gita' img='src\assets\srimadbhagavadgita.jpg' />
      <Card user='Ramayana' img='src\assets\maharishi-valmiki-jayanti.webp'/>
      <Card user='Mahabharat' img='src\assets\images.jpg'/>
    </div>
  )
}
export default App
