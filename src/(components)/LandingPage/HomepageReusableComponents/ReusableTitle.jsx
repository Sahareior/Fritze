import React from 'react'

function ReusableTitle({title,description}) {
  return (
   <div className='flex flex-col gap-1'>
     <h3 className='lora text-[42px] lora font-medium'>{title}</h3>
     <p className='raleway text-gray-500 text-[20px]  font-medium lora max-w-md'>{description}</p>
   </div>
  )
}

export default ReusableTitle