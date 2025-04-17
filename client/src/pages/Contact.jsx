import React from 'react'
import ContactForm from '../components/ContactContent/ContactForm'
import ContactLocation from '../components/ContactContent/ContactLocation'
import Hero from '../components/Others/Hero'
import { contactHero } from '../assets/data/heroData'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
  return (
    <div className=''>
      <Helmet>
        <title>Contact Us | Advance Construction & Remodeling – Miami, FL</title>
        <meta
          name="description"
          content="Get in touch with Advance Construction & Remodeling for consultations, quotes, or questions. We proudly serve all residential and commercial projects in Miami, Florida."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Hero contactHero={contactHero} />
      <ContactForm />
      <ContactLocation />
    </div>
  )
}

export default Contact
