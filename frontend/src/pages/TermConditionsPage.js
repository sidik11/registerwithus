import React, { useEffect } from 'react';
import TermConditionHead from '../components/TermConditions/TermConditionsHead';
import TermConditionPolicy from '../components/TermConditions/TermConditionsPolicy';
import Footer from '../components/Common/Footer';

const TermsPage = () => {

  useEffect(() => {
    // ✅ Set page title
    document.title = "Terms & Conditions | Rules & Policies for Using Our Services";

    // ✅ Set meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Read our Terms & Conditions to understand the rules, guidelines, and policies for using our website and services. Stay informed and compliant."
      );
    } else {
      const desc = document.createElement("meta");
      desc.name = "description";
      desc.content =
        "Read our Terms & Conditions to understand the rules, guidelines, and policies for using our website and services. Stay informed and compliant.";
      document.head.appendChild(desc);
    }

    // ✅ Set meta keywords
    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "terms and conditions, website rules, service policies, user agreement, legal policies, compliance"
      );
    } else {
      const keywords = document.createElement("meta");
      keywords.name = "keywords";
      keywords.content =
        "terms and conditions, website rules, service policies, user agreement, legal policies, compliance";
      document.head.appendChild(keywords);
    }
  }, []);

  return (
    <>
      {/* <Abouthero /> */}
      <TermConditionHead />
      <TermConditionPolicy />
      <Footer />
    </>
  );
};

export default TermsPage;
