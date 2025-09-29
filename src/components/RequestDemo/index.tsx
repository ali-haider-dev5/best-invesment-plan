import React from 'react';

export default function RequestDemo() {
  return (
    <div className="bg-[#f9f8f6]  dark:bg-[#1a2332] py-24 flex items-center justify-center p-8">
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl dark:text-white font-extrabold text-[#485669] leading-tight">
          <span className='text-[#f4a950]'>Ready to hear it</span> <br /><span className='dark:text-white text-[#333333]'> for yourself?</span>
        </h2>
        <p className="mt-4 text-lg dark:text-white text-[#555555] max-w-lg mx-auto">
          Get a personalized demo to learn how PolyAI can help you drive measurable business value.
        </p>
        <button className="mt-8 px-8 py-4 bg-[#f4a950] text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-lime-300">
          Request a demo
        </button>
      </div>
    </div>
  );
}