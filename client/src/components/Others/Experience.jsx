import React, { useState, useEffect } from 'react';

const Experience = () => {
  const stats = [
    { id: 1, number: 50, label: 'Completed Projects' },
    { id: 2, number: 10, label: 'Combined Years of Experience' },
    { id: 3, number: 5, label: 'And Counting Cities' },
    { id: 4, number: 10, label: 'Pool of Professionals' },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const increment = 10; // Time between increments in milliseconds

    const intervals = stats.map((stat, index) => {
      const step = Math.ceil(stat.number / (duration / increment));

      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.number) {
            newCounts[index] = Math.min(newCounts[index] + step, stat.number);
          }
          return newCounts;
        });
      }, increment);
    });

    // Clear intervals on unmount
    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <section className="!py-12 md:!py-18 aboutbg">
      <div className="container mx-auto !px-5 lg:px-0">
      <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white !mb-4"><span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-[#5c7c3b] !mb-2.5"></span> Your Vision, Our Expertise <span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-[#5c7c3b] !mb-2.5"></span></h2>
          <p className="text-base sm:text-lg text-gray-100 !mb-8 sm:!mb-12">
          Numbers Don’t Lie — We Build with Precision & Passion
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="bg-gray-100 !p-6 sm:!p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gray-200 cursor-pointer relative overflow-hidden"
            >
              {/* Orange Block with Index */}
              <div className="absolute top-0 left-0 w-12 h-12 bg-[#5c7c3b] flex items-center justify-center">
                <span className="text-white text-lg font-bold">{index + 1}</span>
              </div>

              {/* Card Content */}
              <div className="!mt-8">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                  {counts[index]}+
                </h3>
                <span className="inline-block w-[100px] h-[3px] bg-[#5c7c3b] !mb-2.5"></span>
                <p className="text-md sm:text-lg text-gray-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;