import React from 'react';
import BorderButton from '@/components/BorderButton'

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
           <BorderButton text=" Request a demo" variant="filled" onClick={() => alert("Filled Clicked!")} />
      </div>
    </div>
  );
}