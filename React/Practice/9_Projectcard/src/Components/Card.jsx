import React from 'react'
import { Bookmark } from 'lucide-react';

const Card = () => {
  return (
    <div>
      <div className='card'>
            <div className='top'>
              <img src="src\assets\Figma logo.png" alt="logo"/>
                <button> 
                  Save <Bookmark size={12} />
                </button>
            </div>
      
            <div className='center'>
              <div> 
                <h2>Figma <span>5 days ago</span></h2>
                <h3>UX Designer</h3>
              </div>
              <div>
                <h4>Full-Time</h4>
                <h4>In office</h4>
              </div>   
            </div>
      
            <div className='bottom'>
            <div className='left'>
              <div>
                <h3>$100/hr</h3>
                <p>California, USA</p>
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

export default Card
