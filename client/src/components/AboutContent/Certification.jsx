import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCertificate, FaAward, FaRegFileAlt, FaRegBuilding, FaRegCheckCircle, FaRegStar, FaRegLightbulb } from "react-icons/fa";

const certifications = [
  {
    title: "Licensed Sales Associate under Chapter 475, Florida Statutes",
    issuer: "State of Florida Department of Business and Professional Regulation",
    year: "2020"
  },
  {
    title: "ACI Concrete Field Testing Technician – Grade I",
    issuer: "American Concrete Institute",
    year: "2019"
  },
  {
    title: "Planning for Waste Management",
    issuer: "Environmental Protection Agency",
    year: "2021"
  },
  {
    title: "DSNY's New Rule for Residential Buildings",
    issuer: "New York City Department of Sanitation",
    year: "2022"
  },
  {
    title: "Smart Bathrooms",
    issuer: "Duravit USA, Inc.",
    year: "2021"
  },
  {
    title: "Pulp Studio Graphic Imaging and Glass",
    issuer: "Pulp Studio",
    year: "2020"
  },
  {
    title: "Using Lightweight Stone for Architectural Facades",
    issuer: "Natural Stone Institute",
    year: "2022"
  },
];

const Certification = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.5
      }
    }
  };

  const titleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10
      }
    }
  };

  // Background animated icons
  const backgroundIcons = [
    { icon: <FaCertificate className="text-[#5c7c3b] opacity-10" size={40} />, top: '10%', left: '5%' },
    { icon: <FaAward className="text-[#5c7c3b] opacity-10" size={50} />, top: '20%', right: '10%' },
    { icon: <FaRegFileAlt className="text-[#5c7c3b] opacity-10" size={45} />, bottom: '15%', left: '8%' },
    { icon: <FaRegBuilding className="text-[#5c7c3b] opacity-10" size={35} />, top: '30%', right: '15%' },
    { icon: <FaRegCheckCircle className="text-[#5c7c3b] opacity-10" size={40} />, bottom: '20%', right: '5%' },
    { icon: <FaRegStar className="text-[#5c7c3b] opacity-10" size={45} />, top: '40%', left: '15%' },
    { icon: <FaRegLightbulb className="text-[#5c7c3b] opacity-10" size={40} />, bottom: '30%', right: '20%' },
  ];

  return (
    <div className="relative bg-gray-50 !py-16 !px-4 sm:!px-6 lg:!px-8 overflow-hidden">
      {/* Background animated icons */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {backgroundIcons.map((icon, index) => (
          <motion.div 
            key={index}
            className="absolute"
            style={{
              top: icon.top,
              bottom: icon.bottom,
              left: icon.left,
              right: icon.right,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{
              duration: 15 + index * 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: index * 2
            }}
          >
            {icon.icon}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          className="text-center !mb-12 sm:!mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-800 !mb-4 relative inline-block"
            variants={titleVariants}
          >
            <span className="absolute -left-8 sm:-left-12 top-1/2 transform -translate-y-1/2 w-[20px] sm:w-[50px] h-[3px] bg-[#5c7c3b]"></span>
            Licenses and Certifications
            <span className="absolute -right-8 sm:-right-12 top-1/2 transform -translate-y-1/2 w-[20px] sm:w-[50px] h-[3px] bg-[#5c7c3b]"></span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 !mb-8 sm:!mb-12"
            variants={titleVariants}
          >
            Professional credentials that validate my expertise
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-white !p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#5c7c3b] relative overflow-hidden group"
            >
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#5c7c3b]/0 to-[#5c7c3b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start !mb-3">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#5c7c3b] transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <motion.span 
                    className="text-sm font-medium text-[#5c7c3b] bg-[#5c7c3b]/10 !px-2 !py-1 rounded"
                    whileHover={{ scale: 1.05 }}
                  >
                    {cert.year}
                  </motion.span>
                </div>
                <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Certification;