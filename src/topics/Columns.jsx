import React from 'react'
import photo from '../assets/photo1.jpg'

const Columns = () => {
  return (
    <div className=' h-screen'>

        <div className=' columns-4'>


        <h1 className=' bg-green-500'>Heading 1</h1>
        <h1 className=' bg-amber-400'>Heading 2</h1>
        <h1 className=' bg-blue-400'>Heading 3</h1>
        <h1 className=' bg-yellow-400'>Heading 4</h1>
        <h1 className=' bg-pink-400'>Heading 5</h1>
        <h1 className=' bg-red-400'>Heading 6</h1>
        <h1 className=' bg-red-400'>Heading 6</h1>
      
        </div>
        {/* jodi manual set korte chai koto gulo image rakhbo screen e. */}
        <div className=' columns-3'>
            <img src={photo} alt="" />
            <img src={photo} alt="" />
            <img src={photo} alt="" />
            <img src={photo} alt="" />
            <img src={photo} alt="" />
            <img src={photo} alt="" />
            <img src={photo} alt="" />
        </div>
    {/* Responsive condition diye columns set kora */}
        <div className=' columns-1 lg:columns-4 md:columns-3 sm:columns-2 '>
            <img src={photo} alt="" />
            <img src={photo} alt="" />
            <img src={photo} alt="" />
            <img src={photo} alt="" />
            <img src={photo} alt="" />
            <img src={photo} alt="" />
            <img src={photo} alt="" />
            <img src={photo} alt="" />
            <img src={photo} alt="" />
            <img src={photo} alt="" />
            <img src={photo} alt="" />
            <img src={photo} alt="" />
            <img src={photo} alt="" />
            <img src={photo} alt="" />
        </div>
    </div>
  )
}

export default Columns
