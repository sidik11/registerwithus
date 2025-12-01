import { useEffect } from 'react';
import Bloghead from '../components/Blogs/Bloghead';
import Blogmain from '../components/Blogs/Blogmain';
import Footer from '../components/Common/Footer';
const BlogPage = () => {
  useEffect(() => {
    // ✅ Set page title
    document.title = "Blogs | Business Tips, Compliance Updates & Startup Guides";
    // ✅ Set meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore our latest blogs covering business registration, GST, compliance tips, startup advice, and more to help you grow your business legally and efficiently."
      );
    } else {
      const desc = document.createElement("meta");
      desc.name = "description";
      desc.content =
        "Explore our latest blogs covering business registration, GST, compliance tips, startup advice, and more to help you grow your business legally and efficiently.";
      document.head.appendChild(desc);
    }
    // ✅ Set meta keywords
    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "business blogs, startup tips, company registration, compliance updates, GST, MSME, legal services"
      );
    } else {
      const keywords = document.createElement("meta");
      keywords.name = "keywords";
      keywords.content =
        "business blogs, startup tips, company registration, compliance updates, GST, MSME, legal services";
      document.head.appendChild(keywords);
    }
  }, []);
  return (
    <>
      <Bloghead />
      <Blogmain />
      <Footer />
    </>
  );
};
export default BlogPage;
