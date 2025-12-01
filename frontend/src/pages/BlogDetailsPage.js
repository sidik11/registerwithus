import { useEffect } from 'react';
import Blogdetails from '../components/Blogs/Blogdetails';
import Footer from '../components/Common/Footer';
const BlogDetailsPage = () => {
  useEffect(() => {
    // ✅ Set page title
    document.title = "Blog Details | Expert Insights and Business Tips";
    // ✅ Set meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Read our detailed blog articles to gain expert insights, business strategies, and the latest updates on company registration, compliance, and legal services in India."
      );
    } else {
      const desc = document.createElement("meta");
      desc.name = "description";
      desc.content =
        "Read our detailed blog articles to gain expert insights, business strategies, and the latest updates on company registration, compliance, and legal services in India.";
      document.head.appendChild(desc);
    }
    // ✅ Set meta keywords
    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "blog, business tips, compliance guide, registration updates, legal blog, startup advice"
      );
    } else {
      const keywords = document.createElement("meta");
      keywords.name = "keywords";
      keywords.content =
        "blog, business tips, compliance guide, registration updates, legal blog, startup advice";
      document.head.appendChild(keywords);
    }
  }, []);
  return (
    <>
      <Blogdetails />
      <Footer />
    </>
  );
};
export default BlogDetailsPage;
