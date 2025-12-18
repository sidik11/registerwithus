import { useEffect } from 'react';
import Contactbanner from '../components/ContactUs/Contactbanner';
import Contactus from '../components/ContactUs/Contactus';
import Footer from '../components/Common/Footer';

const ContactPage = () => {

  useEffect(() => {
    // ✅ Set page title
    document.title = "Contact Us | Get in Touch with Our Business Experts";

    // ✅ Set meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Have questions or need help starting your business? Contact us today for expert assistance with company registration, compliance, GST, and other legal services in India."
      );
    } else {
      const desc = document.createElement("meta");
      desc.name = "description";
      desc.content =
        "Have questions or need help starting your business? Contact us today for expert assistance with company registration, compliance, GST, and other legal services in India.";
      document.head.appendChild(desc);
    }

    // ✅ Set meta keywords
    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "contact, business support, legal assistance, company registration help, compliance services, gst help"
      );
    } else {
      const keywords = document.createElement("meta");
      keywords.name = "keywords";
      keywords.content =
        "contact, business support, legal assistance, company registration help, compliance services, gst help";
      document.head.appendChild(keywords);
    }
  }, []);

  return (
    <>
      <Contactbanner />
      <Contactus />
      <Footer />
    </>
  );
};

export default ContactPage;
