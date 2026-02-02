import { Helmet } from "react-helmet-async";
import Blogdetails from "../components/Blogs/Blogdetails";
import Footer from "../components/Common/Footer";

const BlogDetailsPage = ({ blog }) => {
  const canonicalUrl = `https://registerwithus.in/blog/${blog?.slug}`;

  return (
    <>
      <Helmet>
        <title>{blog?.metaTitle || blog?.title}</title>

        <meta
          name="description"
          content={
            blog?.metaDescription ||
            "Read expert insights, business strategies, and compliance updates."
          }
        />

        <meta
          name="keywords"
          content={blog?.metaKeywords || "business, startup, compliance"}
        />

        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <Blogdetails />
      <Footer />
    </>
  );
};

export default BlogDetailsPage;