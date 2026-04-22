import React from 'react'

const Interactivity = () => {
  return (
    <div>
{/* Interactivity - Hover, Focus & Active */}
        <button className=' border p-1 rounded-xl bg-blue-500 m-20'>Login</button>
        <button className=' border p-1 rounded-xl bg-blue-500 m-20 cursor-pointer hover:bg-blue-400 '>Login</button>

        <button className=' border p-1 rounded-xl bg-blue-500 m-20 cursor-pointer hover:bg-blue-400 focus:bg-amber-400 '>Login</button>

        <button className=' border p-1 rounded-xl bg-blue-500 m-20 cursor-pointer hover:bg-blue-400 focus:bg-green-500 active:bg-red-400 '>Login</button>

        <div>
            <a href="" className=' group'>
                <h1 className=' group-hover:bg-amber-200'>heading click</h1>
                <p className=' group-hover:text-4xl'>para click</p>
            </a>
        </div>
      
    </div>
  )
}

export default Interactivity
