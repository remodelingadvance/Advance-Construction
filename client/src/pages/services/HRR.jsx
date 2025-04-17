import React from 'react'
import Hero from '../../components/Others/Hero'
import { HRRHero } from '../../assets/data/heroData'
import ServicesBanner from '../../components/ServicesContent/ServicesBanner'
import { HRRBanner } from '../../assets/data/ServiceBanner'
import HRRServiceDetail from '../../components/ServicesContent/HRRServiceDetail'
import { Helmet } from 'react-helmet-async'

const HRR = () => {
  return (
    <div>
      <Helmet>
        <title>Complete House Remodeling Services in Miami</title>
        <meta
          name="description"
          content="Upgrade your home with top-tier remodeling and renovation services in Miami. Advance Construction delivers tailored solutions for kitchens, bathrooms, flooring, and more."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Hero HRRHero={HRRHero} />
      <ServicesBanner HRRBanner={HRRBanner} />
      <HRRServiceDetail />
    </div>
  )
}

export default HRR
