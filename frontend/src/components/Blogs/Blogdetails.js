import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { API_BASE_URL } from '../../utils/api.js';
import './Blogdetails.css';

function Blogdetails() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blog by slug
  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`${API_BASE_URL}/api/blogs?slug=${slug}`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.blog) setBlog(data.blog);
        else setError("Blog not found");
      })
      .catch(err => setError(err.message || "Something went wrong"))
      .finally(() => setLoading(false));
  }, [slug]);

  // Fetch related & recent posts
  useEffect(() => {
    if (!blog) return;

    fetch(`${API_BASE_URL}/api/blogs`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.blogs) {
          setRelatedPosts(
            data.blogs
              .filter(item => item.category_name === blog.category_name && item.slug !== blog.slug)
              .slice(0, 5)
          );

          setRecentPosts(
            data.blogs
              .filter(item => item.slug !== blog.slug)
              .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
              .slice(0, 5)
          );
        }
      });
  }, [blog]);

  if (loading) return <div className="container py-5 text-center"><h4>Loading Blog...</h4></div>;
  if (error || !blog) return <div className="container py-5 text-center"><h4>{error}</h4></div>;

  // 🔥 Extract meta tags from admin only
  const metaItem = blog.meta?.[0];

  
 let metaKeywords = "";
let metaDescription = "";

if (metaItem?.meta_content) {
  const parts = metaItem.meta_content
    .split('", "')
    .map(p => p.replace(/^"|"$/g, "").trim());

  metaKeywords = parts[0] || "";
  metaDescription = parts[1] || "";
}

  const canonicalUrl = `https://registerwithus.in/blogdetails/${slug}`;

  return (
    <>
      {/* ✅ SEO META TAGS */}
      <Helmet>
        <title>{blog.title}</title>

        {/* Always use admin-provided meta */}
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />

        {/* Open Graph */}
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={`${API_BASE_URL}${blog.image}`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={`${API_BASE_URL}${blog.image}`} />

        {/* ✅ CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      {/* PAGE CONTENT */}
      <section>
        <div className="container py-5 mt-5">
          <h2 className="fw-bold">{blog.title}</h2>

          <p className="date">
            {new Date(blog.created_at).toLocaleDateString('en-GB', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            })}
          </p>

          <div className="row">
            {/* Left Content */}
            <div className="col-lg-8">
              <img
                src={`${API_BASE_URL}${blog.image}`}
                className="img-fluid blog-img mb-4"
                alt={blog.title}
              />
              <div
                dangerouslySetInnerHTML={{ __html: blog.blogDescription }}
              />
              <div className="mt-4">
                <strong>Category:</strong> {blog.category_name}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-lg-4 mt-5 mt-lg-0">
              {/* Related Posts */}
              <h5 className="fw-bold mb-3">Related Posts</h5>

              {relatedPosts.length ? (
                relatedPosts.map(post => (
                  <div className="d-flex mb-3" key={post.slug}>
                    <img
                      src={`${API_BASE_URL}${post.image}`}
                      width="80"
                      height="80"
                      className="rounded me-3"
                      alt={post.title}
                    />
                    <div>
                      <Link
                        to={`/blogdetails/${post.slug}`}
                        className="fw-semibold text-dark d-block"
                      >
                        {post.title}
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted small">No related posts found.</p>
              )}

              {/* Recent Posts */}
              <h5 className="fw-bold mt-4 mb-3">Recent Posts</h5>

              {recentPosts.length ? (
                recentPosts.map(post => (
                  <div className="d-flex mb-3" key={post.slug}>
                    <img
                      src={`${API_BASE_URL}${post.image}`}
                      width="80"
                      height="80"
                      className="rounded me-3"
                      alt={post.title}
                    />
                    <div>
                      <Link
                        to={`/blogdetails/${post.slug}`}
                        className="fw-semibold text-dark d-block"
                      >
                        {post.title}
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted small">No recent posts found.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogdetails;