import React from 'react';
import AboutUsHeroSection from '@/components/AboutUsHeroSection'
import AboutSplit from '@/components/AboutSplit'
import ValuesSection from "@/components/ValuesSection";

const About = () => {
  return (
    <div>

       <AboutSplit
        title="About Creative Planning"
        paragraph="Helping clients simplify their journey to financial wellness, one personalized plan at a time."
        imageSrc="/about-building.jpg"
      />
            <AboutUsHeroSection />
      <ValuesSection />
    </div>
  );
};

export default About;
