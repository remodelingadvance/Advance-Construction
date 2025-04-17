import React from "react";
import { Link } from "react-router-dom";

const Subscribe = () => {
  const phoneNumber = '+17862109819';
  return (
    <div className="subbg !py-20 relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="!py-12 !px-6 sm:!px-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl text-center">
          {/* Heading */}
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 !mb-4">
            Let’s Turn Your House Into Your Dream Home!
          </h3>

          {/* Subheading */}
          <p className="text-lg text-gray-600 !mb-8">
            Contact us today for a consultation and let’s bring your vision to life.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
      </div>
    </div>
  );
};

export default Subscribe;