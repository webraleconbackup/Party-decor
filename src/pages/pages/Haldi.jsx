import React from 'react';
import ServiceBanner from '../../components/ServiceBanner';
import PageService from '../../components/PageService';
import { haldiMehndi } from '../../data';
import { Helmet } from 'react-helmet';

const Haldi = () => {
  return (
    <div>
      <Helmet>
        {/* Primary SEO */}
        <title>Haldi Decoration in Gurgaon | 8890058068</title>

        <meta
          name='description'
          content='Book Haldi decoration in Gurgaon with Party Decor Expert. Floral Haldi decoration, marigold decor, backdrop setup, mehndi & Haldi ceremony decoration. Call 8890058068.'
        />

        <meta
          name='keywords'
          content='Haldi decoration in Gurgaon, Haldi ceremony decoration Gurgaon, floral Haldi decoration, marigold Haldi decoration, Haldi backdrop decoration, wedding Haldi decoration Gurgaon, Haldi function decoration, mehndi and Haldi decoration, home Haldi decoration Gurgaon, Party Decor Expert'
        />

        <meta name='author' content='Party Decor Expert' />
        <meta name='robots' content='index, follow, max-image-preview:large' />
        <meta name='googlebot' content='index, follow' />
        <meta name='language' content='English' />
        <meta name='distribution' content='global' />
        <meta name='rating' content='general' />
        <meta name='revisit-after' content='7 days' />
        <meta name='theme-color' content='#ec4899' />

        {/* Canonical */}
        <link
          rel='canonical'
          href='https://partydecorexpert.com/haldi-decoration'
        />

        {/* Open Graph */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Haldi Decoration in Gurgaon | Party Decor Expert'
        />
        <meta
          property='og:description'
          content='Book premium Haldi decoration in Gurgaon. Floral decoration, marigold backdrop, traditional Haldi setup & wedding ceremony decor. Call 8890058068.'
        />
        <meta
          property='og:url'
          content='https://partydecorexpert.com/haldi-decoration'
        />
        <meta
          property='og:image'
          content='https://partydecorexpert.com/haldi/haldi1.jpeg'
        />
        <meta property='og:site_name' content='Party Decor Expert' />
        <meta property='og:locale' content='en_IN' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Haldi Decoration in Gurgaon | Party Decor Expert'
        />
        <meta
          name='twitter:description'
          content='Book Haldi ceremony decoration, floral backdrop & marigold decoration in Gurgaon. Call 8890058068.'
        />
        <meta
          name='twitter:image'
          content='https://partydecorexpert.com/haldi/haldi1.jpeg'
        />

        {/* Contact */}
        <meta name='telephone' content='+918890058068' />
      </Helmet>
      <ServiceBanner
        title='Haldi/Mehendi Decorations'
        subtitle='Make your special day extra magical with our custom haldi/mehendi decorations!'
      />
      <PageService title='Haldi/Mehendi Decorations' workData={haldiMehndi} />
    </div>
  );
};

export default Haldi;
