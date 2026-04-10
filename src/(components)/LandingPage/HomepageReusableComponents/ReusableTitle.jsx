import React from 'react'

function ReusableTitle({title,description}) {
  return (
   <div className='flex justify-center items-center md:py-10 py-6 md:pb-16 pb-6 flex-col gap-1'>
     <h3 className='lora md:text-[42px] text-[22px] text-[#2A3C48] lora font-semibold'>{title}</h3>
     <p className='raleway text-[#8E98A8] md:text-[20px] text-[12px]  font-medium lora max-w-xl'>{description}</p>
   </div>
  )
}

export default ReusableTitle