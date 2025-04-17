import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

import HRRCont1 from '../../assets/images/interiorImg/pinkRoom/IMG_4753.jpg'
import HRRCont2 from '../../assets/images/hrrCont2.avif'
import HRRCont3 from '../../assets/images/interiorImg/brownBedroom/IMG_4803.jpg'

import PBedroom2 from '../../assets/images/interiorImg/pinkRoom/IMG_4754.jpg';
import BWBedroom3 from '../../assets/images/interiorImg/blackWhiteroom/IMG_0100.jpg';
import BKitchen2 from '../../assets/images/interiorImg/blackKitchen/IMG_0024.jpg';
import WKitchen3 from '../../assets/images/interiorImg/whiteKitchen/IMG_0974.jpg';
import Outer3 from '../../assets/images/interiorImg/outer/IMG_4782.jpg';
import BRashroom4 from '../../assets/images/interiorImg/brownWashroom/IMG_4698.jpg';

const HRRServiceDetail = () => {
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

  // Background animation elements
  const BackgroundShapes = () => (
    <>
      {/* Floating renovation-themed shapes */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 25, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-20 h-20 rounded-lg bg-[#5c7c3b] opacity-10 blur-lg  "
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          borderRadius: ["10%", "30%", "10%"]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#5c7c3b] opacity-10 blur-lg  "
      />
      <motion.div
        animate={{
          y: [0, -50, 0],
          rotate: [0, 360, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 right-1/3 w-16 h-16 rounded-full bg-[#5c7c3b] opacity-10 blur-lg  "
      />

      {/* Renovation line animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-[#5c7c3b] opacity-30 origin-left  "
      />
    </>
  );

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden relative  ">
      {/* Background animations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none  ">
        <BackgroundShapes />
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800  ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { scale: 1.2, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 0.2,
              transition: {
                duration: 1.5,
                ease: "easeOut"
              }
            }
          }}
          className="absolute inset-0 bg-[#5c7c3b] mix-blend-overlay  "
        />

        <div className="container !mx-auto !px-4 !py-24 md:!py-32 relative z-10  ">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white !mb-4  ">Home Renovation & Remodeling</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl !mx-auto  ">
              Transforming houses into dream homes with comprehensive renovation solutions
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="container !mx-auto !px-4 !-mt-16 relative z-20  ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6  "
        >
          {[
            { number: "15+", text: "Homes Transformed" },
            { number: "25%", text: "Energy Savings Average" },
            { number: "5-Star", text: "Rated Service" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-2xl !p-6 text-center border-t-4 border-[#5c7c3b]  "
            >
              <h3 className="text-4xl font-bold text-[#5c7c3b] !mb-2  ">{stat.number}</h3>
              <p className="text-gray-600 text-lg  ">{stat.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="container !mx-auto !px-4 !py-16 md:!py-24 relative z-10  ">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid gap-16 md:gap-24  "
        >
          {/* Service 1: Complete Home Renovations */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8 items-center  "
          >
            <div className="order-2 md:order-1 relative  ">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden relative z-10  "
              >
                <img
                  src={HRRCont1}
                  alt="Complete Home Renovations"
                  className="w-full h-64 md:h-[450px] object-cover  "
                />
              </motion.div>
              <motion.div
                animate={{
                  rotate: [0, 3, -3, 0],
                  y: [0, -10, 10, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-6 -right-6 bg-[#5c7c3b] w-24 h-24 rounded-lg opacity-20 -z-10  "
              />
            </div>
            <div className="order-1 md:order-2  ">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 !mb-4  ">Complete Home Renovations</h3>
              <p className="text-gray-600 !mb-6 text-lg  ">
                We handle every aspect of your home transformation, from structural changes to final finishes. Our whole-home approach ensures cohesive design and functionality throughout your entire living space.
              </p>
              <ul className="!space-y-3 !mb-8  ">
                {[
                  "Full home demolition and reconstruction",
                  "Structural modifications and additions",
                  "Complete interior redesign",
                  "Plumbing and electrical system overhauls",
                  "Custom architectural details",
                  "Project management from start to finish"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start  "
                  >
                    <svg className="w-5 h-5 text-[#5c7c3b] !mt-1 !mr-2 flex-shrink-0  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700  ">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link to='/contact'>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#4a6a2f" }}
                  whileTap={{ scale: 0.95 }}
                  className="!px-8 !py-3 bg-[#5c7c3b] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                >
                  Plan Your Renovation
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Renovation Process Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6  "
          >
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white !p-6 rounded-xl shadow-lg border-l-4 border-[#5c7c3b]  "
            >
              <div className="w-12 h-12 bg-[#5c7c3b] bg-opacity-10 rounded-full flex items-center justify-center !mb-4  ">
                <span className="text-2xl font-bold text-white ">1</span>
              </div>
              <h4 className="text-xl font-semibold !mb-2  ">Assessment</h4>
              <p className="text-gray-600  ">Detailed home evaluation and planning</p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white !p-6 rounded-xl shadow-lg border-l-4 border-[#5c7c3b]  "
            >
              <div className="w-12 h-12 bg-[#5c7c3b] bg-opacity-10 rounded-full flex items-center justify-center !mb-4  ">
                <span className="text-2xl font-bold text-white ">2</span>
              </div>
              <h4 className="text-xl font-semibold !mb-2  ">Design</h4>
              <p className="text-gray-600  ">Creating your custom renovation plan</p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white !p-6 rounded-xl shadow-lg border-l-4 border-[#5c7c3b]  "
            >
              <div className="w-12 h-12 bg-[#5c7c3b] bg-opacity-10 rounded-full flex items-center justify-center !mb-4  ">
                <span className="text-2xl font-bold text-white  ">3</span>
              </div>
              <h4 className="text-xl font-semibold !mb-2  ">Construction</h4>
              <p className="text-gray-600  ">Quality craftsmanship and installation</p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white !p-6 rounded-xl shadow-lg border-l-4 border-[#5c7c3b]  "
            >
              <div className="w-12 h-12 bg-[#5c7c3b] bg-opacity-10 rounded-full flex items-center justify-center !mb-4  ">
                <span className="text-2xl font-bold text-white  ">4</span>
              </div>
              <h4 className="text-xl font-semibold !mb-2  ">Reveal</h4>
              <p className="text-gray-600  ">Final walkthrough and project completion</p>
            </motion.div>
          </motion.div>

          {/* Service 2: Exterior & Interior Upgrades */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8 items-center  "
          >
            <div className=" ">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 !mb-4  ">Exterior & Interior Upgrades</h3>
              <p className="text-gray-600 !mb-6 text-lg  ">
                Enhance your home's curb appeal and interior comfort with our targeted upgrade services. Whether you're preparing to sell or simply want to enjoy a refreshed living space, we have the perfect solutions.
              </p>

              {/* Upgrade Options Cards */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 !mb-8  "
              >
                {[
                  {
                    title: "Exterior Upgrades",
                    icon: "🏡",
                    items: ["Siding replacement", "Roofing updates", "Window/door upgrades", "Deck/patio construction", "Landscaping integration"]
                  },
                  {
                    title: "Interior Upgrades",
                    icon: "🛋️",
                    items: ["Flooring replacement", "Kitchen/bath updates", "Lighting upgrades", "Wall treatments", "Trim/molding installation"]
                  }
                ].map((option, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white !p-4 rounded-lg shadow-md border border-gray-100  "
                  >
                    <div className="flex items-center !mb-3  ">
                      <span className="text-2xl !mr-3  ">{option.icon}</span>
                      <h4 className="font-semibold text-gray-800  ">{option.title}</h4>
                    </div>
                    <ul className="!space-y-2 text-sm  ">
                      {option.items.map((item, i) => (
                        <li key={i} className="flex items-center  ">
                          <svg className="w-3 h-3 text-[#5c7c3b] !mr-2 flex-shrink-0  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700  ">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>

              <Link to='/contact'>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#4a6a2f" }}
                  whileTap={{ scale: 0.95 }}
                  className="!px-8 !py-3 bg-[#5c7c3b] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                >
                  Explore Upgrade Options
                </motion.button>
              </Link>
            </div>
            <div className="relative  ">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden relative z-10  "
              >
                <img
                  src={HRRCont2}
                  alt="Exterior & Interior Upgrades"
                  className="w-full h-64 md:h-[450px] object-cover  "
                />
              </motion.div>
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  borderRadius: ["20%", "30%", "20%"]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -left-6 bg-[#5c7c3b] w-20 h-20 opacity-20 -z-10  "
              />
            </div>
          </motion.div>

          {/* Before/After Showcase */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className=" "
          >
            <h3 className="text-2xl font-bold text-center !mb-8 text-gray-800  ">Transformation Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
              {[
                {
                  title: "Bedroom Remodel",
                  before: PBedroom2,
                  after: BWBedroom3
                },
                {
                  title: "Kitchen Remodel",
                  before: BKitchen2,
                  after: WKitchen3
                },
                {
                  title: "Interior Conversion",
                  before: Outer3,
                  after: BRashroom4
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden  "
                >
                  <h4 className="text-center !py-3 font-medium bg-gray-50  ">{project.title}</h4>
                  <div className="grid grid-cols-2 !p-4 gap-4  ">
                    <div>
                      <img src={project.before} alt={`Before ${project.title}`} className="w-full h-32 object-cover rounded  " />
                    </div>
                    <div>
                      <img src={project.after} alt={`After ${project.title}`} className="w-full h-32 object-cover rounded  " />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Service 3: Energy-Efficient & Smart Home */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8 items-center  "
          >
            <div className="order-2 md:order-1 relative  ">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden relative z-10  "
              >
                <img
                  src={HRRCont3}
                  alt="Energy-Efficient & Smart Home Solutions"
                  className="w-full h-64 md:h-[550px] object-cover  "
                />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-8 -right-8 bg-[#5c7c3b] w-16 h-16 opacity-10 -z-10  "
              />
            </div>
            <div className="order-1 md:order-2  ">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 !mb-4  ">Energy-Efficient & Smart Home Solutions</h3>
              <p className="text-gray-600 !mb-6 text-lg  ">
                Modernize your home with technology that saves money and simplifies life. Our eco-friendly upgrades and smart systems work together to create a home that's both sustainable and sophisticated.
              </p>

              {/* Efficiency Features */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 !mb-8  "
              >
                <motion.div
                  variants={cardVariants}
                  className="bg-white !p-6 rounded-xl shadow-lg border-t-4 border-[#5c7c3b]  "
                >
                  <h4 className="text-xl font-semibold !mb-4 text-[#5c7c3b]  ">Energy Efficiency</h4>
                  <ul className="!space-y-3  ">
                    {["Insulation upgrades", "High-efficiency windows", "Solar solutions", "HVAC optimization", "Water-saving fixtures"].map((item, index) => (
                      <li key={index} className="flex items-start  ">
                        <svg className="w-5 h-5 text-[#5c7c3b] !mt-1 !mr-2 flex-shrink-0  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700  ">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  variants={cardVariants}
                  className="bg-white !p-6 rounded-xl shadow-lg border-t-4 border-[#5c7c3b]  "
                >
                  <h4 className="text-xl font-semibold !mb-4 text-[#5c7c3b]  ">Smart Technology</h4>
                  <ul className="!space-y-3  ">
                    {["Home automation systems", "Energy monitoring", "Smart lighting", "Security integration", "Voice control setup"].map((item, index) => (
                      <li key={index} className="flex items-start  ">
                        <svg className="w-5 h-5 text-[#5c7c3b] !mt-1 !mr-2 flex-shrink-0  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700  ">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>

              <Link to='/contact'>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#4a6a2f" }}
                  whileTap={{ scale: 0.95 }}
                  className="!px-8 !py-3 bg-[#5c7c3b] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                >
                  Calculate Your Savings
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#5c7c3b] !py-16 md:!py-24 relative overflow-hidden  ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-black mix-blend-overlay  "
        />
        <div className="container !mx-auto !px-4 text-center relative z-10  ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white !mb-6  ">Ready to Transform Your Home?</h2>
            <p className="text-xl text-white !mb-8 max-w-2xl !mx-auto  ">
              Schedule a free consultation to discuss your renovation dreams with our experts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4  ">
              <Link to='/contact'>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#4a6a2f" }}
                  whileTap={{ scale: 0.95 }}
                  className="!px-8 !py-4 bg-white text-[#5c7c3b] font-bold rounded-lg shadow-lg text-lg cursor-pointer"
                >
                  Book Consultation
                </motion.button>
              </Link>
              <Link to='/about'>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="!px-8 !py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg text-lg cursor-pointer"
                >
                  View Portfolio
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HRRServiceDetail;