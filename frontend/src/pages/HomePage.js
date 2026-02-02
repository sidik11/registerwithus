import React from 'react';
import Hero3 from '../components/Home/Hero3';
import Counter from '../components/Home/Counter';
import Clients from '../components/Home/Clients';
import Services from '../components/Home/Services';
import Taskey from '../components/Home/Taskey';
import Blogs from '../components/Home/Blogs';
import RegisterWithUs from '../components/Home/RegisterWithUs';
import WhatClientSays from '../components/Home/WhatClientSays';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import Card from '../components/Home/Card';
import Faq from '../components/Faq/Faq';
import Footer from '../components/Common/Footer';
import { Helmet } from 'react-helmet';
import useSeo from '../components/hooks/useSeo';

const HomePage = () => {
  const seo = useSeo("home");

  return (
    <>

     <Helmet>
        {seo.title && <title>{seo.title}</title>}
        {seo.description && (
          console.log("SEO Description:", seo.description),
          
          <meta name="description" key="description" content={seo.description} />
        )}
        {seo.keywords && (
          <meta name="keywords" key="keywords" content={seo.keywords} />
        )}
        {seo.author && (
          <meta name="author" key="author" content={seo.author} />
        )}
        {seo.robots && (
          <meta name="robots" key="robots" content={seo.robots} />
        )}
        {seo.canonical && (
          <link rel="canonical" key="canonical" href={seo.canonical} />
        )}

        {/* Open Graph */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        {seo.canonical && (
          <meta property="og:url" content={seo.canonical} />
        )}
      </Helmet>
      <Hero3 />
      <Counter />
      <Clients />
      <Services />
      {/* Taskey with props for HomePage */}
      <Taskey
        heading={`Start Your <br />Business Legally in India — The <span class="">Smart Way!</span>`}
        subheading="From startups to established enterprises, our Online Business Compliance Services in India
help you register your company easily with full legal assurance, expert-backed support, and government-recognized documentation. No delays, no confusion, just fast, reliable registration
from India's Trusted Compliance & Registration Partner."
        buttonText="Get Started"
        buttonLink="/contact"
        imageSrc="/img/consultant3.jpeg"
      />
      <Blogs />
      <RegisterWithUs />
      <WhatClientSays />
      <WhyChooseUs />
      <Card />
      <Faq />
      <Footer />
    </>
  );
};
export default HomePage;