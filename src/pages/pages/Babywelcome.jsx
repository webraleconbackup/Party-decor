import React from 'react';
import ServiceBanner from '../../components/ServiceBanner';
import PageService from '../../components/PageService';
import { babyWelcome } from '../../data';
import { Helmet } from 'react-helmet';

const Babywelcome = () => {
  return (
    <div>
      <Helmet>
        {/* Primary SEO */}
        <title>Baby Welcome Decoration in Gurgaon | 8890058068</title>

        <meta
          name='description'
          content='Book baby welcome decoration in Gurgaon with Party Decor Expert. Balloon decoration, welcome baby room decoration, hospital room setup & home surprise decoration. Call 8890058068.'
        />

        <meta
          name='keywords'
          content='baby welcome decoration in Gurgaon, welcome baby decoration Gurgaon, baby welcome balloon decoration, newborn welcome decoration, hospital room decoration Gurgaon, home baby welcome decoration, baby girl welcome decoration, baby boy welcome decoration, welcome baby room decoration, Party Decor Expert'
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
          href='https://partydecorexpert.com/baby-welcome-decoration'
        />

        {/* Open Graph */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Baby Welcome Decoration in Gurgaon | Party Decor Expert'
        />
        <meta
          property='og:description'
          content='Book premium baby welcome decoration in Gurgaon. Balloon decoration, hospital room decoration, newborn welcome setup & home surprise decoration. Call 8890058068.'
        />
        <meta
          property='og:url'
          content='https://partydecorexpert.com/baby-welcome-decoration'
        />
        <meta
          property='og:image'
          content='https://partydecorexpert.com/baby/baby1.jpeg'
        />
        <meta property='og:site_name' content='Party Decor Expert' />
        <meta property='og:locale' content='en_IN' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Baby Welcome Decoration in Gurgaon | Party Decor Expert'
        />
        <meta
          name='twitter:description'
          content='Book baby welcome balloon decoration, hospital room decoration & newborn welcome setup in Gurgaon. Call 8890058068.'
        />
        <meta
          name='twitter:image'
          content='https://partydecorexpert.com/baby/baby1.jpeg'
        />

        {/* Contact */}
        <meta name='telephone' content='+918890058068' />
      </Helmet>

      <ServiceBanner
        title='Baby Welcome Decorations'
        subtitle='Make your special day extra magical with our custom baby welcome decorations!'
      />
      <PageService title='Baby Welcome Decorations' workData={babyWelcome} />
    </div>
  );
};

export default Babywelcome;
