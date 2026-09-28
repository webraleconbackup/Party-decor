import React from 'react';
import Gallery from '../../components/Gallery';
import ServiceBanner from '../../components/ServiceBanner';

const GalleryPage = () => {
  return (
    <div>
      <ServiceBanner
        title='Our Gallery'
        subtitle='Premium curated collection from our most loved decorations.'
      />
      <Gallery />
    </div>
  );
};

export default GalleryPage;
