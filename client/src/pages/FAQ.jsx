import React from 'react'
import FAQQues from '../components/FAQContent/FAQQues'
import { faqHero } from '../assets/data/heroData'
import Hero from '../components/Others/Hero'
import { Helmet } from 'react-helmet-async'

const FAQ = () => {
  return (
    <div>
      <Helmet>
        <title>AQ – Advance Construction & Remodeling | Miami Home Experts</title>
        <meta
          name="description"
          content="Find answers to common questions about our services, pricing, timelines, and more. Advance Construction is here to guide you through every step of your Miami renovation project."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Hero faqHero={faqHero} />
      <FAQQues />
    </div>
  )
}

export default FAQ
