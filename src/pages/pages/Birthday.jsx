import React from 'react';
import PageService from '../../components/PageService';
import ServiceBanner from '../../components/ServiceBanner';
import { birthday } from '../../data';
import { Helmet } from "react-helmet";

const Birthday = () => {
  return (
    <div>
       <Helmet>
      {/* Primary SEO */}
      <title>Birthday Decoration in Gurgaon | 8890058068</title>

      <meta
        name="description"
        content="Book birthday decoration in Gurgaon with Party Decor Expert. Balloon decoration, room setup, kids themes & home party decor. Call 8890058068."
      />

      <meta
        name="keywords"
        content="birthday decoration in Gurgaon, birthday decoration, balloon decoration Gurgaon, birthday party decoration Gurgaon, room decoration Gurgaon, kids birthday decoration, home birthday decoration, surprise birthday decoration, balloon decorator Gurgaon, Party Decor Expert"
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
        href="https://partydecorexpert.com/birthday-decoration"
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Birthday Decoration in Gurgaon | Party Decor Expert"
      />
      <meta
        property="og:description"
        content="Book premium birthday balloon decoration in Gurgaon. Home birthday decoration, room decoration, kids themes & surprise setups. Call 8890058068."
      />
      <meta
        property="og:url"
        content="https://partydecorexpert.com/birthday-decoration"
      />
      <meta
        property="og:image"
        content="https://partydecorexpert.com/birthday/birthday1.jpeg"
      />
      <meta property="og:site_name" content="Party Decor Expert" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Birthday Decoration in Gurgaon | Party Decor Expert"
      />
      <meta
        name="twitter:description"
        content="Book birthday balloon decoration, room decoration & kids theme decoration in Gurgaon. Call 8890058068."
      />
      <meta
        name="twitter:image"
        content="https://partydecorexpert.com/birthday/birthday1.jpeg"
      />

      {/* Contact */}
      <meta name="telephone" content="+918890058068" />
    </Helmet>

      <ServiceBanner
        title='Birthday Decorations'
        subtitle='Make your special day extra magical with our custom birthday decorations!'
      />
      <PageService title='Birthday Decorations' workData={birthday} />
    </div>
  );
};

export default Birthday;
