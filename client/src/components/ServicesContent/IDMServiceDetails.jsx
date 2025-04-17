import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

import KitchenImg from '../../assets/images/interiorImg/whiteKitchen/IMG_0974.jpg';
import InteriorImg from '../../assets/images/interiorImg/outer/IMG_4770.jpg';
import HomeImg from '../../assets/images/interiorImg/whiteAlmira/IMG_0988.jpg';

const IDMServiceDetails = () => {
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
      {/* Floating organic shapes */}
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
        className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-[#5c7c3b] opacity-10 blur-lg  "
      />
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -25, 0],
          borderRadius: ["50%", "40%", "50%"]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#5c7c3b] opacity-10 blur-lg  "
      />
      <motion.div
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          rotate: [0, 15, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 right-1/3 w-16 h-16 rounded-full bg-[#5c7c3b] opacity-10 blur-lg  "
      />

      {/* Design line animation */}
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
            <h1 className="text-4xl md:text-6xl font-bold text-white !mb-4  ">Interior Design & Modernization</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl !mx-auto  ">
              Transforming spaces with innovative design and smart technology solutions
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
            { number: "20+", text: "Spaces Transformed" },
            { number: "98%", text: "Client Satisfaction" },
            { number: "24/7", text: "Design Support" }
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
          {/* Service 1: Kitchen & Bath Remodeling */}
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
                  src={KitchenImg}
                  alt="Kitchen & Bathroom Remodeling"
                  className="w-full h-64 md:h-[500px] object-cover  "
                />
              </motion.div>
              <motion.div
                animate={{
                  rotate: [0, 3, -3, 0],
                  y: [0, -5, 5, 0]
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
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 !mb-4  ">Kitchen & Bathroom Remodeling</h3>
              <p className="text-gray-600 !mb-6 text-lg  ">
                We transform your most-used spaces into functional works of art. From complete gut renovations to cosmetic updates, our team handles every detail with precision and style.
              </p>
              <ul className="!space-y-3 !mb-8  ">
                {[
                  "Custom cabinetry and storage solutions",
                  "Luxury fixture and appliance installation",
                  "Tile work and countertop fabrication",
                  "Plumbing and electrical upgrades",
                  "Space optimization and layout redesign",
                  "Eco-friendly material options"
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
                  Design Consultation
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Design Process Cards */}
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
                <span className="text-2xl font-bold text-white  ">1</span>
              </div>
              <h4 className="text-xl font-semibold !mb-2  ">Discovery</h4>
              <p className="text-gray-600  ">Understanding your vision and needs</p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white !p-6 rounded-xl shadow-lg border-l-4 border-[#5c7c3b]  "
            >
              <div className="w-12 h-12 bg-[#5c7c3b] bg-opacity-10 rounded-full flex items-center justify-center !mb-4  ">
                <span className="text-2xl font-bold text-white  ">2</span>
              </div>
              <h4 className="text-xl font-semibold !mb-2  ">Concept</h4>
              <p className="text-gray-600  ">Creating initial design concepts</p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white !p-6 rounded-xl shadow-lg border-l-4 border-[#5c7c3b]  "
            >
              <div className="w-12 h-12 bg-[#5c7c3b] bg-opacity-10 rounded-full flex items-center justify-center mb-4  ">
                <span className="text-2xl font-bold text-white  ">3</span>
              </div>
              <h4 className="text-xl font-semibold !mb-2  ">Development</h4>
              <p className="text-gray-600  ">Refining designs and selecting materials</p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white !p-6 rounded-xl shadow-lg border-l-4 border-[#5c7c3b]  "
            >
              <div className="w-12 h-12 bg-[#5c7c3b] bg-opacity-10 rounded-full flex items-center justify-center !mb-4  ">
                <span className="text-2xl font-bold text-white  ">4</span>
              </div>
              <h4 className="text-xl font-semibold !mb-2  ">Delivery</h4>
              <p className="text-gray-600  ">Installation and final reveal</p>
            </motion.div>
          </motion.div>

          {/* Service 2: Flooring, Cabinets & Lighting */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8 items-center  "
          >
            <div className=" ">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 !mb-4  ">Flooring, Cabinets & Lighting Design</h3>
              <p className="text-gray-600 !mb-6 text-lg  ">
                The foundation of beautiful interiors lies in these essential elements. We provide expert guidance and installation for surfaces, storage, and illumination that work in harmony.
              </p>

              {/* Material Options Cards */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 !mb-8  "
              >
                {[
                  { name: "Flooring", icon: "🪵", items: ["Hardwood", "Tile", "Luxury Vinyl", "Laminate"] },
                  { name: "Cabinets", icon: "🗄️", items: ["Custom Built-ins", "Refacing", "Premium Finishes", "Organizers"] },
                  { name: "Lighting", icon: "💡", items: ["Recessed", "Pendants", "Smart Systems", "Ambient Layers"] }
                ].map((category, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white !p-4 rounded-lg shadow-md border border-gray-100  "
                  >
                    <div className="text-center !mb-3  ">
                      <span className="text-2xl block  ">{category.icon}</span>
                      <h4 className="font-medium text-gray-800  ">{category.name}</h4>
                    </div>
                    <ul className="!space-y-2 text-sm  ">
                      {category.items.map((item, i) => (
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
                  Explore Options
                </motion.button>
              </Link>
            </div>
            <div className="relative  ">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden relative z-10  "
              >
                <img
                  src={InteriorImg}
                  alt="Flooring, Cabinets & Lighting"
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

          {/* Style Showcase */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className=" "
          >
            <h3 className="text-2xl font-bold text-center !mb-8 text-gray-800  ">Popular Design Styles We Master</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4  ">
              {[
                { name: "Modern", color: "bg-gray-800", text: "text-white" },
                { name: "Transitional", color: "bg-amber-100", text: "text-gray-800" },
                { name: "Industrial", color: "bg-gray-400", text: "text-gray-900" },
                { name: "Minimalist", color: "bg-white", text: "text-gray-800", border: "border border-gray-200" }
              ].map((style, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                  className={`${style.color} ${style.text} ${style.border || ''} !p-4 rounded-lg text-center font-medium shadow-md  `}
                >
                  {style.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Service 3: Custom Interior & Smart Home */}
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
                  src={HomeImg}
                  alt="Custom Interior & Smart Home Upgrades"
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
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 !mb-4  ">Custom Interior & Smart Home Upgrades</h3>
              <p className="text-gray-600 !mb-6 text-lg  ">
                Elevate your living experience with bespoke interiors and cutting-edge home automation. We blend aesthetic design with technological innovation for spaces that are both beautiful and brilliantly functional.
              </p>

              {/* Smart Home Features */}
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
                  <h4 className="text-xl font-semibold mb-4 text-[#5c7c3b]  ">Custom Interiors</h4>
                  <ul className="!space-y-3  ">
                    {["Built-in furniture", "Wall treatments", "Custom millwork", "Window treatments", "Accent features"].map((item, index) => (
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
                  <h4 className="text-xl font-semibold !mb-4 text-[#5c7c3b]  ">Smart Home Tech</h4>
                  <ul className="!space-y-3  ">
                    {["Lighting control", "Climate automation", "Security systems", "Entertainment setups", "Whole-home integration"].map((item, index) => (
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
                  Schedule Tech Demo
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
            <h2 className="text-3xl md:text-4xl font-bold text-white !mb-6  ">Ready to Transform Your Space?</h2>
            <p className="text-xl text-white !mb-8 max-w-2xl !mx-auto  ">
              Schedule a free design consultation and discover what's possible for your home or office.
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
              <Link to='/gallery'>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="!px-8 !py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg text-lg cursor-pointer"
                >
                  Virtual Tour Option
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IDMServiceDetails;