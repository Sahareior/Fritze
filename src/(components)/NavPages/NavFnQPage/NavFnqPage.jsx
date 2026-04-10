import React from 'react'
import ReusableTitle from '../../LandingPage/HomepageReusableComponents/ReusableTitle'
import HowitWorks from './_components/HowitWorks'
import TechQuestions from './_components/TechQuestions'
import Accessibility from './_components/Accessibility'
import TourFnQ from '../NavExpPage/_components/TourFnQ'
import SupportCTA from './_components/SupportCTA'

const NavFnqPage = () => {
  return (
    <div className='bg-[#FFFFFF]'>
        <div className='md:mx-20 mx-4 space-y-10'>
            <ReusableTitle title="Frequently Asked Questions" description="Choose your neighborhood. Choose your story." />
        <HowitWorks />
        <TechQuestions />
        <Accessibility />
        <TourFnQ />
        <SupportCTA />
        </div>
    </div>
  )
}

export default NavFnqPage