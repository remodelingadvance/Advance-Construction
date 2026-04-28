// NotFound.tsx (Modern Construction Theme UI)
import React from 'react'
import { Link } from 'react-router-dom';
import { FiHome, FiArrowLeft } from 'react-icons/fi';
import NotFoundImage from '../assets/images/not-found.jpg'; 

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center !px-4 !py-12 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={NotFoundImage}
          alt="construction"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Card */}
      <div className="relative max-w-md w-full !mx-auto text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl !p-8">

        {/* 404 Heading */}
        <div className="!mb-6">
          <h1 className="text-[100px] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 drop-shadow-lg">
            404
          </h1>

          {/* Icon */}
          <div className="text-5xl !mb-3 animate-pulse">🚧</div>

          <h2 className="text-2xl font-bold text-white !mb-2 tracking-wide">
            Page Not Found
          </h2>

          <div className="w-20 h-[2px] bg-green-500 !mx-auto !mb-4 rounded-full" />

          <p className="text-gray-300 text-sm leading-relaxed">
            The admin page you’re trying to access doesn’t exist or is currently under construction.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">

          {/* Dashboard Button */}
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-2 !px-5 !py-2.5 bg-green-600 text-white rounded-xl hover:bg-green-500 transition-all duration-300 shadow-lg hover:shadow-green-500/30 cursor-pointer"
          >
            <FiHome className="w-4 h-4 group-hover:scale-110 transition" />
            Home
          </Link>

          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center justify-center gap-2 !px-5 !py-2.5 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 cursor-pointer"
          >
            <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" />
            Go Back
          </button>

        </div>

        {/* Footer hint */}
        <div className="!mt-6 text-xs text-gray-400">
          Error Code: 404 | GenerationFix Admin
        </div>

      </div>
    </div>
  );
};

export default NotFound;