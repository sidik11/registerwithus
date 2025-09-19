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
import '../pages/Homepage.css';

const HomePage = () => {
  return (
    <>
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
