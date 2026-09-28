import React from 'react';
import ServiceBanner from '../../components/ServiceBanner';
import PageService from '../../components/PageService';
import { birthday, getTogether } from '../../data';
import { Helmet } from "react-helmet";

const GetTogether = () => {
  return (
    <div>
      <Helmet>
        {/* Primary SEO */}
        <title>Get Together Decoration in Gurgaon | 8890058068</title>

        <meta
          name='description'
          content='Book get together decoration in Gurgaon with Party Decor Expert. Balloon decoration, family party decoration, friends gathering setup & home celebration decor. Call 8890058068.'
        />

        <meta
          name='keywords'
          content='get together decoration in Gurgaon, get together balloon decoration Gurgaon, family party decoration Gurgaon, friends party decoration, home party decoration Gurgaon, get together event decoration, balloon decoration Gurgaon, celebration decoration Gurgaon, party decoration services Gurgaon, Party Decor Expert'
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
          href='https://partydecorexpert.com/get-together-decoration'
        />

        {/* Open Graph */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Get Together Decoration in Gurgaon | Party Decor Expert'
        />
        <meta
          property='og:description'
          content='Book premium get together decoration in Gurgaon. Balloon decoration, family gathering setup, friends party decoration & home celebration decor. Call 8890058068.'
        />
        <meta
          property='og:url'
          content='https://partydecorexpert.com/get-together-decoration'
        />
        <meta
          property='og:image'
          content='https://partydecorexpert.com/get/get3.jpeg'
        />
        <meta property='og:site_name' content='Party Decor Expert' />
        <meta property='og:locale' content='en_IN' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Get Together Decoration in Gurgaon | Party Decor Expert'
        />
        <meta
          name='twitter:description'
          content='Book get together balloon decoration, family party decoration & celebration setup in Gurgaon. Call 8890058068.'
        />
        <meta
          name='twitter:image'
          content='https://partydecorexpert.com/get/get3.jpeg'
        />

        {/* Contact */}
        <meta name='telephone' content='+918890058068' />
      </Helmet>
      <ServiceBanner
        title='Get Together Decorations'
        subtitle='Make your special day extra magical with our custom get together decorations!'
      />
      <PageService title='Get Together Decorations' workData={getTogether} />
    </div>
  );
};

export default GetTogether;
