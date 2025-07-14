import React from 'react';
import Hero3 from '../components/Home/Hero3';
import Card from '../components/Home/Card';
import Counter from '../components/Home/Counter';
import Services from '../components/Home/Services';
import Taskey from '../components/Home/Taskey';
import Blogs from '../components/Home/Blogs';
import Clients from '../components/Home/Clients';
import RegisterWithUs from '../components/Home/RegisterWithUs';
import WhatClientSays from '../components/Home/WhatClientSays';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import Faq from '../components/Faq/Faq';
import Footer from '../components/Common/Footer';
import '../pages/Homepage.css';

const HomePage = () => {
  return (
    <>
      <Hero3 />
      <Card />
      <Counter />
      <Services />
      
      {/* Taskey with props for HomePage */}
      <Taskey
        heading={`Let’s Get Your<br />Business All <span class="">Registered!</span>`}
        subheading="Taskey helps entrepreneurs like you register your startup with ease and confidence."
        buttonText="Get Started"
        buttonLink="/contact"
        imageSrc="/img/consultant3.jpeg"
      />

      <Blogs />
      <Clients />
      <RegisterWithUs />
      <WhatClientSays />
      <WhyChooseUs />
      <Faq />
      <Footer />
    </>
  );
};

export default HomePage;
