import React from 'react'

function Card({info}) {
    const {title,text} = info
  return (
   <div className='flex justify-center flex-col items-center p-10  hover:shadow-xl'>
   <h4 className='font-bold text-1xl mb-4'>{title}</h4>
   <p className='w-50 text-sm text-right text-gray-500'>{text}</p>
   </div>
  )
}

export default Card