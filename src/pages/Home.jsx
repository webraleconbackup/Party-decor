import React from 'react';
import Hero from '../components/Hero';
import Special from '../components/Special';
import BestWork from '../components/BestWork';
import Packages from '../components/Packages';
import BookingSection from '../components/BookingSection';
import HomeService from '../components/HomeService';
import { anniversary, babyShower, babyWelcome, birthday, getTogether, haldiMehndi, justMarried, naming } from '../data';
import Testimonials from '../components/Testimonials';
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
  {/* Primary SEO */}
  <title>
    Balloon Decoration in Gurgaon | Birthday, Anniversary & Party Decor
  </title>

  <meta
    name="description"
    content="Party Decor Expert offers premium balloon decoration services in Gurgaon. Book birthday, anniversary, baby shower, baby welcome, Haldi, naming ceremony, get together, just married & room decoration with same-day setup. Call 8890058068."
  />

  <meta
    name="keywords"
    content="balloon decoration Gurgaon, birthday decoration Gurgaon, anniversary decoration Gurgaon, baby shower decoration Gurgaon, baby welcome decoration Gurgaon, Haldi decoration Gurgaon, naming ceremony decoration Gurgaon, get together decoration Gurgaon, just married room decoration Gurgaon, room decoration Gurgaon, event decoration Gurgaon, Party Decor Expert"
  />

  <meta name="author" content="Party Decor Expert" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="googlebot" content="index, follow" />
  <meta name="language" content="English" />
  <meta name="distribution" content="global" />
  <meta name="rating" content="general" />
  <meta name="revisit-after" content="7 days" />
  <meta name="theme-color" content="#ec4899" />

  {/* Geo Tags */}
  <meta name="geo.region" content="IN-HR" />
  <meta name="geo.placename" content="Gurgaon" />
  <meta name="City" content="Gurgaon" />
  <meta name="State" content="Haryana" />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://partydecorexpert.com/"
  />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Party Decor Expert" />
  <meta property="og:locale" content="en_IN" />

  <meta
    property="og:url"
    content="https://partydecorexpert.com/"
  />

  <meta
    property="og:title"
    content="Balloon Decoration in Gurgaon | Party Decor Expert"
  />

  <meta
    property="og:description"
    content="Premium balloon decoration services in Gurgaon for birthdays, anniversaries, baby shower, baby welcome, Haldi, naming ceremony, get together, just married and room decoration."
  />

  <meta
    property="og:image"
    content="https://partydecorexpert.com/birthday/birthday1.jpeg"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="Balloon Decoration in Gurgaon | Party Decor Expert"
  />

  <meta
    name="twitter:description"
    content="Book premium balloon decoration services in Gurgaon for birthdays, anniversaries, baby shower, Haldi, room decoration & more. Call 8890058068."
  />

  <meta
    name="twitter:image"
    content="https://partydecorexpert.com/birthday/birthday1.jpeg"
  />

  {/* Contact */}
  <meta name="telephone" content="+918890058068" />

  {/* Local Business Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Party Decor Expert",
      url: "https://partydecorexpert.com",
      telephone: "+918890058068",
      image: "https://partydecorexpert.com/birthday/birthday1.jpeg",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gurgaon",
        addressRegion: "Haryana",
        addressCountry: "IN"
      },
      areaServed: [
        "Gurgaon",
        "DLF Phase 1",
        "DLF Phase 2",
        "DLF Phase 3",
        "DLF Phase 4",
        "DLF Phase 5",
        "Sohna Road",
        "Golf Course Road",
        "Sector 14",
        "Sector 15",
        "Sector 22",
        "Sector 23",
        "Sector 31",
        "Sector 46",
        "Sector 47",
        "Sector 49",
        "Sector 52",
        "Sector 56",
        "Sector 57",
        "Palam Vihar",
        "Sushant Lok",
        "New Gurgaon"
      ],
      openingHours: "Mo-Su 00:00-23:59"
    })}
  </script>
</Helmet>
      <Hero />
      <Special />
      <HomeService title='Birthday Decorations' workData={birthday} />
      <HomeService title='Anniversary Decorations' workData={anniversary} />
      <HomeService title='Baby Shower Decorations' workData={babyShower} />
      <HomeService title='Baby Welcome Decorations' workData={babyWelcome} />
      <HomeService title='Just Married Decorations' workData={justMarried} />
      <HomeService title='Naming Ceremony Decorations' workData={naming} />
      <HomeService title='Get Together Decorations' workData={getTogether} />
      <HomeService title='Haldi/Mehendi Decorations' workData={haldiMehndi} />
      <Testimonials />
      {/* <BestWork /> */}
      <Packages />
      <BookingSection />
    </div>
  );
};

export default Home;
