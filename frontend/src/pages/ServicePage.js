import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Servicedetails from '../components/Services/Servicedetails';
import Taskey from '../components/Home/Taskey';
import Footer from '../components/Common/Footer';
import servicesData from '../components/Services/services.json';
import '../pages/Homepage.css';

const ServicePage = () => {
  const location = useLocation();
  const [matchedService, setMatchedService] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const serviceName = queryParams.get('name');

    if (serviceName) {
      const service = servicesData.find(
        s => s.service.toLowerCase() === serviceName.toLowerCase()
      );
      if (service) {
        setMatchedService(service);
      }
    }
  }, [location.search]);

  return (
    <>
      <Servicedetails />

      <Taskey
        heading={`Still Have <br /><span class="">Questions?</span>`}
        subheading="Let’s connect and clear all your doubts. Our expert team is ready to assist you."
        buttonText="Reach Out"
        buttonLink="/contact"
        imageSrc="/img/consultant3.jpeg"
      />

      {/* Dynamically render Why Choose Us section */}
      {matchedService?.whyChooseUs && (
        <section className="">
          <div className="container py-5">
            <h2 className="text-center mb-4 section-title fw-bold text-dark">
              {matchedService.whyChooseUs.heading}
            </h2>

            {/* Render Paragraph */}
            <p className="text-center mb-4">
              {matchedService.whyChooseUs.points[0]}
            </p>

            {/* Render List Items one after another */}
            <div className="row justify-content-center">
              {matchedService.whyChooseUs.points.slice(1).map((point, index) => (
                <div className="col-md-6 mb-3" key={index}>
                  <div className="border p-3 h-100 rounded shadow-sm bg-light">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    {point.replace(/^•\s*/, '')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
};

export default ServicePage;
