import React from 'react';
import { galleryHero } from '../assets/data/heroData';
import Hero from '../components/Others/Hero';
import MyGallery from '../components/GalleryContent/MyGallery';
import Subscribe from '../components/Others/Subscribe';
import { Helmet } from 'react-helmet-async';

const Gallery = () => {

  return (
    <div>
      <Helmet>
        <title>Project Gallery | Advance Construction & Remodeling in Miami</title>
        <meta
          name="description"
          content="Explore our gallery of completed projects—featuring interior design, remodeling, roof construction, and property upgrades throughout Miami, FL."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Hero galleryHero={galleryHero} />
      <MyGallery />
      <Subscribe />
    </div>
  );
};

export default Gallery;