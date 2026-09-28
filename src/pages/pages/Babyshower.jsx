import React from 'react';
import ServiceBanner from '../../components/ServiceBanner';
import PageService from '../../components/PageService';
import { babyShower, birthday } from '../../data';
import { Helmet } from 'react-helmet';

const Babyshower = () => {
  return (
    <div>
      <Helmet>
        {/* Primary SEO */}
        <title>Baby Shower Decoration in Gurgaon | 8890058068</title>

        <meta
          name='description'
          content='Book baby shower decoration in Gurgaon with Party Decor Expert. Balloon decoration, mom-to-be theme decoration, floral setup & home baby shower decor. Call 8890058068.'
        />

        <meta
          name='keywords'
          content='baby shower decoration in Gurgaon, baby shower balloon decoration Gurgaon, baby shower theme decoration, mom to be decoration Gurgaon, baby shower party decoration, baby shower backdrop decoration, home baby shower decoration Gurgaon, baby shower event decoration, floral baby shower decoration, Party Decor Expert'
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
          href='https://partydecorexpert.com/baby-shower-decoration'
        />

        {/* Open Graph */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Baby Shower Decoration in Gurgaon | Party Decor Expert'
        />
        <meta
          property='og:description'
          content='Book premium baby shower decoration in Gurgaon. Balloon decoration, mom-to-be theme setup, backdrop decoration & home baby shower decor. Call 8890058068.'
        />
        <meta
          property='og:url'
          content='https://partydecorexpert.com/baby-shower-decoration'
        />
        <meta
          property='og:image'
          content='https://partydecorexpert.com/babyshower/babyshower1.jpeg'
        />
        <meta property='og:site_name' content='Party Decor Expert' />
        <meta property='og:locale' content='en_IN' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Baby Shower Decoration in Gurgaon | Party Decor Expert'
        />
        <meta
          name='twitter:description'
          content='Book baby shower balloon decoration, mom-to-be theme decoration & backdrop setup in Gurgaon. Call 8890058068.'
        />
        <meta
          name='twitter:image'
          content='https://partydecorexpert.com/babyshower/babyshower1.jpeg'
        />

        {/* Contact */}
        <meta name='telephone' content='+918890058068' />
      </Helmet>
      <ServiceBanner
        title='Baby Shower Decorations'
        subtitle='Make your special day extra magical with our custom baby shower decorations!'
      />
      <PageService title='Baby Shower Decorations' workData={babyShower} />
    </div>
  );
};

export default Babyshower;
