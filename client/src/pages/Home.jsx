import React from 'react'
import HomeHero from '../components/HomeContent/HomeHero'
import HomeBanner from '../components/HomeContent/HomeBanner'
import HomeServices from '../components/HomeContent/HomeServices'
import HomeConsSteps from '../components/HomeContent/HomeConsSteps'
import HomeConsAbout from '../components/HomeContent/HomeConsAbout'
import FAQ from '../components/HomeContent/FAQ'
import Subscribe from '../components/Others/Subscribe'
import HomePageHero from '../components/HomeContent/HomePageHero'
import { Helmet } from 'react-helmet-async'

const Home = ({ isMenuOpen }) => {
  return (
    <div>
      <Helmet>
        <title>Top Interior Design & Home Remodeling in Miami</title>
        <meta
          name="description"
          content="Advance Construction & Remodeling offers expert interior design, roof-to-roof construction, and full home renovations in Miami, FL. Transform your home with trusted professionals."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <HomePageHero isMenuOpen={isMenuOpen} />
      <HomeHero />
      <HomeBanner />
      <HomeConsAbout />
      <HomeServices />
      <HomeConsSteps />
      <FAQ />
      <Subscribe />
    </div>
  )
}

export default Home
