import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../../assets/images/artaLogo.png';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const servicesLinkRef = useRef(null);
  const location = useLocation();

  const navLinks = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "services", label: "Services", path: "#", dropdown: true },
    { id: "project", label: "Project", path: "/projects" },
    { id: "faq", label: "FAQ", path: "/faq" },
    { id: "gallery", label: "Gallery", path: "/gallery" },
    { id: "contact", label: "Contact Us", path: "/contact" },
  ];

  const activeLink = navLinks.find((link) => link.path === location.pathname)?.id || "home";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesExpanded(!isServicesExpanded);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
    setIsServicesExpanded(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesDropdown = [
    {
      id: "roof-to-roof",
      label: "Roof-to-Roof Construction",
      icon: "🏠",
      description:
        "Comprehensive solutions for new construction, structural development, roofing installation, repair, and residential and commercial projects.",
      path: "/services/roof-to-roof-construction",
    },
    {
      id: "house-remodeling",
      label: "House Remodeling & Renovations",
      icon: "🔨",
      description:
        "Complete home renovations, including exterior and interior upgrades, energy-efficient solutions, and smart home integrations.",
      path: "/services/house-remodeling-and-renovations",
    },
    {
      id: "interior-design",
      label: "Interior Design & Remodeling",
      icon: "🎨",
      description:
        "Expert kitchen and bathroom remodeling, flooring, cabinets, lighting design, custom interiors, and smart home upgrades.",
      path: "/services/interior-design-and-Remodeling",
    },
    {
      id: "property-management",
      label: "Property Management",
      icon: "🏢",
      description:
        "Full-service rental property maintenance, inspections, compliance, tenant services, and repairs.",
      path: "/services/property-management",
    },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center h-[100px] !mx-5 lg:mx-auto">
          {/* Logo */}
          <div
            className={`text-2xl sm:text-3xl font-bold ${
              isScrolled ? "text-black" : "text-[#5c7c3b]"
            }`}
          >
            <img src={Logo} className="w-[150px] !py-5" alt="Arta Logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 !flex-1 justify-center">
            {navLinks.map((link) => (
              <div
                key={link.id}
                className="relative group"
                onMouseEnter={() => link.dropdown && setIsServicesHovered(true)}
                onMouseLeave={() => link.dropdown && setIsServicesHovered(false)}
                ref={link.dropdown ? servicesLinkRef : null}
              >
                <Link
                  to={link.path}
                  className={`px-4 py-2 font-semibold flex items-center space-x-2 !text-lg relative transition-colors duration-300 ${
                    activeLink === link.id
                      ? "text-[#5c7c3b]"
                      : isScrolled
                      ? "text-gray-800 hover:text-[#5c7c3b]"
                      : "text-white hover:text-[#5c7c3b]"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.dropdown && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isServicesHovered ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#5c7c3b] transform origin-left transition-transform duration-300 ${
                      activeLink === link.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </Link>

                {link.dropdown && isServicesHovered && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[700px] bg-white shadow-xl rounded-xl mt-3 !p-6 grid grid-cols-2 gap-6 border border-gray-100">
                    {servicesDropdown.map((service) => (
                      <Link
                        to={service.path}
                        key={service.id}
                        className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-[#5c7c3b]/10 transition-all duration-300 group"
                      >
                        <span className="text-2xl mt-1 transform group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </span>
                        <div>
                          <h3 className="font-semibold text-lg text-[#4c6d66] group-hover:text-[#5c7c3b] transition-colors duration-300">
                            {service.label}
                          </h3>
                          <p className="mt-2 text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Get Free Quotes Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-[#5c7c3b] text-white rounded-full hover:bg-[#072312] transition-colors duration-300 cursor-pointer !py-2 !px-6 font-semibold shadow-md hover:shadow-lg"
            >
              Get Free Quotes
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center justify-center lg:hidden">
            <button onClick={toggleMenu} className="text-[#5c7c3b] focus:outline-none">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="absolute top-4 right-4">
            <button onClick={toggleMenu} className="text-[#5c7c3b] focus:outline-none">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-start h-full !space-y-3 !px-6 !py-3 !mt-[90px] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.id} className="w-full border-b border-gray-200">
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={toggleServicesDropdown}
                      className={`!px-3 !py-3 text-lg font-semibold flex items-center justify-between w-full h-full relative ${
                        activeLink === link.id
                          ? "text-[#5c7c3b]"
                          : "text-gray-800 hover:text-[#5c7c3b]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isServicesExpanded ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isServicesExpanded ? "max-h-[600px]" : "max-h-0"
                      }`}
                    >
                      <div className="!space-y-4 !pl-6 !pt-2">
                        {servicesDropdown.map((service) => (
                          <Link
                            to={service.path}
                            key={service.id}
                            className="block"
                            onClick={handleNavLinkClick}
                          >
                            <div className="flex items-start space-x-3">
                              <span className="text-xl mt-1">{service.icon}</span>
                              <div>
                                <h3 className="font-semibold text-base text-[#4c6d66]">
                                  {service.label}
                                </h3>
                                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`!px-3 !py-4 text-lg font-semibold relative block ${
                      activeLink === link.id
                        ? "text-[#5c7c3b]"
                        : "text-gray-800 hover:text-[#5c7c3b]"
                    }`}
                    onClick={handleNavLinkClick}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="bg-[#5c7c3b] text-white rounded-full hover:bg-[#072312] transition-colors duration-300 cursor-pointer !py-2 !px-6 font-semibold"
              onClick={handleNavLinkClick}
            >
              Get Free Quotes
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;