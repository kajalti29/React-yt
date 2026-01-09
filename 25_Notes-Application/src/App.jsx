import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])


// Form submit होने पर page reload न हो → preventDefault()
  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({title, details})

    setTask(copyTask)
    
    // Form submit होने के बाद inputs को खाली कर दिया
    setTitle('')
    setDetails('')
  }


 const deleteNote = (idx) =>{
  const copyTask = [...task];

   copyTask.splice(idx,1)

   setTask(copyTask)
}

  return (
    <div className='h-screen lg:flex bg-black text-white'>
    
      <form onSubmit={(e) => {
            submitHandler(e)    
          }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>

        <h1 className='text-4xl mb-2 font-bold'>Your Notes</h1>

        {/* Pahla Input For Heading */}
        <input
         type='text' 
         placeholder='Enter your Node'
         className='px-5 py-2 w-full font-medium border-2 outline-none rounded'
         value={title}
         onChange={(e) =>{
          setTitle(e.target.value)
         }}
         />

         {/* Default vala input */}
        <textarea 
        type='text'
         placeholder='Write Details'
         className='px-5 py-6 w-full h-32 font-medium flex items-start flex-row border-2 outline-none rounded'
         value={details}
         onChange={(e) => {
          setDetails(e.target.value)
         }}
         />

         <button className=' px-5 py-2 bg-white active:scale-95 font-medium  w-full outline-none border-2 text-black rounded'>
         Add Node
         </button>
      </form>

      <div className=' lg:w-1/2 lg:border-1/2 p-10 bg-blue-950'>
        <h1  className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          {task.map(function(elem,idx){

            return <div key={idx} className=' flex justify-between flex-col items-start relative h-52 w-40 rounded-xl bg-white text-black pt-4 pb-4 px-4 bg-cover bg-[url(src\assets\watercolor-spiral-notepad-free-png.png)]'>

            <div> 
              <h3 className='leading-tight font-bold text-xl'>{elem.title}</h3>
              <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
            </div>
            <button onClick={() => {
              deleteNote(idx)
            }}
             className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>
              Delete
            </button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App