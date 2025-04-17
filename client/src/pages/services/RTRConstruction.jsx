import React from 'react'
import { RTRConsHero } from '../../assets/data/heroData'
import Hero from '../../components/Others/Hero'
import ServicesBanner from '../../components/ServicesContent/ServicesBanner'
import { RTRBanner } from '../../assets/data/ServiceBanner'
import RTRServiceDetail from '../../components/ServicesContent/RTRServiceDetail'
import { Helmet } from 'react-helmet-async'

const RTRConstruction = () => {
  return (
    <div>
      <Helmet>
        <title>Roof-to-Roof Construction Experts in Miami</title>
        <meta
          name="description"
          content="Get durable and stylish roofing solutions with Advance Construction & Remodeling. Serving all of Miami, we handle new roof installations and complete roof construction projects."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Hero RTRConsHero={RTRConsHero} />
      <ServicesBanner RTRBanner={RTRBanner} />
      <RTRServiceDetail />
    </div>
  )
}

export default RTRConstruction
