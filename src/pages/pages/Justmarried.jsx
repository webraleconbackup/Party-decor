import React from 'react';
import ServiceBanner from '../../components/ServiceBanner';
import PageService from '../../components/PageService';
import { birthday, justMarried } from '../../data';
import { Helmet } from 'react-helmet';

const Justmarried = () => {
  return (
    <div>
      <Helmet>
        {/* Primary SEO */}
        <title>Just Married Room Decoration in Gurgaon | 8890058068</title>

        <meta
          name='description'
          content='Book Just Married room decoration in Gurgaon with Party Decor Expert. Romantic honeymoon room decoration, flower decoration, balloon setup & surprise bedroom decor. Call 8890058068.'
        />

        <meta
          name='keywords'
          content='Just Married room decoration Gurgaon, honeymoon room decoration Gurgaon, wedding night room decoration Gurgaon, first night room decoration, romantic room decoration Gurgaon, flower decoration for couples, balloon room decoration Gurgaon, bedroom decoration Gurgaon, newly married room decoration, Party Decor Expert'
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
          href='https://partydecorexpert.com/just-married-decoration'
        />

        {/* Open Graph */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Just Married Room Decoration in Gurgaon | Party Decor Expert'
        />
        <meta
          property='og:description'
          content='Book premium Just Married room decoration in Gurgaon. Romantic flower decoration, honeymoon room setup, balloon decoration & surprise bedroom decor. Call 8890058068.'
        />
        <meta
          property='og:url'
          content='https://partydecorexpert.com/just-married-decoration'
        />
        <meta
          property='og:image'
          content='https://partydecorexpert.com/justmarried/justmarried1.jpeg'
        />
        <meta property='og:site_name' content='Party Decor Expert' />
        <meta property='og:locale' content='en_IN' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Just Married Room Decoration in Gurgaon | Party Decor Expert'
        />
        <meta
          name='twitter:description'
          content='Book honeymoon room decoration, flower decoration & romantic bedroom setup in Gurgaon. Call 8890058068.'
        />
        <meta
          name='twitter:image'
          content='https://partydecorexpert.com/justmarried/justmarried1.jpeg'
        />

        {/* Contact */}
        <meta name='telephone' content='+918890058068' />
      </Helmet>
      <ServiceBanner
        title='Just Married Decorations'
        subtitle='Make your special day extra magical with our custom just married decorations!'
      />
      <PageService title='Just Married Decorations' workData={justMarried} />
    </div>
  );
};

export default Justmarried;
