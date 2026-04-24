import React from 'react'

const Transition = () => {
  return (
    <div>
      <button className=' bg-blue-500 p-3 hover:bg-blue-900 text-white m-10 rounded
      '>
        Button 1
      </button>
      <button className=' bg-blue-500 p-3 text-white m-10 hover:bg-blue-900 rounded
       transition  duration-1000
      '>
        Button 2
      </button>
      <button className=' bg-blue-500 p-3 text-white m-10 hover:opacity-30 rounded
       transition  duration-1000
      '>
        Button 3
      </button>
      <button className=' bg-blue-500 p-3 text-white m-10 hover:opacity-30 rounded
       transition  duration-1000 hover:rotate-180
      '>
        Button 4
      </button>
      <button className=' bg-blue-500 p-3 text-white m-10 hover:opacity-30 rounded
      hover:rotate-180 transition-transform duration-1000
      '>
        Button 5
      </button>
      <button className=' bg-blue-500 p-3 text-white m-10 hover:opacity-30 rounded
      hover:rotate-180 hover:scale-200 transition-transform duration-1000
      '>
        Button 6
      </button>
      <button className=' bg-blue-500 p-3 text-white m-10 hover:opacity-30 rounded
       hover:scale-x-200 hover:scale-75 transition-transform duration-1000
      '>
        Button 7
      </button>
    </div>
  )
}

export default Transition
