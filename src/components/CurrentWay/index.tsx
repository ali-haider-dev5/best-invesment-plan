'use client'
import React, { useState } from 'react';

const featuresData = [
  {
    id: 1,
    title: "Feature 1",
    description: "I don’t mean to say that I know, of my own knowledge, what there is particularly dead about a door-nail.",
    imageUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/495197/phone-1.png"
  },
  {
    id: 2,
    title: "Feature 2",
    description: "I don’t mean to say that I know, of my own knowledge, what there is particularly dead about a door-nail.",
    imageUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/495197/phone-2.png"
  },
  {
    id: 3,
    title: "Feature 3",
    description: "I don’t mean to say that I know, of my own knowledge, what there is particularly dead about a door-nail.",
    imageUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/495197/phone-3.png"
  },
  {
    id: 4,
    title: "Feature 4",
    description: "I don’t mean to say that I know, of my own knowledge, what there is particularly dead about a door-nail.",
    imageUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/495197/phone-4.png"
  },
  {
    id: 5,
    title: "Feature 5",
    description: "I don’t mean to say that I know, of my own knowledge, what there is particularly dead about a door-nail.",
    imageUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/495197/phone-5.png"
  },
  {
    id: 6,
    title: "Feature 6",
    description: "I don’t mean to say that I know, of my own knowledge, what there is particularly dead about a door-nail.",
    imageUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/495197/phone-6.png"
  },
];

const FeaturesSection = () => {
  const [activeImage, setActiveImage] = useState<string>(featuresData[0].imageUrl);

  const handleFeatureClick = (imageUrl: string) => {
    setActiveImage(imageUrl);
  };

  return (
    <section
      id="features"
      className="bg-cover bg-center py-20 relative bg-[#0da7ec26] dark:bg-[#1f2938]"
    >
      <div className="text-center mb-10">
        <p className="text-4xl mb-12 font-bold dark:text-white text-[#1e2939] dark:text-whitemt-4">We are here to provide value and make an impact.</p>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Side Features */}
          <div className="features-list w-full flex flex-col gap-8 mb-8 sm:mb-0">
            {featuresData.slice(0, 3).map((feature) => (
              <div
                key={feature.id}
                className="features-item cursor-pointer opacity-100 transition-opacity duration-200 hover:opacity-70"
                onClick={() => handleFeatureClick(feature.imageUrl)}
              >
                <h3 className="text-xl font-bold text-[#1e2939] dark:text-white">{feature.title}</h3>
                <p className="text-lg text-[#1e2939] dark:text-white mt-3">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Features Image */}
          <div className="features-image w-full  text-center mb-8 sm:mb-0">
            <img
              src={activeImage}
              height={400}
              width={300}
              alt="Feature Image"
              className="w-full h-auto filter drop-shadow-xl"
            />
          </div>

          {/* Right Side Features */}
          <div className="features-list w-full flex flex-col gap-8 mb-8 sm:mb-0">
            {featuresData.slice(3, 6).map((feature) => (
              <div
                key={feature.id}
                className="features-item cursor-pointer opacity-100 transition-opacity duration-200 hover:opacity-70"
                onClick={() => handleFeatureClick(feature.imageUrl)}
              >
                <h3 className="text-xl font-bold text-[#1e2939] dark:text-white">{feature.title}</h3>
                <p className="text-lg text-[#1e2939] dark:text-white mt-3">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
