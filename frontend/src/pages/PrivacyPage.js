import PrivacyHead from '../components/Privacy/PrivacyHead';
import PrivacyPolicy from '../components/Privacy/PrivacyPolicy';
import Footer from '../components/Common/Footer';
import { Helmet } from 'react-helmet';
import useSeo from '../components/hooks/useSeo';
const PrivacyPage = () => {
  const seo = useSeo("privacy");
  return (
    <>
     <Helmet>
            {seo.title && <title>{seo.title}</title>}
            {seo.description && (
              console.log("SEO Description:", seo.description),
              
              <meta name="description" key="description" content={seo.description} />
            )}
            {seo.keywords && (
              <meta name="keywords" key="keywords" content={seo.keywords} />
            )}
            {seo.author && (
              <meta name="author" key="author" content={seo.author} />
            )}
            {seo.robots && (
              <meta name="robots" key="robots" content={seo.robots} />
            )}
            {seo.canonical && (
              <link rel="canonical" key="canonical" href={seo.canonical} />
            )}
    
            {/* Open Graph */}
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:type" content="website" />
            {seo.canonical && (
              <meta property="og:url" content={seo.canonical} />
            )}
          </Helmet>
      {/* <Abouthero /> */}
      <PrivacyHead />
      <PrivacyPolicy />
      <Footer />
    </>
  );
};
export default PrivacyPage;