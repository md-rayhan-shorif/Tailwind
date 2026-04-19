import React from 'react'

const Header = () => {
  return (
    <nav className=' bg-black text-white '>
        <ul className=' flex  p-4 gap-3  '>
            <li className=' hover:bg-slate-400 rounded-2xl p-2'><a href="#">Home</a></li>
            <li className=' hover:bg-slate-400 rounded-2xl p-2'><a href="#">News</a></li>
            <li className=' hover:bg-slate-400 rounded-2xl p-2'><a href="#">Contact</a></li>
            <li className=' hover:bg-slate-400 rounded-2xl p-2'><a href="#">About</a></li>
        </ul>
    </nav>
  )
}

export default Header
