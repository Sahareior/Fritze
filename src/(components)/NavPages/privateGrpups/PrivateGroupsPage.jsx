import React from 'react'
import NavPageBanner from '../navReusableComponents/NavPageBanner'

import ExperiencePricing from './_components/ExperiencePricing'
import WhyTeams from './_components/WhyTeams'
import ProposalForm from './_components/ProposalForm'

const PrivateGroupsPage = () => {
  return (
    <div className="bg-white">
        <NavPageBanner />
        <ExperiencePricing />
        <WhyTeams />
        <ProposalForm />
    </div>
  )
}

export default PrivateGroupsPage