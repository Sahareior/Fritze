import React from 'react'
import { FaRegImages, FaTrash } from 'react-icons/fa6'
import { FiUpload } from 'react-icons/fi'


const ReusableInputs =({title,placeholder,type})=> {
    return(
        <div className='flex flex-col gap-3'>
            <label className='text-[17px]  font-semibold' htmlFor="">{title}</label>
           {type === "text" ? (
            <input className='border border-gray-400 rounded-xl py-2 px-4' type="text" placeholder={placeholder} />
           ) : type === "image" ? (
            <div className="w-full py-5 border border-dotted border-gray-400 rounded-xl flex flex-col items-center justify-center">
            
  <div className='flex justify-between w-full items-center px-5  gap-2'>
    <p>Upload Icon</p>
              <div className="text-orange-500 text-sm mb-4">
              <FiUpload  />
            </div>
  </div>
          </div>
           ) : (
            <textarea className='border border-gray-400  rounded-xl py-10 px-4' placeholder={placeholder}></textarea>
           )}
        </div>
    )
}


const ExprienceContent = () => {

  return (
    <div className='mx-5 space-y-10'>
<div className='flex flex-col gap-9'>
    <h3 className='text-[31px] font-semibold'>Hero Video/Image</h3>
       <div className="w-full  border border-dotted border-gray-400 rounded-xl py-28 flex flex-col items-center justify-center">
            
            {/* Icon */}
            <div className="text-orange-500 text-5xl mb-4">
              <FiUpload  />
            </div>
    
            {/* Title */}
            <p className="text-gray-700 font-medium">Tour Photos</p>
    
            {/* Subtitle */}
            <p className="text-gray-500 text-sm mt-1 text-center">
              Your photos will be shared among the guests
            </p>
          </div>

<div className='flex flex-col gap-3'>
              <ReusableInputs title={'Title'} placeholder={'e.g., Domino Park'} type={'text'} />
          <ReusableInputs title={'Description'} placeholder={'e.g., Domino Park'}  />
</div>
</div>
        {/* Immersive section */}

        <div>
            <h4 className='text-[23px] lora font-semibold'>Immersive Moments (Explained Simply)</h4>

            <div className='border border-gray-400 rounded-xl p-4'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-[17px] font-semibold pb-6'>Moment 1</h3>
                    <button><FaTrash /></button>
                </div>
                <div className='flex flex-col gap-3'>
                    <ReusableInputs title={'Icon (camera/music/play/smartphone)'} placeholder={'e.g., Upload Icon'} type={'image'} />
                    <ReusableInputs title={'Text'} placeholder={'Enter descriptive text for this moment'}  />
                </div>
            </div>
            <button className='text-orange-500 bg-[#F3F4F6] rounded-2xl font-semibold mt-5 w-full border border-dashed border-[#D1D5DC] py-5'>+ Add New Moments</button>
        </div>

{/* Sample Stops */}
        <div className="space-y-6">
            <h4 className='text-[23px] lora font-semibold'>Sample Stops</h4>

            <div className='border border-gray-300 rounded-xl p-6 space-y-8 bg-white'>
                <h3 className="text-lg font-bold text-[#344454]">Sample Stop 1</h3>
                
                <div className="space-y-4">
                    <ReusableInputs title={'Title *'} placeholder={'e.g., Domino Park'} type={'text'} />
                    <ReusableInputs title={'Description'} placeholder={'Enter descriptive text for this moment'} />
                </div>

                {/* Media & Local Detail Section */}
                <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left: Upload Box */}
                        <div className="space-y-3">
                            <p className="text-sm font-bold text-[#344454] ml-1">Stop File 2</p>
                            <div className="border-2 border-dashed border-gray-300 rounded-2xl h-64 flex flex-col items-center justify-center text-center bg-white group hover:border-orange-400 transition-all cursor-pointer">
                                <FiUpload className="text-4xl text-gray-400 group-hover:text-orange-500 mb-3 transition-colors" />
                                <p className="text-gray-500 text-xs font-medium">Upload photos of this location</p>
                                <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">PNG, JPG, Video, Audio • Multiple files supported</p>
                            </div>
                        </div>

                        {/* Right: Local Metadata */}
                        <div className="space-y-4">
                             <ReusableInputs title={'Title *'} placeholder={'e.g., Domino Park'} type={'text'} />
                             <ReusableInputs title={'Description'} placeholder={'Enter descriptive text for this moment'} />
                        </div>
                    </div>
                </div>
                            <button className='text-[#344454] bg-[#F3F4F6] rounded-2xl font-bold mt-5 w-full border border-dashed border-[#D1D5DC] py-5 flex items-center justify-center gap-2 hover:bg-gray-200 transition-all'>
                <span className="text-xl">+</span> Add Sample stops
            </button>
            </div>


        </div>

        {/* Action Button */}
        <div className="pt-10 pb-20">
            <button className="w-[35vw] bg-[#fb8500] justify-center flex items-center mx-auto text-white py-3 rounded-2xl font-bold text-lg shadow-lg shadow-orange-100 hover:bg-[#e67a00] transition-all transform active:scale-[0.99]">
                Save
            </button>
        </div>
    </div>
  )
}

export default ExprienceContent