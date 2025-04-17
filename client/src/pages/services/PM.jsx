import React from 'react'
import Hero from '../../components/Others/Hero'
import { PMHero } from '../../assets/data/heroData'
import { PMBanner } from '../../assets/data/ServiceBanner'
import ServicesBanner from '../../components/ServicesContent/ServicesBanner'
import PMServiceDetails from '../../components/ServicesContent/PMServiceDetails'
import { Helmet } from 'react-helmet-async'

const PM = () => {
  return (
    <div>
      <Helmet>
        <title>Miami Property Management Solutions</title>
        <meta
          name="description"
          content="Full-service property management for Miami homeowners. Advance Construction ensures seamless maintenance, tenant management, and renovation services all under one roof."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Hero PMHero={PMHero} />
      <ServicesBanner PMBanner={PMBanner} />
      <PMServiceDetails />
    </div>
  )
}

export default PM
