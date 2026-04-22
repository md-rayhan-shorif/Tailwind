import React from 'react'

const Interactivity = () => {
  return (
    <div>
{/* Interactivity - Hover, Focus & Active */}
        <button className=' border p-1 rounded-xl bg-blue-500 m-20'>Login</button>
        <button className=' border p-1 rounded-xl bg-blue-500 m-20 cursor-pointer hover:bg-blue-400 '>Login</button>

        <button className=' border p-1 rounded-xl bg-blue-500 m-20 cursor-pointer hover:bg-blue-400 focus:bg-amber-400 '>Login</button>

        <button className=' border p-1 rounded-xl bg-blue-500 m-20 cursor-pointer hover:bg-blue-400 focus:bg-green-500 active:bg-red-400 '>Login</button>
      
    </div>
  )
}

export default Interactivity
