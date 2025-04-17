import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

import PMCont1 from '../../assets/images/pmCont1.avif'
import PMCont2 from '../../assets/images/pmCont2.avif'
import PMCont3 from '../../assets/images/pmCont3.avif'

const PMServiceDetails = () => {
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
      {/* Floating property-themed shapes */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 5, 0]
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
          y: [0, 40, 0],
          x: [0, -25, 0],
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
      
      {/* Property line animation */}
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
            <h1 className="text-4xl md:text-6xl font-bold text-white !mb-4  ">Property Management Services</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl !mx-auto  ">
              Comprehensive solutions for landlords and property owners to maximize value and minimize hassle
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
            { number: "99%", text: "Occupancy Rate" },
            { number: "24/7", text: "Emergency Response" },
            { number: "15+", text: "Properties Managed" }
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
          {/* Service 1: Rental Property Maintenance */}
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
                  src={PMCont1}
                  alt="Rental Property Maintenance" 
                  className="w-full h-64 md:h-[500px] object-cover  "
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
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 !mb-4  ">Rental Property Maintenance</h3>
              <p className="text-gray-600 !mb-6 text-lg  ">
                Proactive and responsive maintenance services to keep your property in top condition. Our network of licensed professionals ensures quality work at competitive rates.
              </p>
              <ul className="!space-y-3 !mb-8  ">
                {[
                  "Preventative maintenance programs",
                  "24/7 emergency repair services",
                  "Landscaping and exterior upkeep",
                  "HVAC system maintenance",
                  "Plumbing and electrical repairs",
                  "Pest control coordination"
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
                Request Maintenance Plan
              </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Maintenance Tiers */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6  "
          >
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white !p-6 rounded-xl shadow-lg border-l-4 border-[#5c7c3b]  "
            >
              <div className="w-12 h-12 bg-[#5c7c3b] bg-opacity-10 rounded-full flex items-center justify-center !mb-4  ">
                <span className="text-2xl font-bold text-white  ">B</span>
              </div>
              <h4 className="text-xl font-semibold! mb-2  ">Basic Care</h4>
              <p className="text-gray-600 !mb-4  ">Essential maintenance for cost-conscious owners</p>
              <ul className="!space-y-2 text-sm  ">
                <li className="flex items-start  ">
                  <svg className="w-4 h-4 text-[#5c7c3b] !mt-0.5 !mr-2 flex-shrink-0  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Emergency repairs only</span>
                </li>
                <li className="flex items-start  ">
                  <svg className="w-4 h-4 text-[#5c7c3b] !mt-0.5 !mr-2 flex-shrink-0  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Tenant-initiated requests</span>
                </li>
                <li className="flex items-start  ">
                  <svg className="w-4 h-4 text-[#5c7c3b] !mt-0.5 !mr-2 flex-shrink-0  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Basic vendor network</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white !p-6 rounded-xl shadow-lg border-l-4 border-[#5c7c3b] transform scale-105  "
            >
              <div className="w-12 h-12 bg-[#5c7c3b] bg-opacity-20 rounded-full flex items-center justify-center !mb-4  ">
                <span className="text-2xl font-bold text-white ">P</span>
              </div>
              <h4 className="text-xl font-semibold !mb-2  ">Premium Care</h4>
              <p className="text-gray-600 !mb-4  ">Our most popular comprehensive package</p>
              <ul className="!space-y-2 text-sm  ">
                <li className="flex items-start  ">
                  <svg className="w-4 h-4 text-[#5c7c3b] !mt-0.5 !mr-2 flex-shrink-0  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Quarterly preventative maintenance</span>
                </li>
                <li className="flex items-start  ">
                  <svg className="w-4 h-4 text-[#5c7c3b] !mt-0.5 !mr-2 flex-shrink-0  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Priority emergency response</span>
                </li>
                <li className="flex items-start  ">
                  <svg className="w-4 h-4 text-[#5c7c3b] !mt-0.5 !mr-2 flex-shrink-0  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Premium vendor network</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white !p-6 rounded-xl shadow-lg border-l-4 border-[#5c7c3b]  "
            >
              <div className="w-12 h-12 bg-[#5c7c3b] bg-opacity-10 rounded-full flex items-center justify-center !mb-4  ">
                <span className="text-2xl font-bold text-white  ">V</span>
              </div>
              <h4 className="text-xl font-semibold mb-2  ">VIP Care</h4>
              <p className="text-gray-600 !mb-4  ">White-glove service for luxury properties</p>
              <ul className="!space-y-2 text-sm  ">
                <li className="flex items-start  ">
                  <svg className="w-4 h-4 text-[#5c7c3b] !mt-0.5 !mr-2 flex-shrink-0  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Monthly property inspections</span>
                </li>
                <li className="flex items-start  ">
                  <svg className="w-4 h-4 text-[#5c7c3b] !mt-0.5 !mr-2 flex-shrink-0  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>24/7 dedicated support line</span>
                </li>
                <li className="flex items-start  ">
                  <svg className="w-4 h-4 text-[#5c7c3b] !mt-0.5 !mr-2 flex-shrink-0  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Concierge-level vendor service</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Service 2: Inspections & Compliance */}
          <motion.div 
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8 items-center  "
          >
            <div className=" ">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 !mb-4  ">Inspections & Compliance</h3>
              <p className="text-gray-600 !mb-6 text-lg  ">
                Stay protected with thorough property evaluations and regulatory compliance management. We ensure your property meets all legal requirements while maintaining optimal condition.
              </p>
              
              {/* Inspection Cards */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 !mb-8  "
              >
                {[
                  { 
                    title: "Move-In/Move-Out", 
                    icon: "🚚",
                    items: ["Detailed condition reports", "Photo documentation", "Damage assessment", "Security deposit evaluation"]
                  },
                  { 
                    title: "Compliance", 
                    icon: "📋",
                    items: ["Local regulation checks", "Safety code compliance", "Accessibility audits", "Lead paint/asbestos testing"]
                  }
                ].map((inspection, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white !p-4 rounded-lg shadow-md border border-gray-100  "
                  >
                    <div className="flex items-center !mb-3  ">
                      <span className="text-2xl !mr-3  ">{inspection.icon}</span>
                      <h4 className="font-semibold text-gray-800  ">{inspection.title}</h4>
                    </div>
                    <ul className="space-y-2 text-sm  ">
                      {inspection.items.map((item, i) => (
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
                Schedule Inspection
              </motion.button>
              </Link>
            </div>
            <div className="relative  ">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden relative z-10  "
              >
                <img 
                  src={PMCont2}
                  alt="Inspections & Compliance" 
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

          {/* Compliance Checklist */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg !p-6 md:!p-8  "
          >
            <h3 className="text-2xl font-bold text-center !mb-6 text-gray-800  ">Our Compliance Checklist</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  ">
              {[
                { category: "Safety", items: ["Smoke detectors", "CO detectors", "Fire extinguishers", "Egress windows"] },
                { category: "Structural", items: ["Foundation integrity", "Roof condition", "Handrails", "Flooring safety"] },
                { category: "Systems", items: ["Electrical wiring", "Plumbing function", "HVAC operation", "Water heater"] },
                { category: "Environmental", items: ["Mold inspection", "Pest control", "Radon testing", "Ventilation"] }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="border border-gray-200 rounded-lg !p-4  "
                >
                  <h4 className="font-semibold text-lg !mb-3 text-[#5c7c3b]  ">{section.category}</h4>
                  <ul className="!space-y-2  ">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start  ">
                        <svg className="w-4 h-4 text-[#5c7c3b] !mt-0.5 !mr-2 flex-shrink-0  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700 text-sm  ">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Service 3: Tenant Services & Repairs */}
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
                  src={PMCont3} 
                  alt="Tenant Services & Repairs" 
                  className="w-full h-64 md:h-[550pX] object-cover  "
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
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 !mb-4  ">Tenant Services & Repairs</h3>
              <p className="text-gray-600 !mb-6 text-lg  ">
                Quality service for your tenants means longer leases and better care for your property. Our tenant-focused approach ensures satisfaction while protecting your investment.
              </p>
              
              {/* Tenant Services Features */}
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
                  <h4 className="text-xl font-semibold !mb-4 text-[#5c7c3b]  ">Tenant Support</h4>
                  <ul className="!space-y-3  ">
                    {["24/7 maintenance hotline", "Online portal for requests", "Rent payment processing", "Lease renewal assistance", "Community resource referrals"].map((item, index) => (
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
                  <h4 className="text-xl font-semibold !mb-4 text-[#5c7c3b]  ">Repair Services</h4>
                  <ul className="!space-y-3  ">
                    {["Priority response system", "Vetted repair technicians", "Transparent pricing", "Quality guarantee", "Follow-up inspections"].map((item, index) => (
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
                View Tenant Portal
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
            <h2 className="text-3xl md:text-4xl font-bold text-white !mb-6  ">Ready to Simplify Property Management?</h2>
            <p className="text-xl text-white !mb-8 max-w-2xl !mx-auto  ">
              Let us handle the details while you enjoy the benefits of property ownership.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4  ">
              <Link to='/contact'>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#4a6a2f" }}
                whileTap={{ scale: 0.95 }}
                className="!px-8 !py-4 bg-white text-[#5c7c3b] font-bold rounded-lg shadow-lg text-lg cursor-pointer"
              >
                Get Started Today
              </motion.button>
              </Link>
              <Link to='tel:+17862109819'>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="!px-8 !py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg text-lg cursor-pointer"
              >
                Call: +17862109819
              </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PMServiceDetails;