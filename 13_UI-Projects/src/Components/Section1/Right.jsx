import React from 'react'
import { ArrowRight } from 'lucide-react'

const Right = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
      
      <h1 className='bg-white text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>
        1
      </h1>

      <div>
        <p className='text-lg leading-normal mb-4 text-white'>
          Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt ut labore dolore
          Lorem eiusmod tempor incididunt ut labore dolore
        </p>

        <div className='flex items-center gap-3'>
          <button className='px-4 py-2 bg-white rounded-full'>{props.tag}
            Satisfied
          </button>
          <button className='px-4 py-2 bg-white rounded-full'>
            <ArrowRight />
          </button>
        </div>
      </div>

    </div>
  )
}

export default Right
