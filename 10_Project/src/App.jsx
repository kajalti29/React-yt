import React from 'react'
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className='parent'>
    <div className='Card'>

    <div className='top'>
    <img src="src\assets\download.png"alt=""/>
    <button>Save <Bookmark size={12} /></button>
    </div>

  <div className='center'>
  <h2>Apple <span>5 days age</span></h2>
  <h2>Graphic Designer</h2>
    <div>
      <h4>Full-TIme</h4>
      <h4>Flexible Schedule</h4>
    </div>   
  </div>

<div className='bottom'>
  <div className='left'>
    <div>
      <h3>$120/hr</h3>
      <p>Kerala,India</p>
    </div>
  </div>
  <div className='right'>
    <div>
      <button>Apply Now</button>
    </div>
    </div>
  </div>
  </div>
  </div>
  )
}
export default App
