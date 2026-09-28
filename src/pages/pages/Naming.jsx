import React from 'react';
import ServiceBanner from '../../components/ServiceBanner';
import PageService from '../../components/PageService';
import { naming } from '../../data';
import { Helmet } from 'react-helmet';

const Naming = () => {
  return (
    <div>
      <Helmet>
        {/* Primary SEO */}
        <title>Naming Ceremony Decoration in Gurgaon | 8890058068</title>

        <meta
          name='description'
          content='Book naming ceremony decoration in Gurgaon with Party Decor Expert. Balloon decoration, baby naming ceremony setup, floral decor & home celebration decoration. Call 8890058068.'
        />

        <meta
          name='keywords'
          content='naming ceremony decoration Gurgaon, naming ceremony decoration in Gurgaon, baby naming ceremony decoration, naming ceremony balloon decoration Gurgaon, naming ceremony backdrop decoration, home naming ceremony decoration, baby naming event decoration, floral naming ceremony decoration, newborn naming ceremony decoration, Party Decor Expert'
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
          href='https://partydecorexpert.com/naming-ceremony-decoration'
        />

        {/* Open Graph */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Naming Ceremony Decoration in Gurgaon | Party Decor Expert'
        />
        <meta
          property='og:description'
          content='Book premium naming ceremony decoration in Gurgaon. Balloon decoration, baby naming ceremony backdrop, floral setup & home celebration decor. Call 8890058068.'
        />
        <meta
          property='og:url'
          content='https://partydecorexpert.com/naming-ceremony-decoration'
        />
        <meta
          property='og:image'
          content='https://partydecorexpert.com/naming/naming1.jpeg'
        />
        <meta property='og:site_name' content='Party Decor Expert' />
        <meta property='og:locale' content='en_IN' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Naming Ceremony Decoration in Gurgaon | Party Decor Expert'
        />
        <meta
          name='twitter:description'
          content='Book naming ceremony balloon decoration, baby naming backdrop & home celebration setup in Gurgaon. Call 8890058068.'
        />
        <meta
          name='twitter:image'
          content='https://partydecorexpert.com/naming/naming1.jpeg'
        />

        {/* Contact */}
        <meta name='telephone' content='+918890058068' />
      </Helmet>
      <ServiceBanner
        title='Naming Ceremony Decorations'
        subtitle='Make your special day extra magical with our custom naming ceremony decorations!'
      />
      <PageService title='Naming Ceremony Decorations' workData={naming} />
    </div>
  );
};

export default Naming;
