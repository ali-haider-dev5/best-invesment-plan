import React from 'react';
import AllServices from '@/components/AllServices'

const ServicesHero = () => {
  return (
    <>
    <div className="bg-[#0da7ec26] dark:bg-[#1f2938] py-[220px] flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl dark:text-white sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Our Services For All user
        </h1>
        <p className="mt-4 text-lg dark:text-white sm:text-xl text-gray-800 max-w-2xl mx-auto">
          We offer a comprehensive suite of services designed to help you achieve your business goals and drive measurable growth.
        </p>
        <button className="mt-8 px-8 text-bold uppercase py-4 bg-[#0ea5e9] text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-[#0da7ec26]">
          Get Started
        </button>
      </div>
    </div>
    <AllServices />
    </>
  );
};

export default ServicesHero;