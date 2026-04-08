import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import Hero from './(components)/LandingPage/Hero/Hero'
import Experience from './(components)/LandingPage/Exprience/Exprience'
import ReusableTitle from './(components)/LandingPage/HomepageReusableComponents/ReusableTitle'
import WhyWorksCard from './(components)/LandingPage/HomepageReusableComponents/WhynWorksCard'
import FnQ from './(components)/LandingPage/FnQ/FnQ'
import ContactPage from './(components)/LandingPage/ContactPage/ContactPage'
import Navbar from './(components)/LandingPage/Navbar/Navbar'

function App() {

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
  {
    icon: "📱",
    title: "Immersive Moments",
    subtitle: "Small groups, premium pacing",
  },
];

  return (
    <>
<Navbar />
<Hero />
<Experience />

<div className='bg-[#F3F3F3] pb-14'>
  <ReusableTitle title="Why Miami Immersive"/>
  <div className="grid md:grid-cols-4 mx-20 gap-6">
    {features.map((item, index) => (
      <WhyWorksCard key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} />
    ))}
  </div>
</div>

<div className='bg-white '>
  <ReusableTitle title="How It Works" description="Four simple steps to an unforgettable experience." />
  <div className="grid md:grid-cols-4 mx-20 gap-6">
    {features.map((item, index) => (
      <WhyWorksCard hide={true} key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} />
    ))}
  </div>
</div>

<FnQ />
<ContactPage />
    </>
  )
}

export default App
