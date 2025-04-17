import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import InteriorDesignImage from '../../assets/images/homeInt.jpg';
import ExteriorDesignImage from '../../assets/images/houseExt.jpg';
import { Link } from 'react-router-dom';

const HomeConsAbout = () => {
  const phoneNumber = '+17862109819';
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  // Create a motion component for Link
  const MotionLink = motion(Link);

  return (
    <section 
      className="!py-12 md:!py-18 !bg-gray-100 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.03, 0],
          transition: { duration: 10, repeat: Infinity, repeatType: 'reverse' }
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-[#5c7c3b] opacity-10 blur-sm"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-[#5c7c3b] opacity-10 blur-sm"></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 rounded-full bg-[#5c7c3b] opacity-10 blur-sm"></div>
      </motion.div>

      <div className="container mx-auto !px-5 lg:px-0 relative">
        {/* Interior Design Section */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-8 items-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Image */}
          <motion.div 
            className="w-full lg:w-1/2 overflow-hidden"
            variants={imageVariants}
          >
            <motion.img
              src={InteriorDesignImage}
              alt="Interior Design"
              className="w-full h-[400px] sm:h-[500px] object-cover rounded-lg shadow-lg"
              whileHover="hover"
              variants={imageVariants}
            />
          </motion.div>

          {/* Content */}
          <motion.div 
            className="lg:w-1/2"
            variants={containerVariants}
          >
            <motion.p 
              className="text-md sm:text-xl text-[#5c7c3b] italic !mb-4"
              variants={itemVariants}
            >
              <span className="inline-block w-[50px] h-[3px] bg-[#5c7c3b] !mb-1"></span> Design Your Space, Define Your Life.
            </motion.p>
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-gray-800 !mb-4"
              variants={itemVariants}
            >
              Interior Design: Crafting Spaces That Inspire
            </motion.h2>

            <motion.p 
              className="text-sm sm:text-[16px] text-gray-600"
              variants={itemVariants}
            >
              Transform your interiors into breathtaking spaces that reflect your personality and style. Our expert interior design services blend functionality with elegance, creating custom designs tailored to your vision. Whether you're dreaming of a modern kitchen, a cozy living room, or a luxurious office, we bring ideas to life with curated color palettes, premium materials, and thoughtful layouts.
            </motion.p>
            <motion.p 
              className="text-sm sm:text-[16px] text-gray-600 !mt-4"
              variants={itemVariants}
            >
              From concept to completion, we handle everything — lighting, furniture selection, décor, and finishes — ensuring every detail adds to the harmony of your home or commercial space. Let us create an environment you'll love to live and work in.
            </motion.p>

            <motion.div 
              className="flex gap-4"
              variants={itemVariants}
            >
              <motion.a
                href={`tel:${phoneNumber}`}
                className="border-2 !py-2 !px-4 border-[#5c7c3b] text-white font-semibold !mt-10 rounded-lg cursor-pointer bg-[#5c7c3b] hover:bg-white hover:text-black transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now
              </motion.a>

              <MotionLink
                to="/contact"
                className="border-2 !py-2 !px-4 border-[#5c7c3b] font-semibold !mt-10 rounded-lg cursor-pointer hover:bg-[#5c7c3b] hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Quotes
              </MotionLink>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Exterior Design Section */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-8 items-center !mt-10"
          variants={containerVariants}
        >
          {/* Content */}
          <motion.div 
            className="lg:w-1/2 order-2 lg:order-1"
            variants={containerVariants}
          >
            <motion.p 
              className="text-md sm:text-xl text-[#5c7c3b] italic !mb-4"
              variants={itemVariants}
            >
              <span className="inline-block w-[30px] sm:w-[50px] h-[3px] bg-[#5c7c3b] !mb-1"></span> Where First Impressions Are Built to Last.
            </motion.p>
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-gray-800 !mb-4"
              variants={itemVariants}
            >
              Exterior Design: Elevate Your Curb Appeal
            </motion.h2>
            <motion.p 
              className="text-sm sm:text-[16px] text-gray-600"
              variants={itemVariants}
            >
              Your property's exterior is its first impression — make it unforgettable. We specialize in designing stunning, durable exteriors that enhance your property's beauty and value. Whether it's a sleek modern facade, a charming traditional home, or a grand commercial building, we combine architectural expertise with aesthetic sensibility to create exteriors that stand out.
            </motion.p>
            <motion.p 
              className="text-sm sm:text-[16px] text-gray-600 !mt-4"
              variants={itemVariants}
            >
              From roofing and siding to landscaping and entryways, we craft cohesive designs that blend style with structure. Our team uses high-quality materials and innovative techniques to ensure your property not only looks amazing but also withstands the elements for years to come.
            </motion.p>
            <motion.div 
              className="flex gap-4"
              variants={itemVariants}
            >
              <motion.a
                href={`tel:${phoneNumber}`}
                className="border-2 !py-2 !px-4 border-[#5c7c3b] text-white font-semibold !mt-10 rounded-lg cursor-pointer bg-[#5c7c3b] hover:bg-white hover:text-black transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now
              </motion.a>
              <MotionLink
                to="/contact"
                className="border-2 !py-2 !px-4 border-[#5c7c3b] font-semibold !mt-10 rounded-lg cursor-pointer hover:bg-[#5c7c3b] hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Quotes
              </MotionLink>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="w-full lg:w-1/2 lg:order-2 overflow-hidden"
            variants={imageVariants}
          >
            <motion.img
              src={ExteriorDesignImage}
              alt="Exterior Design"
              className="w-full h-[400px] sm:h-[500px] object-cover rounded-lg shadow-lg"
              whileHover="hover"
              variants={imageVariants}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeConsAbout;