import React from 'react'
import Section1 from './Components/Section1/Section1'

import img1 from './assets/Second image.avif'
import img2 from './assets/Third image.avif'
import img3 from './assets/Four image.avif'

const App = () => {
  const users = [
    { img: img1, intro: '', tag: 'Satisfied' },
    { img: img2, intro: '', tag: 'Underserved' },
    { img: img3, intro: '', tag: 'Underbanked' },
  ]

  return (
    <div className="h-full">
      <Section1 users={users} />
    </div>
  )
}

export default App
