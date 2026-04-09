import React from 'react'
import NavPageBanner from '../navReusableComponents/NavPageBanner'
import StepsShowcase from './_components/StepsShowcase'
import CommonQuestions from './_components/CommonQuestions'
import AccessibilitySection from './_components/AccessibilitySection'

const HowItWorkPage = () => {
  return (
    <div>
        <NavPageBanner />
        <StepsShowcase />
        <CommonQuestions />
        <AccessibilitySection />
    </div>
  )
}

export default HowItWorkPage