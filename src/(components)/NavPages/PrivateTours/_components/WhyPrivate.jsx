import React from 'react'
import ReusableTitle from '../../../LandingPage/HomepageReusableComponents/ReusableTitle'
import WhyWorksCard from '../../../LandingPage/HomepageReusableComponents/WhynWorksCard';

const WhyPrivate = () => {
    const features = [
  {
    icon: "🔊",
    title: "Story-Driven",
    subtitle: "Stories told where they happened",
  },
  {
    icon: "👥",
    title: "Small Groups",
    subtitle: "Food as cultural language",
  },
  {
    icon: "🤝",
    title: "Memory Vault",
    subtitle: "Technology that disappears",
  },

];
  return (
<div className=' bg-[#F8F9FA]'>
        <div className='md:mx-20 mx-4 pb-16 pt-4 md:pt-0'>
        <ReusableTitle
        title="Why Choose Private Tours?"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 md:px-12 gap-4 mt-2 md:mt-10">
        {features.map((item, index) => (
          <WhyWorksCard hide={true} key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} />
        ))}
      </div>
    </div>
</div>
  )
}

export default WhyPrivate