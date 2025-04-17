import React, { useState } from 'react';
import RTRCIcon1 from '../../assets/icons/engineer.png';
import RTRCIcon2 from '../../assets/icons/architecture.png';
import RTRCIcon3 from '../../assets/icons/architect.png';

import IDRIcon1 from '../../assets/icons/kitchen-set.png';
import IDRIcon2 from '../../assets/icons/cabinet.png';
import IDRIcon3 from '../../assets/icons/closets.png';

import HRRIcon1 from '../../assets/icons/renovation.png';
import HRRIcon2 from '../../assets/icons/house.png';
import HRRIcon3 from '../../assets/icons/energy-control.png';

import PMIcon1 from '../../assets/icons/construction-site.png';
import PMIcon2 from '../../assets/icons/inspection.png';
import PMIcon3 from '../../assets/icons/tenant.png';
import { Link } from 'react-router-dom';

const HomeServices = () => {
  const [activeTab, setActiveTab] = useState('Roof-to-Roof Construction');

  const services = {
    'Roof-to-Roof Construction': [
      {
        icon: RTRCIcon1,
        link: "/services/roof-to-roof-construction",
        title: 'New Construction & Structural Development',
        description:
          "Turn your dream into a reality with our expert new construction and structural development services. You're constructing a dream house or constructing a commercial complex, we do it all with excellence at each step — from planning and permits to construction and completion. Our professionals are committed to quality workmanship, using sound materials and innovative methods to construct safe, long-lasting structures. We'll construct spaces that endure.",
      },
      {
        icon: RTRCIcon2,
        link: "/services/roof-to-roof-construction",
        title: 'Roofing Installation & Repair',
        description:
          "Shield your home or business with our highly-rated roof services. We offer roof installation, repair, and maintenance for homes and businesses. From new roof installation to storm damage repair, to yearly regular inspections, we only use the highest quality materials and install them to make your roof watertight and secure. Don't let loose shingles or leaks turn into a bigger problem — we've got you covered!",
      },
      {
        icon: RTRCIcon3,
        link: "/services/roof-to-roof-construction",
        title: 'Residential & Commercial Projects',
        description:
          'We solve from minor home renovation to big business structures, and we do so with enthusiasm and plenty of experience. We work with you to create one-of-a-kind solutions that meet your needs and budget. We are kitchen renovation, office enlargement, home makeover, all about quality, schedules, and exceeding expectations. We can help you build something great.',
      },
    ],
    'Interior Design & Remodeling': [
      {
        icon: IDRIcon1,
        link: "/services/interior-design-and-Remodeling",
        title: 'Kitchen & Bathroom Remodeling',
        description: 'Upgrade your kitchen and bathroom with modern designs, premium materials, and functional layouts. We transform outdated spaces into stylish, efficient, and comfortable areas tailored to your needs.',
      },
      {
        icon: IDRIcon2,
        link: "/services/interior-design-and-Remodeling",
        title: 'Flooring, Cabinets, & Lighting Design',
        description: 'Enhance your home’s aesthetic with high-quality flooring, custom cabinetry, and expertly designed lighting. From sleek hardwood floors to elegant cabinets and ambient lighting, we create spaces that blend beauty and functionality.',
      },
      {
        icon: IDRIcon3,
        link: "/services/interior-design-and-Remodeling",
        title: 'Custom Interior & Smart Home Upgrades',
        description: 'Personalize your home with custom interior designs and the latest smart home technology. From automated lighting and climate control to luxury finishes, we bring convenience, efficiency, and sophistication to your living space.',
      },
    ],
    'House Remodeling & Renovations': [
      {
        icon: HRRIcon1,
        link: "/services/house-remodeling-and-renovations",
        title: 'Complete Home Renovations',
        description: 'Transform your home with a full-scale renovation tailored to your style and needs. From structural upgrades to modern finishes, we enhance functionality, comfort, and aesthetics to create your dream living space.',
      },
      {
        icon: HRRIcon2,
        link: "/services/house-remodeling-and-renovations",
        title: 'Exterior & Interior Upgrades',
        description: 'Revamp your home’s look inside and out with expert upgrades. Whether it’s new siding, fresh paint, enhanced landscaping, or stylish interior improvements, we elevate your home’s beauty and value.',
      },
      {
        icon: HRRIcon3,
        link: "/services/house-remodeling-and-renovations",
        title: 'Energy-Efficient & Smart Home Solutions',
        description: 'Upgrade your home with eco-friendly and smart technology solutions. From energy-efficient appliances and lighting to smart security and automation, we help you save on costs while enjoying modern convenience.',
      },
    ],
    'Property Management': [
      {
        icon: PMIcon1,
        link: "/services/property-management",
        title: 'Rental Property Maintenance',
        description: 'Keep your rental property in top condition with our comprehensive maintenance services. We handle routine upkeep, emergency repairs, and seasonal maintenance to ensure a hassle-free experience for landlords and tenants.',
      },
      {
        icon: PMIcon2,
        link: "/services/property-management",
        title: 'Inspections & Compliance',
        description: 'Ensure your property meets all legal and safety requirements with our thorough inspection and compliance services. We conduct regular evaluations and address necessary updates to protect your investment and keep tenants safe.',
      },
      {
        icon: PMIcon3,
        link: "/services/property-management",
        title: 'Tenant Services & Repairs',
        description: 'Provide your tenants with reliable support through our dedicated services. From move-in assistance to 24/7 repair management, we handle tenant requests promptly, ensuring satisfaction and long-term occupancy.',
      },
    ],
  };

  return (
    <section className="!py-12 md:!py-18 !bg-gray-100">
      <div className="container mx-auto !px-5 lg:px-0">
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 !mb-4">
            <span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-[#5c7c3b] !mb-1 sm:!mb-2.5 !mr-1"></span>
            Services We Offers
            <span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-[#5c7c3b] !mb-1 sm:!mb-2.5 !ml-1"></span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
            Explore our wide range of services tailored to meet your needs.
          </p>
        </div>

        {/* Tabs */}
        <div className="hide-scrollbar overflow-x-auto whitespace-nowrap !my-8 sm:!my-12 border-2 border-solid border-[#5c7c3b] !p-1 rounded-lg text-center">
          <div className="inline-flex gap-3 sm:gap-5">
            {Object.keys(services).map((service) => (
              <button
                key={service}
                onClick={() => setActiveTab(service)}
                className={`!px-4 sm:!px-5 !py-2 sm:!py-3 rounded-lg text-sm sm:text-lg font-semibold transition-all duration-300 cursor-pointer ${activeTab === service
                  ? 'bg-[#5c7c3b] text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-md'
                  }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        {/* Active Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services[activeTab].map((service, index) => (
            <div
              key={index}
              className="card-container bg-gray-50 !p-6 sm:p-8 rounded-xl shadow-2xl relative overflow-hidden cursor-pointer flex flex-col"
            >
              <div className="card-content relative z-10 p-4 flex flex-col flex-grow">
                <div className="flex gap-3 items-center justify-center !mb-4">
                  <img
                    src={service.icon}
                    className="w-12 h-12 filter-[#5c7c3b] transition-all duration-300"
                    alt=""
                  />
                  <h3 className="text-md sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                </div>
                {/* Orange Line */}
                <span className="block w-[100px] h-[4px] bg-[#5c7c3b] !my-8 transition-all duration-300"></span>
                <p className="text-sm sm:text-md text-gray-600 flex-grow">{service.description}</p>
                {/* Learn More Button */}
                <Link to={service.link}>
                  <button className="border !border-b-4 !py-1 !px-2 border-[#5c7c3b] font-semibold !mt-4 rounded-lg cursor-pointer self-start">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hide Scrollbar CSS */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, and Opera */
        }

        /* Card Hover Effect */
        .card-container {
          transition: background-color 0.3s ease;
        }

        .card-container::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0;
          background: linear-gradient(to right, #5c7c3b, #2b4d2f);
          transition: height 0.5s ease;
          z-index: 1;
        }

        .card-container:hover::before {
          height: 100%;
        }

        /* Change text, span, and button colors on hover */
        .card-container:hover .card-content h3,
        .card-container:hover .card-content p,
        .card-container:hover .card-content span {
          color: white;
        }

        .card-container:hover .card-content button {
          color: white;
          border: 2px solid white;
        }

        .card-container:hover .card-content span {
          background-color: white; /* Change the orange line to white */
        }

        /* Icon Color Filter */
        .filter-[#5c7c3b] {
          filter: invert(70%) sepia(60%) saturate(1000%) hue-rotate(330deg) brightness(90%) contrast(90%);
        }

        /* Icon Color Change on Hover */
        .card-container:hover .filter-[#5c7c3b] {
          filter: brightness(0) invert(1); /* Makes the icon white */
        }
      `}</style>
    </section>
  );
};

export default HomeServices;