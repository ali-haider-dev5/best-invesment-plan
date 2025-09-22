import React from 'react';
import AllServices from '@/components/AllServices'

const ServicesHero = () => {
  return (
    <>
    <div className="bg-[#f4f4f4] dark:bg-[#0f131b] py-[220px] flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl dark:[#f4a950] text-[#f4a950] sm:text-5xl lg:text-6xl font-extrabold  leading-tight">
          Our Services For All users
        </h1>
        <p className="mt-4 text-lg dark:text-white sm:text-xl text-gray-800 max-w-2xl mx-auto">
          We offer a comprehensive suite of services designed to help you achieve your business goals and drive measurable growth.
        </p>
        <button className="mt-8 px-8 text-bold uppercase py-4 bg-[#f4a950] text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-[#0da7ec26]">
          Get Started
        </button>
      </div>
    </div>
    <AllServices />
    </>
  );
};

export default ServicesHero;