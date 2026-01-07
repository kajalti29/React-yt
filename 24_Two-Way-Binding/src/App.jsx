
// Two-Way Binding ka matlab hota hai:
// 👉 Data aur UI dono ek-dusre se connected hote hain
// 👉 Ek change ho → dusra automatic update ho jaye

// Input me change = state update
// State change = input update

import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState('')

  return (
    <div>
      <input
        type="text"
        value={name}                 // 🔁 State → Input
        onChange={(e) => setName(e.target.value)}  // 🔁 Input → State
      />

      <h2>{name}</h2>
    </div>
  )
}

export default App
