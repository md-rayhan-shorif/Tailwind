import React from 'react'

const Size = () => {
  return (
    <>
    <div className=' bg-fuchsia-400 '> Code is good</div>
    <div className=' bg-slate-500 w-14'> Code is good</div>
    {/* size in percentage % */}
    <div className=' bg-slate-500 w-1/2'> Code is good</div>
    <div className=' bg-slate-500 w-1/3'> Code is good</div>
    <div className=' bg-slate-500 w-1/4'> Code is good</div>
    <div className=' bg-slate-500 w-1/5'> Code is good</div>
    <div className=' bg-slate-500 w-1/6'> Code is good</div>
    <div className=' bg-slate-500 w-1/12'> Code is good</div>
    <div className=' bg-slate-500 w-10/12'> Code is good</div>


    {/* size in XL range */}
    <div className=' bg-pink-500 w-xs'> Code is good</div>
    <div className=' bg-pink-600 w-xl '> Code is good</div>
    <div className=' bg-pink-700 w-2xl '> Code is Job</div>
    {/* size in px  but not recommended*/}
    <div className=' bg-pink-800 w-[10px] '> Code is Job</div>


    <div className=' bg-pink-500 w-full'> Code is good</div>
    <div className=' bg-blue-500 max-w-56'> Code is good</div>
    <div className=' bg-red-500 min-w-80 w-10 '> Code is good</div>
    <div className=' bg-green-500 min-w-80  max-w-96 '> Code is good</div>
    
    
    </>
  )
}

export default Size
