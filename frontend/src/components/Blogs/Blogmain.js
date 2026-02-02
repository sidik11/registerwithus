import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../utils/api.js';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Blogmain.css';

function Blogmain() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch all blogs
    fetch(`${API_BASE_URL}/api/blogs`)
      .then(res => res.json())
      .then(data => {
        if (data.success) setBlogs(data.blogs);
      })
      .catch(err => console.error("Blogs API error:", err));

    // Fetch categories
    fetch(`${API_BASE_URL}/api/blogs?type=category`)
      .then(res => res.json())
      .then(data => {
        if (data.success) setCategories(data.categories);
      })
      .catch(err => console.error("Categories API error:", err));
  }, []);

  // Filter blogs by title or category
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category_name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="blogs-section py-5">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold theme-color">Blogs & Theories</h2>

        {/* Search */}
        <div className="d-flex justify-content-center mb-4">
          <div className="search-container w-100" style={{ maxWidth: "400px" }}>
            <span className="icon"><i className="fa fa-search"></i></span>
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Blog Cards */}
        <div className="row g-4">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map(blog => (
              <div className="col-md-4" key={blog.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={`${API_BASE_URL}${blog.image}`}
                    className="card-img-top"
                    alt={blog.title}
                  />
                  <div className="card-body">
                    <div className="category mb-1">{blog.category_name}</div>
                    <h5 className="card-title">
                      <Link to={`/blogdetails/${blog.slug}`} className="text-dark text-decoration-none">
                        {blog.title}
                      </Link>
                    </h5>
                  </div>
                  <div className="card-footer bg-white border-0 d-flex align-items-center">
                    <img src="https://i.pravatar.cc/32?img=10" alt="Author" className="author-img me-2" />
                    <small>
                      Register With Us • {new Date(blog.created_at).toLocaleDateString('en-GB', {
                        day: '2-digit', month: 'long', year: 'numeric'
                      })}
                    </small>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center my-5">
              <img
                src="https://cdn-icons-png.flaticon.com/512/7486/7486817.png"
                alt="No blogs"
                style={{ width: '120px', opacity: 0.6 }}
              />
              <h4 className="mt-4 text-secondary fw-semibold">No Blogs Found</h4>
              <p className="text-muted">Try adjusting your search or check back later.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Blogmain;