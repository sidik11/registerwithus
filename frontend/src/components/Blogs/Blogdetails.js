import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Blogdetails.css';
import { API_BASE_URL } from '../../utils/api.js'; // ✅ Add this
function Blogdetails() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);
    useEffect(() => {
        fetch(`${API_BASE_URL}/api/blogs`) // ✅ use API_BASE_URL
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    const matchedBlog = data.blogs.find(item => item.id.toString() === id);
                    setBlog(matchedBlog);
                    if (matchedBlog) {
                        // Related posts (same category, excluding current)
                        const related = data.blogs
                            .filter(item =>
                                item.category_name === matchedBlog.category_name &&
                                item.id.toString() !== id
                            )
                            .slice(0, 5); // Max 5
                        setRelatedPosts(related);
                    }
                    // Recent posts (excluding current, sorted by date)
                    const recent = data.blogs
                        .filter(item => item.id.toString() !== id)
                        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                        .slice(0, 5);
                    setRecentPosts(recent);
                }
            });
    }, [id]);
    if (!blog) {
        return (
            <div className="container py-5 mt-5 text-center">
                <h4 className="text-muted">Loading Blog...</h4>
            </div>
        );
    }
    return (
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
                    {/* Left Side */}
                    <div className="col-lg-8">
                        <img
                            src={`${API_BASE_URL}${blog.image}`} // ✅ use API_BASE_URL
                            className="img-fluid blog-img mb-4"
                            alt={blog.title}
                        />
                        <div dangerouslySetInnerHTML={{ __html: blog.blogDescription }} />
                        <div className="mt-4">
                            <strong>Category:</strong> {blog.category_name}
                        </div>
                    </div>
                    {/* Right Sidebar */}
                    <div className="col-lg-4 mt-5 mt-lg-0">
                        {/* Related Posts */}
                        <h5 className="fw-bold mb-3">Related Posts</h5>
                        {relatedPosts.length > 0 ? (
                            relatedPosts.map((post) => (
                                <div className="related-post d-flex mb-3" key={post.id}>
                                    <img
                                        src={`${API_BASE_URL}${post.image}`} // ✅ use API_BASE_URL
                                        className="me-3 rounded"
                                        alt={post.title}
                                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                    />
                                    <div className="info">
                                        <Link to={`/blogdetails/${post.id}`} className="fw-semibold d-block text-dark">
                                            {post.title}
                                        </Link>
                                        <span className="text-muted">
                                            {new Date(post.created_at).toLocaleDateString('en-GB', {
                                                day: '2-digit',
                                                month: 'short',
                                                year: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-muted small">No related posts found.</p>
                        )}
                        {/* Recent Posts */}
                        <h5 className="fw-bold mt-4 mb-3">Recent Posts</h5>
                        {recentPosts.length > 0 ? (
                            recentPosts.map((post) => (
                                <div className="related-post d-flex mb-3" key={post.id}>
                                    <img
                                        src={`${API_BASE_URL}${post.image}`} // ✅ use API_BASE_URL
                                        className="me-3 rounded"
                                        alt={post.title}
                                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                    />
                                    <div className="info">
                                        <Link to={`/blogdetails/${post.id}`} className="fw-semibold d-block text-dark">
                                            {post.title}
                                        </Link>
                                        <span className="text-muted">
                                            {new Date(post.created_at).toLocaleDateString('en-GB', {
                                                day: '2-digit',
                                                month: 'short',
                                                year: 'numeric'
                                            })}
                                        </span>
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
    );
}
export default Blogdetails;
