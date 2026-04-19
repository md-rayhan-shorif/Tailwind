import React from 'react'

const Positions = () => {
  return (
    <>
    {/* jodi ami jekono ek jagay stable rakhte chai tahole absolute use korbo */}

    


{/*     

      <div className=' bg-amber-500 size-40  absolute right-0 bottom-0'></div>
      <div className=' bg-green-500 size-40 absolute right-0 top-0'></div>
      <div className=' bg-blue-500 size-40 absolute left-0 bottom-0'></div>
      <div className=' bg-red-500 size-40 absolute left-0 top-0'></div> */}



{/* Jodi kono div er moddhe box shajate chai tahole relative use korte hobe */}
      <div className=' bg-amber-900 relative  size-96'>

     
      <div className=' bg-amber-500 size-20 absolute right-0 bottom-0'></div>
      <div className=' bg-green-500 size-20 absolute right-0 top-0'></div>
      <div className=' bg-blue-500 size-20 absolute left-0 bottom-0'></div>
      <div className=' bg-red-500 size-20 absolute left-0 top-0'></div>

      </div>

      {/* jodi jono jinis chai screen e ekjagay e thakbe tahole shudhu fixed kore dibo */}
      <div className=' size-96 bg-amber-500'>
        <h1 className=' bg-fuchsia-500 fixed z-10 '>I am best </h1>
      </div>

      <div className=' bg-green-600 size-96 relative'>
        <div className=' bg-amber-800 size-20 inset-32 absolute'></div>

      </div>
      
    </>
  )
}

export default Positions
