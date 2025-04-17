import React from 'react';

const ProjectContent = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-800 overflow-hidden">
      {/* Floating animated circles */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-purple-500 opacity-20 animate-float1"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-indigo-500 opacity-20 animate-float2"></div>
      <div className="absolute bottom-1/4 right-1/3 w-20 h-20 rounded-full bg-pink-500 opacity-20 animate-float3"></div>
      <div className="absolute bottom-1/3 left-1/3 w-12 h-12 rounded-full bg-blue-400 opacity-20 animate-float4"></div>
      <div className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full bg-teal-400 opacity-20 animate-float5"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-2xl !mx-4 !p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl text-center">
        <div className="!mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 !mx-auto text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white !mb-4">
          Exciting Projects <span className="text-yellow-300">Coming Soon!</span>
        </h1>
        
        <p className="text-xl text-white/80 !mb-8">
          We're working hard to bring you amazing projects. Stay tuned for updates!
        </p>
        
        <div className="animate-pulse">
          <div className="inline-flex items-center !px-6 !py-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full text-white font-medium shadow-lg transform transition hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 !mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                clipRule="evenodd"
              />
            </svg>
            We Will Notify You
          </div>
        </div>
      </div>

      {/* Add some floating small dots */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Add custom animations to Tailwind */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, 20px) rotate(5deg); }
          50% { transform: translate(0, 40px) rotate(0deg); }
          75% { transform: translate(-20px, 20px) rotate(-5deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-30px, 10px) rotate(-8deg); }
          50% { transform: translate(0, 30px) rotate(0deg); }
          75% { transform: translate(30px, 10px) rotate(8deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(15px, -15px) scale(1.1); }
        }
        @keyframes float4 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-10px, -20px); }
        }
        @keyframes float5 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(5px, 5px) rotate(2deg); }
          50% { transform: translate(0, 10px) rotate(0deg); }
          75% { transform: translate(-5px, 5px) rotate(-2deg); }
        }
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 1; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
        .animate-float1 { animation: float1 15s ease-in-out infinite; }
        .animate-float2 { animation: float2 18s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
        .animate-float4 { animation: float4 14s ease-in-out infinite; }
        .animate-float5 { animation: float5 16s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default ProjectContent;