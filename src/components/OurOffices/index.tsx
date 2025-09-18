import React from 'react';

// Define types for the address and office props
interface Address {
  line1: string;
  line2: string;
  line3: string;
  line4: string;
}

interface OfficeCardProps {
  city: string;
  address: Address;
  imageSrc: string;
}

const OfficeCard: React.FC<OfficeCardProps> = ({ city, address, imageSrc }) => {
  return (
    <div className="bg-white dark:bg-[#283445] rounded-lg overflow-hidden shadow-lg p-4 transition-transform transform hover:scale-105">
      <img src={imageSrc} alt={`Office in ${city}`} className="w-full h-48 object-cover rounded-md mb-4" />
      <div className="text-gray-800">
        <h3 className="text-xl text-[#475569] dark:text-white font-bold mb-1 ">{city}</h3>
        <p className="text-sm text-[#1f2937] dark:text-white">{address.line1}</p>
        <p className="text-sm text-[#1f2937] dark:text-white">{address.line2}</p>
        <p className="text-sm text-[#1f2937] dark:text-white">{address.line3}</p>
        <p className="text-sm text-[#1f2937] dark:text-white">{address.line4}</p>
      </div>
    </div>
  );
};

// Remove `officeLocations` prop because data is hardcoded in the component itself
const OurOffices: React.FC = () => {
  const officeLocations = [
    {
      city: 'New York',
      address: {
        line1: '1178 Broadway',
        line2: 'Fl 2',
        line3: 'New York, NY 10001',
        line4: 'United States of America',
      },
      imageSrc: '/new-york.jpg',
    },
    {
      city: 'London',
      address: {
        line1: '3 Sheldon Square',
        line2: 'London',
        line3: 'W2 6HY',
        line4: 'United Kingdom',
      },
      imageSrc: '/london.jpg',
    },
    {
      city: 'San Francisco',
      address: {
        line1: '4 West 4th Avenue',
        line2: 'San Mateo',
        line3: 'CA 94402',
        line4: 'United States of America',
      },
      imageSrc: '/san-francio.jpg',
    },
    {
      city: 'Belgrade',
      address: {
        line1: 'PC Ušće',
        line2: 'Bulevar Mihajla Pupina 6/19',
        line3: '11070 Belgrade',
        line4: 'Serbia',
      },
      imageSrc: '/belgrade.jpg',
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-[#344256] py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#0185c7] dark:text-white mb-12">OUR OFFICES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {officeLocations.map((office, index) => (
            <OfficeCard key={index} {...office} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurOffices;
