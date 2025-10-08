import React, { useEffect } from 'react';
import Abouthero from '../components/About/Abouthero';
import Aboutmain from '../components/About/Aboutmain';
import OurApproach from '../components/About/OurApproach';
import Missionvision from '../components/About/Missionvision';
import WhoWeServe from '../components/About/WhoWeServe';
import CompanyHighlights from '../components/About/CompanyHighlights';
import Footer from '../components/Common/Footer';

const AboutPage = () => {

  useEffect(() => {
    // ✅ Set page title
    document.title = "About Us | Learn More About Our Mission, Vision & Team";

    // ✅ Set meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover who we are, our mission, vision, and the passionate team behind our success. Learn why businesses trust us as their compliance and registration partner in India."
      );
    } else {
      const desc = document.createElement("meta");
      desc.name = "description";
      desc.content =
        "Discover who we are, our mission, vision, and the passionate team behind our success. Learn why businesses trust us as their compliance and registration partner in India.";
      document.head.appendChild(desc);
    }

    // ✅ Set meta keywords
    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "about us, our mission, company vision, business compliance, registration partner, team, who we are"
      );
    } else {
      const keywords = document.createElement("meta");
      keywords.name = "keywords";
      keywords.content =
        "about us, our mission, company vision, business compliance, registration partner, team, who we are";
      document.head.appendChild(keywords);
    }
  }, []);

  return (
    <>
      <Abouthero />
      <Aboutmain />
      <OurApproach />
      <Missionvision />
      <WhoWeServe />
      <CompanyHighlights />
      <Footer />
    </>
  );
};

export default AboutPage;
