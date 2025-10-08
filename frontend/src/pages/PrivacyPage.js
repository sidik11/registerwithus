import React, { useEffect } from 'react';
// import Abouthero from '../components/About/Abouthero';
import PrivacyHead from '../components/Privacy/PrivacyHead';
import PrivacyPolicy from '../components/Privacy/PrivacyPolicy';
import Footer from '../components/Common/Footer';

const PrivacyPage = () => {

  useEffect(() => {
    // ✅ Set page title
    document.title = "Privacy Policy | Your Data & Privacy Protection";

    // ✅ Set meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Read our Privacy Policy to understand how we collect, use, and protect your personal data. Your privacy and trust are our top priorities."
      );
    } else {
      const desc = document.createElement("meta");
      desc.name = "description";
      desc.content =
        "Read our Privacy Policy to understand how we collect, use, and protect your personal data. Your privacy and trust are our top priorities.";
      document.head.appendChild(desc);
    }

    // ✅ Set meta keywords
    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "privacy policy, data protection, personal information, GDPR, user privacy, data security"
      );
    } else {
      const keywords = document.createElement("meta");
      keywords.name = "keywords";
      keywords.content =
        "privacy policy, data protection, personal information, GDPR, user privacy, data security";
      document.head.appendChild(keywords);
    }
  }, []);

  return (
    <>
      {/* <Abouthero /> */}
      <PrivacyHead />
      <PrivacyPolicy />
      <Footer />
    </>
  );
};

export default PrivacyPage;
