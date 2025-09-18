import React from 'react';

export default function RequestDemo() {
  return (
    <div className="bg-[#f6fafc] dark:bg-[#3f4c5f] py-16 flex items-center justify-center p-8">
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl dark:text-white font-extrabold text-[#485669] leading-tight">
          Ready to hear it <br /> for yourself?
        </h2>
        <p className="mt-4 text-lg dark:text-white text-gray-800 max-w-lg mx-auto">
          Get a personalized demo to learn how PolyAI can help you drive measurable business value.
        </p>
        <button className="mt-8 px-8 py-4 bg-[#0da5ea] text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-lime-300">
          Request a demo
        </button>
      </div>
    </div>
  );
}