import React from 'react';
import Banner1 from '../../assets/images/homeBanner1.jpg';
import Banner2 from '../../assets/images/homeBanner2.jpg';
import Banner3 from '../../assets/images/homeBanner3.jpg';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
  const phoneNumber = '+17862109819';
  return (
    <section className='!mt-[-100px] bg-gray-100 py-10 z-100'>
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="bg-white/30 backdrop-blur-md shadow-md !p-5 !py-7 h-[470px] sm:h-[420px] w-full lg:w-1/2 order-2 lg:order-1">
            <p className="text-lg text-[#5c7c3b] font-semibold mb-2">Building Dreams, One Brick at a Time</p>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">Transforming Homes, Elevating Lifestyles</h1>
            <span className="block w-[300px] h-[4px] bg-[#5c7c3b] !my-8"></span>
            <p className="text-lg text-gray-200font-semibold mb-2"><span className="inline-block w-[50px] h-[3px] bg-[#5c7c3b] !mb-1"></span> Your house is not just a house – it's where your dreams become a reality and memories are made. Our skilled builders, contractors, and designers go the extra mile to make your dreams a reality with professional workmanship and meticulous attention to detail.
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

          <div className="bg-white/30 backdrop-blur-md shadow-md !p-5 w-full lg:w-1/2 flex gap-4 items-center justify-center order-1  lg:order-2">
            <div className="flex flex-col gap-4">
              <img src={Banner2} alt="Banner 2" className='rounded-lg shadow-md w-[200px] h-[80px] sm:w-[300px] sm:h-[180px] object-cover' />
              <img src={Banner3} alt="Banner 3" className='rounded-lg shadow-md w-[200px] h-[80px] sm:w-[300px] sm:h-[180px] object-cover' />
            </div>
            <img src={Banner1} alt="Banner 1" className='w-[180px] h-[180px] sm:w-[280px] sm:h-[380px] rounded-lg shadow-md object-cover' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
