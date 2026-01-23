// React aur useState hook import kar rahe hain
import React, { useState } from 'react'

// App naam ka functional component
const App = () => {

  const [weight, setWeight] = useState('')    // Weight store karne ke liye state

  const [height, setHeight] = useState('')    // Height store karne ke liye state

  const [bm, setBm] = useState(null)         //BMI result store karne ke liye state

  const [message, setMessage] = useState('') // BMI category message ke liye state

  const calculateBMI = (e) => {             // BMI calculate karne ka function
    e.preventDefault()                      // page reload hone se roke

    if (weight === '' || height === '') {    // Agar weight ya height empty ho
      alert('Please enter weight and height')
      return // yahin function stop
    }

    const heightInMeter = height / 100        // Height ko cm se meter me convert kar rahe hain

    const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(2)     // BMI formula apply kar rahe hain

    setBm(bmi)                // BMI value ko state me store kar rahe hain

    
    // BMI ke according message set kar rahe hain
    if (bmi < 18.5) {
      setMessage('You are Underweight')
    } else if (bmi >= 18.5 && bmi < 25) {
      setMessage('You are Normal')
    } else {
      setMessage('You are Overweight')
    }
  }

  //Reset / Clear karne ka function
  const reload = () => {
    setWeight('')   // weight clear
    setHeight('')   // height clear
    setBm(null)     // BMI clear
    setMessage('')  // message clear
  }

  //JSX (UI part)
  return (
    <div className='App'>
      <div className='container'>
        <h2>BMI Calculator</h2>

        <form onSubmit={calculateBMI}>          {/* Form start */}

          {/* Weight input */}
          <div>
            <label>Weight (kg)</label>
            <input
              type='number'                // sirf number allow
              placeholder='Enter weight'
              value={weight}               // state se value
              onChange={(e) => setWeight(e.target.value)} // state update
            />
          </div>

          {/* Height input */}
          <div>
            <label>Height (cm)</label>
            <input
              type='number'
              placeholder='Enter height'
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div>
            <button className='btn' type='submit'>
              Submit
            </button>

            <button
              className='btn'
              type='button'     // submit nahi karega
              onClick={reload}  // reset function call
            >
              Reset
            </button>
          </div>

          {/* BMI result sirf tab dikhe jab bm ho */}
          {bm && (
            <div className='center'>
              <h3>Your BMI is {bm}</h3>
              <p>{message}</p>
            </div>
          )}

        </form>
        {/* Form end */}

      </div>
    </div>
  )
}

export default App
