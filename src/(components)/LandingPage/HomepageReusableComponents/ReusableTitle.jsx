import React from 'react'

function ReusableTitle({title,description}) {
  return (
   <div className='flex justify-center items-center py-10 pb-16 flex-col gap-1'>
     <h3 className='lora text-[42px] text-[#2A3C48] lora font-semibold'>{title}</h3>
     <p className='raleway text-[#8E98A8] text-[20px]  font-medium lora max-w-xl'>{description}</p>
   </div>
  )
}

export default ReusableTitle