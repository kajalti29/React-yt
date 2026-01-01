import React from 'react'
import { ArrowRight } from 'lucide-react'


const RightCard = () => {
  return (
    <div className="h-full w-80 p-8 overflow-hidden relative rounded-4xl">
      
       <img
        className="h-full w-full object-cover rounded-4xl"
        src="src/assets/image.webp"
        alt=""
       />

        <div className="absolute inset-0">
            <h2>1</h2>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim</p>
                        <div> 
                            <button>Stisfied</button>
                            <button><ArrowRight size={32} color="black"/></button>
                        </div>
                </div>
        </div>
    </div>
  )
}

export default RightCard
