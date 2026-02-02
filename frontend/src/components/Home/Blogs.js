import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../utils/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Blogs.css';
function Blogs() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch(`${API_BASE_URL}/api/blogs`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    // ✅ Take only the first 3 blogs
                    const fetched = data.blogs.slice(0, 3);
                    // ✅ Alert if description missing
                    const missingDesc = fetched.filter(b => !b.blogDescription || b.blogDescription.trim() === "");
                    if (missingDesc.length > 0) {
                        alert(`⚠️ ${missingDesc.length} blog(s) have missing description content!`);
                        console.warn("Blogs missing description:", missingDesc);
                    }
                    setBlogs(fetched);
                } else {
                    alert("⚠️ Failed to fetch blogs from API.");
                }
            })
            .catch(err => {
                console.error("Blogs API error:", err);
                alert("❌ Error fetching blogs. Check console for details.");
            });
    }, []);
    // ✅ Helper function: remove HTML tags and shorten text
    const getPlainDescription = (htmlText = "", limit = 120) => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = htmlText;
        const plainText = tempDiv.textContent || tempDiv.innerText || "";
        return plainText.length > limit ? plainText.slice(0, limit) + "..." : plainText;
    };
    return (
        <section className="container py-5">
            <h2 className="section-title d-block about-us-heading">
                <span>Our Blogs</span>
            </h2>
            <div className="row g-4 align-items-stretch">
                {blogs.length > 0 ? (
                    <>
                        {/* ✅ Blog Card 1 */}
                        <div className="col-md-6 d-flex">
                            <Link to={`/blogdetails/${blogs[0].slug}`} className="text-decoration-none w-100">
                                <div className="card blog-card w-100 d-flex flex-column justify-content-center blog-card1 h-100">
                                    <img
                                        src={`${API_BASE_URL}${blogs[0].image}`}
                                        alt={blogs[0].title}
                                        className="blog-image mx-auto d-block"
                                    />
                                    <div className="blog-text">
                                        <h5>{blogs[0].title}</h5>
                                        <p>{getPlainDescription(blogs[0].blogDescription, 120)}</p>
                                        <span className="text-primary">
                                            Learn More <i className="fas fa-arrow-right ms-2"></i>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {/* ✅ Blog Cards 2 & 3 */}
                        <div className="col-md-6 d-flex flex-column justify-content-between">
                            {/* Blog Card 2 */}
                            {blogs[1] && (
                                <Link to={`/blogdetails/${blogs[1].slug}`} className="text-decoration-none mb-4 flex-grow-1">
                                    <div className="card blog-card blog-card2 h-100">
                                        <div className="row align-items-center h-100">
                                            <div className="col-md-6 blog-text">
                                                <h5>{blogs[1].title}</h5>
                                                <p>{getPlainDescription(blogs[1].blogDescription, 100)}</p>
                                                <span className="text-primary">
                                                    Learn More <i className="fas fa-arrow-right ms-2"></i>
                                                </span>
                                            </div>
                                            <div className="col-md-6">
                                                <img
                                                    src={`${API_BASE_URL}${blogs[1].image}`}
                                                    alt={blogs[1].title}
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )}
                            {/* Blog Card 3 */}
                            {blogs[2] && (
                                <Link to={`/blogdetails/${blogs[2].slug}`} className="text-decoration-none flex-grow-1">
                                    <div className="card blog-card blog-card2 h-100">
                                        <div className="row align-items-center h-100">
                                            <div className="col-md-6">
                                                <img
                                                    src={`${API_BASE_URL}${blogs[2].image}`}
                                                    alt={blogs[2].title}
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="col-md-6 blog-text">
                                                <h5>{blogs[2].title}</h5>
                                                <p>{getPlainDescription(blogs[2].blogDescription, 100)}</p>
                                                <span className="text-primary">
                                                    Learn More <i className="fas fa-arrow-right ms-2"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="text-center my-5">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/7486/7486817.png"
                            alt="No blogs"
                            style={{ width: '120px', opacity: 0.6 }}
                        />
                        <h4 className="mt-4 text-secondary fw-semibold">No Blogs Found</h4>
                    </div>
                )}
            </div>
        </section>
    );
}
export default Blogs;
