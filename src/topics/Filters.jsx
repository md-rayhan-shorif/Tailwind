import React from 'react'
import photo from '../assets/photo1.jpg'

const Filters = () => {
  return (
    <>
    
  
    
    {/* // Blur korar niyom */}
    <div>
        <p className=' blur-[1px]'>Blur Image</p>
      <img src={photo} alt="" className='h-50  ' />
      <img src={photo} alt="" className='h-50 blur-md  ' />
      <img src={photo} alt="" className='h-50 blur-lg  ' />
      <img src={photo} alt="" className='h-50 blur-xs  ' />
      <img src={photo} alt="" className='h-50 blur-[2px]  ' />
    </div>

    {/* Brightness */}
    <div>
        <p className=' brightness-0 '>Blur Image</p>
      <img src={photo} alt="" className='h-50 brightness-0  ' />
      <img src={photo} alt="" className='h-50 brightness-50  ' />
      <img src={photo} alt="" className='h-50 brightness-100  ' />
      <img src={photo} alt="" className='h-50 brightness-200  ' />
      <img src={photo} alt="" className='h-50 brightness-500  ' />
    </div>
    {/* Contrast */}
    <div>
        <p className=' brightness-0 '>Blur Image</p>
      <img src={photo} alt="" className='h-50 contrast-0  ' />
      <img src={photo} alt="" className='h-50 contrast-50  ' />
      <img src={photo} alt="" className='h-50 contrast-100  ' />
      <img src={photo} alt="" className='h-50 contrast-200  ' />
      <img src={photo} alt="" className='h-50 contrast-500  ' />
    </div>



    </>
  )
}

export default Filters
