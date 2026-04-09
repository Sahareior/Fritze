import React from 'react'
import PrivateTourBanner from './_components/PrivateTourBanner'
import ChooseTour from './_components/ChooseTour'
import PrivateBookingForm from './_components/PrivateBookingForm'
import WhyPrivate from './_components/WhyPrivate'

const PrivateTours = () => {
  return (
    <div className=''>
        <PrivateTourBanner />
        <ChooseTour />
        <PrivateBookingForm />
        <WhyPrivate />
    </div>
  )
}

export default PrivateTours