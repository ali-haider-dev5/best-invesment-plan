'use client'
import React, { useState } from 'react';

// Define the type for the service data
interface Service {
  title: string;
  description: string;
  image: string;
}

const serviceData: Service[] = [
  {
    title: 'Tax-Advantaged Wealth Accumulation Strategies',
    description: 'Design growth with a focus on tax efficiency and risk controls.',
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/balloon-sq1.jpg',
  },
  {
    title: 'Asset Protection & Qualified Rollovers',
    description: '401(k)/IRA rollovers into protected, indexed strategies when appropriate.',
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/balloon-sq1.jpg',
  },
  {
    title: 'College Education Funds',
    description: 'Plan ahead with tax-aware accumulation for education costs.',
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/balloon-sq1.jpg',
  },
  {
    title: 'Debt Management & Consolidation',
    description: 'Clean up cash flow to free up dollars for your future.',
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/balloon-sq1.jpg',
  },
  {
    title: 'Infinite Banking & Family Banks',
    description: 'Create liquidity and control using properly structured policies.',
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/balloon-sq1.jpg',
  },
  {
    title: 'Life Insurance, Living Benefits, & Final Expense',
    description: 'Protect income and legacy with modern benefit riders.',
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/balloon-sq1.jpg',
  },
  {
    title: 'Estate & Legacy Planning',
    description: 'Coordinate with legal and tax pros to pass more to heirs.',
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/balloon-sq1.jpg',
  },
  {
    title: 'Indexed Growth - Roth IRA, SEP IRA, Traditional IRA',
    description: 'Participate in market gains up to a cap with floor protection.',
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/balloon-sq1.jpg',
  },
  {
    title: 'Mortgage Protection (Term)',
    description: 'Safeguard the home with efficient, affordable coverage.',
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/balloon-sq1.jpg',
  },
];

// Define types for the ServiceCard props
interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="relative  bg-white dark:bg-[#0f131b] rounded-lg shadow-md overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-bold text-[#f4a950]">{title}</h3>
        <p className="mt-2 text-sm text-[#555555] dark:text-white">{description}</p>
      </div>
      <div
        className={`absolute inset-0 bg-[#ffffffb8] dark:bg-[#293446c2] bg-opacity-90 flex items-center justify-center p-6 transition-opacity duration-300 ease-in-out ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button className="px-6 py-3 bg-[#f4a950] text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-90 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
          Take this service
        </button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-[#1a2332] py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-[#555555] dark:text-white text-center mb-12 uppercase">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
