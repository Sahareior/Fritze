import React from 'react'
import PressBrandStory from './_components/PressBrandStory'
import NavPageBanner from '../navReusableComponents/NavPageBanner'
import PressResources from './_components/PressResources'
import PressCTA from './_components/PressCTA'

const NavPress = () => {
  return (
    <div>
        <NavPageBanner />
        <PressBrandStory />
        <PressResources />
        <PressCTA />
    </div>
  )
}

export default NavPress