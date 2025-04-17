import React, { useEffect, useRef } from 'react';
import Video from '../../assets/videos/homevid.mp4'; // Ensure the path is correct

const HomeHero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 2000); // 3-second delay

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className='w-full h-full'>
      <video
        ref={videoRef}
        src={Video}
        className='w-full object-cover h-[100vh]'
        loop
        muted // Muted is required for autoplay in most browsers
        playsInline // Ensures the video plays inline on mobile devices
      />
    </div>
  );
};

export default HomeHero;