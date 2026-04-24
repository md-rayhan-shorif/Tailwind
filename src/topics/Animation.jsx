import React from 'react'
import photo from '../assets/photo1.jpg'

const Animation = () => {
  return (
    <div>
      {/* Animation tutorial */}
      <div className=' size-32 bg-red-600 rounded-full animate-bounce mt-20 ml-20 '></div> <hr />

      <div className=' size-32 bg-red-600 w-32 h-2  animate-spin mt-20 ml-20 '></div> <hr />
      <div className=' size-32 bg-red-600 w-32 h-2 animate-ping mt-20 ml-20 '></div> <hr />
      <div className=' size-32 bg-red-600 w-32 h-2 animate-pulse mt-20 ml-20 '></div> <hr />

      <img src={photo} alt="" className=' size-52 m-32 animate-pulse rounded-full ' />

    </div>
  )
}

export default Animation
