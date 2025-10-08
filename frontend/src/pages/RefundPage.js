import React, { useEffect } from 'react';
// import Abouthero from '../components/About/Abouthero';
import RefundHead from '../components/Refund/RefundHead';
import RefundPolicy from '../components/Refund/RefundPolicy';
import Footer from '../components/Common/Footer';

const RefundPage = () => {

  useEffect(() => {
    // ✅ Set page title
    document.title = "Refund Policy | Easy Returns & Money Back Guarantee";

    // ✅ Set meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Read our Refund Policy to understand how you can return products or request a refund. We ensure a hassle-free process and customer satisfaction."
      );
    } else {
      const desc = document.createElement("meta");
      desc.name = "description";
      desc.content =
        "Read our Refund Policy to understand how you can return products or request a refund. We ensure a hassle-free process and customer satisfaction.";
      document.head.appendChild(desc);
    }

    // ✅ Set meta keywords
    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "refund policy, money back, return policy, product returns, customer satisfaction, easy refund"
      );
    } else {
      const keywords = document.createElement("meta");
      keywords.name = "keywords";
      keywords.content =
        "refund policy, money back, return policy, product returns, customer satisfaction, easy refund";
      document.head.appendChild(keywords);
    }
  }, []);

  return (
    <>
      {/* <Abouthero /> */}
      <RefundHead />
      <RefundPolicy />
      <Footer />
    </>
  );
};

export default RefundPage;
