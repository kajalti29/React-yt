// React se useEffect aur useState import kiya
import React, { useEffect, useState } from 'react'

// Axios import kiya API call ke liye
import axios from 'axios'

const App = () => {

  // API se aane wala data store karne ke liye state
  const [userData, setUserData] = useState([])

  // Page number (pagination) store karne ke liye state
  const [index, setIndex] = useState(1)

  // API se data fetch karne wala function
  const getData = async () => {

    // Dynamic page number ke sath API call
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=30`
    )

    // API response ko state me store kar diya
    setUserData(response.data)
  }

  // useEffect tab chalega jab page (index) change hoga
  useEffect(() => {
    getData() // API call
  }, [index]) // dependency array → index change hua to dubara chalega

  // Agar data nahi hai to default message
  let printUserData = (
    <h3 className="text-gray-400 text-xs">
      No User Available
    </h3>
  )

  // Agar userData me data aa gaya
  if (userData.length > 0) {

    // Map laga ke har image ka card bana rahe hain
    printUserData = userData.map((elem, idx) => {
      return (
        <div key={idx} className="w-44">

          {/* Image open karne ke liye link */}
          <a href={elem.url} target="_blank" rel="noreferrer">

            {/* Image container */}
            <div className="h-40 w-44 overflow-hidden rounded-xl">

              {/* Actual image */}
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              />

            </div>

            {/* Author name */}
            <h2 className="font-bold text-lg mt-2 text-center">
              {elem.author}
            </h2>

          </a>
        </div>
      )
    })
  }

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">

      {/* Image gallery container */}
      <div className="flex flex-wrap gap-5 justify-center">
        {printUserData}
      </div>

      {/* Pagination buttons */}
      <div className="flex justify-center gap-6 items-center p-4">

        {/* Prev button */}
        <button
          className="bg-amber-400 text-sm active:scale-95 text-black rounded px-4 py-2 font-semibold"
          onClick={() => {
            // Page 1 se niche nahi jaane dena
            if (index > 1) {
              setIndex(index - 1)
            }
          }}
        >
          Prev
        </button>

        {/* Current page number */}
        <span className="text-sm text-gray-300">
          Page {index}
        </span>

        {/* Next button */}
        <button
          className="bg-amber-400 text-sm active:scale-95 text-black rounded px-4 py-2 font-semibold"
          onClick={() => {
            // Next page par jana
            setIndex(index + 1)
          }}
        >
          Next
        </button>

      </div>
    </div>
  )
}

export default App
