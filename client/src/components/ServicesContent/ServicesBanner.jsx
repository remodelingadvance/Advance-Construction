import React from 'react';
import { Link } from 'react-router-dom';

const ServicesBanner = ({ RTRBanner, HRRBanner, IDRBanner, PMBanner }) => {
  const banner = RTRBanner || HRRBanner || IDRBanner || PMBanner;
  const phoneNumber = '+17862109819';
  return (
    <div className="bg-gray-100 !py-12">
      <div className="container !mx-auto !px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Content Section */}
          <div className="md:w-1/2 md:!pr-8 !mb-8 md:!mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 !mb-4">
              {banner.Headline}
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 !mb-4">
            <span className="inline-block w-[50px] h-[3px] bg-[#5c7c3b] !mb-1 !mr-1"></span> 
              {banner.Subheadline}
            </h2>
            <p className="text-gray-600 !mb-6">
              {banner.Description}
            </p>
            <div className="flex gap-4">
              {/* Call Now Button */}
              <a
                href={`tel:${phoneNumber}`}
                className="border-2 !py-2 !px-4 border-[#5c7c3b] text-white font-semibold !mt-10 rounded-lg cursor-pointer bg-[#5c7c3b] hover:bg-white hover:text-black transition-all"
              >
                Call Now
              </a>

              {/* Get Free Quotes Button */}
              <Link
                to="/contact" // Replace with your contact page route
                className="border-2 !py-2 !px-4 border-[#5c7c3b] font-semibold !mt-10 rounded-lg cursor-pointer hover:bg-[#5c7c3b] hover:text-white transition-all"
              >
                Get Free Quotes
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={banner.HeroImage}
              alt="Banner"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;