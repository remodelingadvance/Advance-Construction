import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutBanner from '../components/AboutContent/AboutBanner';
import OurStory from '../components/AboutContent/OurStory';
import Experience from '../components/Others/Experience';
import Hero from '../components/Others/Hero';
import { aboutHero } from '../assets/data/heroData';
import Certification from '../components/AboutContent/Certification';
import Subscribe from '../components/Others/Subscribe';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Advance Construction & Remodeling | Miami’s Trusted Contractors</title>
        <meta 
          name="description" 
          content="Learn about Advance Construction & Remodeling—Miami’s experts in home renovations, interior design, property management, and roof-to-roof construction. Experience, passion, results." 
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Hero aboutHero={aboutHero} />
      <AboutBanner />
      <Certification />
      <Experience />
      <OurStory />
      <Subscribe />
    </div>
  );
};

export default About;
