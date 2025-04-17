import React from 'react'
import { IDRHero } from '../../assets/data/heroData'
import Hero from '../../components/Others/Hero'
import ServicesBanner from '../../components/ServicesContent/ServicesBanner'
import { IDRBanner } from '../../assets/data/ServiceBanner'
import IDMServiceDetails from '../../components/ServicesContent/IDMServiceDetails'
import { Helmet } from 'react-helmet-async'

const IDR = () => {
  return (
    <div>
      <Helmet>
        <title>Interior Design & Home Remodeling in Miami</title>
        <meta
          name="description"
          content="From concept to completion—Advance Construction specializes in modern interior design and custom home remodeling services across Miami, FL. Personalized spaces that inspire."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Hero IDRHero={IDRHero} />
      <ServicesBanner IDRBanner={IDRBanner} />
      <IDMServiceDetails />
    </div>
  )
}

export default IDR
