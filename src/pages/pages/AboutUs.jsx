import React from 'react';
import About from '../../components/Contact';
import ServiceBanner from '../../components/ServiceBanner';
import Packages from '../../components/Packages';

const AboutUs = () => {
  return (
    <div>
      <ServiceBanner
        title='About Us'
        subtitle='Make every celebration unforgettable with Party Decor.'
      />
      <About />
     <Packages />
    </div>
  );
};

export default AboutUs;
