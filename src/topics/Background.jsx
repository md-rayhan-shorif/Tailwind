import React from 'react';
import heroImage from '../assets/image.png';

const Background = () => {
  return (
    <>
    
    {/* gradient color set korar niyom. */}
  
   <div className=' size-50  gradient bg-linear-to-bl to-green-500 from-red-600'>

   </div>
   <div className=' size-50  gradient bg-linear-to-b to-green-500 from-red-600'>

   </div>
   <div className=' size-50  gradient bg-linear-to-t to-green-500 from-red-600'>

   </div>
   <div className=' size-50  gradient bg-linear-to-r to-green-500 from-red-600'>

   </div>

   {/* Shadow korar niyom. */}
   <div className=' size-50   shadow-2xl shadow-amber-600 m-20'>

   </div>
   {/* Inner shadow */}
   <div className=' size-50   shadow-inner shadow-amber-600 m-20'>

   </div>
     </>
  );
}

export default Background;