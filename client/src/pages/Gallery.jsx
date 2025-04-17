import React, { useState, useEffect, useRef } from 'react';
import { galleryHero } from '../assets/data/heroData';
import Hero from '../components/Others/Hero';
import MyGallery from '../components/GalleryContent/MyGallery';
import Subscribe from '../components/Others/Subscribe';
import { Helmet } from 'react-helmet-async';
import Audio from '../assets/audio/vangelis.mp3';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Set up autoplay after 2 seconds
    const autoplayTimer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            // Hide controls after 5 seconds if not hovering
            const hideTimer = setTimeout(() => {
              if (!isHovering) setShowControls(false);
            }, 5000);
            return () => clearTimeout(hideTimer);
          })
          .catch(error => {
            console.error('Autoplay failed:', error);
            // Show controls if autoplay fails (common in many browsers)
            setShowControls(true);
          });
      }
    }, 2000);

    return () => clearTimeout(autoplayTimer);
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative">
      {/* Background audio element */}
      <audio 
        ref={audioRef} 
        src={Audio} 
        loop 
        muted={isMuted}
        onEnded={() => setIsPlaying(false)}
      />
      
      {/* Music controls popup */}
      <motion.div
        className={`fixed bottom-4 right-4 z-50 bg-black/80 backdrop-blur-sm rounded-full !p-2 shadow-lg transition-all duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
        onMouseEnter={() => {
          setIsHovering(true);
          setShowControls(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
          if (!isHovering) {
            const timer = setTimeout(() => setShowControls(false), 3000);
            return () => clearTimeout(timer);
          }
        }}
        whileHover={{ scale: 1.05 }}
        animate={{ 
          opacity: showControls ? 1 : 0,
          y: showControls ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center !space-x-2">
          <button
            onClick={togglePlayPause}
            className="!p-2 rounded-full hover:bg-white/20 transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <FaPause className="text-white w-4 h-4" />
            ) : (
              <FaPlay className="text-white w-4 h-4" />
            )}
          </button>
          <button
            onClick={toggleMute}
            className="!p-2 rounded-full hover:bg-white/20 transition-colors"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <FaVolumeMute className="text-white w-4 h-4" />
            ) : (
              <FaVolumeUp className="text-white w-4 h-4" />
            )}
          </button>
        </div>
      </motion.div>

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