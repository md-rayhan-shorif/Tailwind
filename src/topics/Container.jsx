import React from 'react'

const Container = () => {
  return (
    


    <div>

        <nav className=' bg-black text-white '>
        <ul className=' flex *:p-4 justify-end  '>
            <li className=' hover:bg-slate-400 rounded-2xl p-2'><a href="#">Home</a></li>
            <li className=' hover:bg-slate-400 rounded-2xl p-2'><a href="#">News</a></li>
            <li className=' hover:bg-slate-400 rounded-2xl p-2'><a href="#">Contact</a></li>
            <li className=' hover:bg-slate-400 rounded-2xl p-2'><a href="#">About</a></li>
        </ul>
    </nav>

      <div className=' text-7xl bg-amber-200 container mx-auto'>
        Container Class
      </div>
      <div className='text-7xl bg-amber-300 container mx-auto'>
        Good Class
      </div>
      <div className='text-6xl bg-amber-400 container mx-auto'>
        better Class
      </div>
      <div className='text-7xl bg-amber-500 container mx-auto'>
        Best Class
      </div>
    </div>
  )
}

export default Container
