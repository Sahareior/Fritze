import React, { useState } from 'react'
import ExprienceContent from './_component/ExprienceContent'
import FaqContent from './_component/FaqContent'
import PrivateTouresContent from './_component/PrivateTouresContent'
import BrandStoryContent from './_component/BrandStoryContent'
import AboutContent from './_component/AboutContent'
import BioContent from './_component/BioContent'

const Content = () => {
    const [activeTab, setActiveTab] = useState('experience');
  return (
    <div className='flex gap-3 px-5 flex-col'>
        <div className='flex bg-[#D9D9D9] justify-between md:w-1/2 overflow-x-auto mt-3  p-3 gap-5'>
            <button className='text-sm bg-white p-2 rounded-md md:px-8' onClick={() => setActiveTab('experience')}>Experience</button>
            <button className='text-sm bg-white p-2 rounded-md md:px-8' onClick={() => setActiveTab('faq')}>FAQ</button>
            <button className='text-sm bg-white p-2 rounded-md md:px-8' onClick={() => setActiveTab('about')}>About</button>
            <button className='text-sm bg-white p-2 rounded-md md:px-8' onClick={() => setActiveTab('private-tours')}>Private Tours</button>
            <button className='text-sm bg-white p-2 rounded-md md:px-8' onClick={() => setActiveTab('brand-story')}>Brand Story</button>
            <button className='text-sm bg-white p-2 rounded-md md:px-8' onClick={() => setActiveTab('bio')}>Bio</button>
        </div>
       
       {activeTab === 'about' && <AboutContent />}
       {activeTab === 'experience' && <ExprienceContent />}
       {activeTab === 'faq' && <FaqContent />}
       {activeTab === 'private-tours' && <PrivateTouresContent />}
       {activeTab === 'brand-story' && <BrandStoryContent />}
       {activeTab === 'bio' && <BioContent />}
    </div>
  )
}

export default Content