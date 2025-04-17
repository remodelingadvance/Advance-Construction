import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ConstructionImage from '../../assets/images/conshero.jpg';
import { Link } from 'react-router-dom';

const HomeConsSteps = () => {
  const phoneNumber = '+17862109819';
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const steps = [
    {
      title: 'Step 1: Planning & Design',
      description: "We start with your vision. This phase includes site evaluation, blueprints, permits, and material selection. Careful planning ensures a smooth construction process, laying the groundwork for a successful project.",
      icon: '📐'
    },
    {
      title: 'Step 2: Site Preparation & Foundation',
      description: "Turning plans into action. We clear the land, level the site, and lay a sturdy foundation. This critical step ensures the structure's strength and stability, setting the stage for the build.",
      icon: '🏗️'
    },
    {
      title: 'Step 3: Construction & Building',
      description: "Bringing your vision to life. From framing and roofing to electrical, plumbing, and interior work — we carefully build each element with precision and high-quality materials to create a lasting structure.",
      icon: '🔨'
    },
    {
      title: 'Step 4: Finishing Touches & Handover',
      description: "The final reveal. We add the last details, including paint, fixtures, and landscaping, ensuring everything is polished and perfect. After a final inspection, we hand over the completed project, ready for you to enjoy!",
      icon: '🎉'
    },
  ];

  // Create motion component for Link
  const MotionLink = motion(Link);
  const MotionA = motion.a;

  return (
    <section 
      className="!py-16 md:!py-24 !bg-gray-100 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.03, 0],
          transition: { duration: 10, repeat: Infinity, repeatType: 'reverse' }
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-[#5c7c3b] opacity-10 blur-lg"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-[#5c7c3b] opacity-10 blur-lg"></div>
      </motion.div>

      <div className="container !mx-auto !px-5 lg:!px-0">
        <motion.div 
          className="text-center !mb-16"
          initial="hidden"
          animate={controls}
          variants={container}
        >
          <motion.h2 
            className="text-3xl sm:text-5xl font-bold text-gray-800 !mb-6 relative inline-block"
            variants={item}
          >
            <span className="absolute -left-10 top-1/2 w-8 h-1 bg-[#5c7c3b] transform -translate-y-1/2"></span>
            Construction Process
            <span className="absolute -right-10 top-1/2 w-8 h-1 bg-[#5c7c3b] transform -translate-y-1/2"></span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-2xl !mx-auto"
            variants={item}
          >
            Follow our <span className="font-semibold text-[#5c7c3b]">step-by-step</span> process to bring your vision to life
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Image Container - Fixed sizing */}
          <motion.div 
            className="lg:w-1/2 relative w-full !mx-[20px]"
            initial={{ opacity: 0, x: -20 }}
            animate={controls}
            variants={item}
          >
            
            <div className="w-full !mx-auto h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[650px] relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src={ConstructionImage}
                alt="Construction Process"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 hover:scale-105 "
              />
            </div>
          </motion.div>

          {/* Steps Container */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial="hidden"
            animate={controls}
            variants={container}
          >
            <div className="absolute left-5 h-full w-0.5 bg-gradient-to-b from-[#5c7c3b] to-transparent"></div>

            <div className="!space-y-6 sm:!space-y-2">
              {steps.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start relative group"
                  variants={item}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 border-[#5c7c3b] rounded-full flex items-center justify-center text-xl font-bold z-10 !mr-4 sm:!mr-6 shadow-lg group-hover:bg-[#5c7c3b] group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>

                  <div className="flex-1 !pl-2 sm:!pl-4 bg-white/80 backdrop-blur-sm !p-4 sm:!p-6 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 !mb-2 sm:!mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-md text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 !mt-12 sm:!mt-16"
                variants={item}
              >
                <MotionA
                  href={`tel:${phoneNumber}`}
                  className="border-2 !py-2 sm:!py-3 !px-4 sm:!px-6 border-[#5c7c3b] text-white font-semibold rounded-lg cursor-pointer bg-[#5c7c3b] hover:bg-white hover:text-black transition-all flex-1 text-center"
                  whileHover={{ y: -3, boxShadow: "0 10px 20px rgba(92, 124, 59, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Call Now
                </MotionA>

                <MotionLink
                  to="/contact"
                  className="border-2 !py-2 sm:!py-3 !px-4 sm:!px-6 border-[#5c7c3b] font-semibold rounded-lg cursor-pointer hover:bg-[#5c7c3b] hover:text-white transition-all flex-1 text-center"
                  whileHover={{ y: -3, boxShadow: "0 10px 20px rgba(92, 124, 59, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Free Quotes
                </MotionLink>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeConsSteps;