import React from 'react'
import NavPageBanner from '../navReusableComponents/NavPageBanner'
import AboutStory from './_component/AboutStory'
import ValuesAndTeam from './_component/ValuesAndTeam'
import MissionSection from './_component/MissionSection'
import NavAboutCTA from './_component/NavAboutCTA'

const NavAboutPage = () => {
  return (
    <div>
        <NavPageBanner />
        <AboutStory />
        <ValuesAndTeam />
        <MissionSection />
        <NavAboutCTA />
    </div>
  )
}

export default NavAboutPage