import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { FiTrash2 } from 'react-icons/fi'

const HIW =({title,placeholder,type,show})=> {
    return(
   <div className="w-full mx-auto p-6">
      <div className="bg-[#EFF6FF]  rounded-2xl p-4 space-y-4 relative">
        {/* Delete Button */}
<div className='flex flex-row-reverse gap-4'>
            <button className=" top-4 right-4 bg-red-500 text-white p-2 rounded-lg">
          <FiTrash2 />
        </button>

        {/* Title */}
        <div className="w-full bg-white  rounded-lg p-3 font-medium">
          How It Works
        </div>
</div>

        {/* Subtitle */}
        <input
          type="text"
          defaultValue="Everything you need to know about our immersive Miami tours"
          className="w-full bg-white  rounded-lg p-3 text-gray-500"
        />

        {/* Section Title */}
{
    show && (
        <div className='flex flex-col gap-5'>
 <div className="w-full bg-white  rounded-lg p-3 font-medium">
          Your Story Key
        </div>

        {/* Description */}
        <textarea
          defaultValue="Simply mt-6 tap or scan to unlock immersive content at each stop. No downloads, no hassle."
          rows={4}
          className="w-full bg-white  rounded-lg p-3 resize-none"
        />
</div>
    )
}
      </div>
    </div>
    )
}
const FaqContent = () => {
  return (
    <div className='space-y-6 w-full'>
        <div className='bg-[#E8E8E8] w-full mx-auto pb-7'>
            <HIW show={true} />
            <HIW show={true} />
            <HIW show={true} />
            <button className='w-[20vw] py-3 bg-[#F97415] text-white rounded-lg flex items-center justify-center gap-2 block mx-auto '><BsPlus /> Add</button>
        </div>

        <div className='bg-[#E8E8E8] w-full mx-auto pb-7'>
        <h4 className='text-[28px] font-semibold px-9'>General Questions</h4>
        <HIW />
        <HIW />
        <HIW />
           <button className='w-[20vw] py-3 bg-[#F97415] text-white rounded-lg flex items-center justify-center gap-2 block mx-auto '><BsPlus /> Add</button>

        </div>
        <div className='bg-[#E8E8E8] w-1/2 mx-auto pb-7'>
        <h4 className='text-[28px] font-semibold px-9'>Tech Questions</h4>
        <HIW />
        <HIW />
        <HIW />
           <button className='w-[20vw] py-3 bg-[#F97415] text-white rounded-lg flex items-center justify-center gap-2 mx-auto '><BsPlus /> Add</button>

        </div>
    </div>
  )
}

export default FaqContent