import React from 'react';
import ContactUsHeroSection from '@/components/ContactUsHeroSection'
import RequestDemo from '@/components/RequestDemo'
import ContactInfoStagger from '@/components/ContactSection'

const Contact = () => {
  return (
    <div className='pt-[62px] lg:pt-0 md:pt-0'>
      {/* <ContactUsHeroSection /> */}
      <RequestDemo />
      <ContactInfoStagger />
    </div>
  );
};

export default Contact;
