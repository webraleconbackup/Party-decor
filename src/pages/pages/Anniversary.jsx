import React from 'react';
import ServiceBanner from '../../components/ServiceBanner';
import { anniversary } from '../../data';
import PageService from '../../components/PageService';
import { Helmet } from "react-helmet";

const Anniversary = () => {
  return (
    <div>
      <Helmet>
  {/* Primary SEO */}
  <title>Anniversary Decoration in Gurgaon | 8890058068</title>

  <meta
    name="description"
    content="Book anniversary decoration in Gurgaon with Party Decor Expert. Romantic balloon decoration, room decoration, candlelight setup & surprise anniversary decor. Call 8890058068."
  />

  <meta
    name="keywords"
    content="anniversary decoration in Gurgaon, anniversary decoration, anniversary balloon decoration Gurgaon, romantic room decoration Gurgaon, surprise anniversary decoration, anniversary party decoration Gurgaon, candlelight dinner decoration Gurgaon, hotel room decoration Gurgaon, home anniversary decoration Gurgaon, Party Decor Expert"
  />

  <meta name="author" content="Party Decor Expert" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="googlebot" content="index, follow" />
  <meta name="language" content="English" />
  <meta name="distribution" content="global" />
  <meta name="rating" content="general" />
  <meta name="revisit-after" content="7 days" />
  <meta name="theme-color" content="#ec4899" />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://partydecorexpert.com/anniversary-decoration"
  />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Anniversary Decoration in Gurgaon | Party Decor Expert"
  />
  <meta
    property="og:description"
    content="Book premium anniversary decoration in Gurgaon. Romantic balloon decoration, room decoration, candlelight dinner setup & surprise anniversary decorations. Call 8890058068."
  />
  <meta
    property="og:url"
    content="https://partydecorexpert.com/anniversary-decoration"
  />
  <meta
    property="og:image"
    content="https://partydecorexpert.com/anniversary/anniversary1.jpeg"
  />
  <meta property="og:site_name" content="Party Decor Expert" />
  <meta property="og:locale" content="en_IN" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Anniversary Decoration in Gurgaon | Party Decor Expert"
  />
  <meta
    name="twitter:description"
    content="Book anniversary balloon decoration, romantic room decoration & surprise setups in Gurgaon. Call 8890058068."
  />
  <meta
    name="twitter:image"
    content="https://partydecorexpert.com/anniversary/anniversary1.jpeg"
  />

  {/* Contact */}
  <meta name="telephone" content="+918890058068" />
</Helmet>

      <ServiceBanner
        title='Anniversary Decorations'
        subtitle='Make your special day extra magical with our custom anniversary decorations!'
      />
      <PageService title='Anniversary Decorations' workData={anniversary} />
    </div>
  );
};

export default Anniversary;
