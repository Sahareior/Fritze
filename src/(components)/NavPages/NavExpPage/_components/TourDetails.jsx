import React from 'react'
import TourHero from './TourHero'
import ExperienceIntro from './ExperienceIntro'
import FeaturesGrid from './FeaturesGrid'
import HighlightBanner from './HighlightBanner'
import SampleStops from './SampleStops'
import Pricing from './Pricing'
import CTA from './CTA'
import TourFnQ from './TourFnQ'

const TourDetails = () => {
  return (
    <>
    <TourHero />
     <div className='mx-20 space-y-10'>
     <ExperienceIntro />
  
     
        <SampleStops />
        
        <Pricing />
        
        <TourFnQ />
        <CTA />
        </div>
    </>
  )
}

export default TourDetails