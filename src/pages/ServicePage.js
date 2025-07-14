import React from 'react';
import Servicedetails from '../components/Services/Servicedetails';
import Taskey from '../components/Home/Taskey'; // or Common/Taskey if moved there
import WhyChooseUs from '../components/Home/WhyChooseUs';
import Footer from '../components/Common/Footer';
import '../pages/Homepage.css';

const ServicePage = () => {
  return (
    <>
      <Servicedetails />

      {/* Second Taskey block with different content */}
      <Taskey
        heading={`Still Have <br /><span class="">Questions?</span>`}
        subheading="Let’s connect and clear all your doubts. Our expert team is ready to assist you."
        buttonText="Reach Out"
        buttonLink="/contact"
        imageSrc="/img/consultant3.jpeg"
      />
      <WhyChooseUs />

      <Footer />
    </>
  );
};

export default ServicePage;
