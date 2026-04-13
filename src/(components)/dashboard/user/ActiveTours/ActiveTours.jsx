import React from 'react'

const ActiveTours = () => {
  return (
    <div className='bg-[#2A3C48] h-screen p-5'>
<div className='flex justify-center items-center flex-col gap-3'>
  <h2 className='text-white lora text-[16px]'>Hi user !</h2>
  <p className='text-[#BDBDBD] lora font-medium'>Let’s make your experience  different</p>
</div>

<div className='flex justify-center flex-col items-center mt-11 text-white gap-6'>
  <h3 className='text-[24px] font-bold'>Scan QR Code</h3>
  <p className='text-[16px] '>Point your camera at the QR code at the tour stop</p>
</div>

{/* Qr scanner camera section */}

<div className='bg-slate-700  h-[30vh] mt-36'>

</div>
    </div>
  )
}

export default ActiveTours