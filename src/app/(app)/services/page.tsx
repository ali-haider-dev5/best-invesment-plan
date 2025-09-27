import React from 'react';
import AboutSplit from '@/components/AboutSplit'
import ServicesTabsSection from '@/components/ScrollSpyTabs'

const ServicesHero = () => {
  return (
    <>
      <AboutSplit
        title="Our Services"
        paragraph="Discover the range of services we offer to help you achieve your business goals."
        imageSrc="/about-building.jpg"
        imageAlt="Services Image"
      />
    <ServicesTabsSection />
    </>
  );
};

export default ServicesHero;