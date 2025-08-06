import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Blogs.css';

function Blogs() {
    return (
        <section className="container py-5">
            <h2 className="section-title d-block about-us-heading">
                <span>Our Blogs</span>
            </h2>

            <div className="row g-4 align-items-stretch">
                {/* Blog Card 1 */}
                <div className="col-md-6 d-flex">
                    <a href="/blogs" className="text-decoration-none w-100 ">
                        <div className="card blog-card w-100 d-flex flex-column justify-content-center blog-card1 h-100">
                            <img src="img/blog11.png" alt="Blog 1" className="blog-image mx-auto d-block" />
                            <div className="blog-text">
                                <h5>Accessible on all your devices</h5>
                                <p>
                                    On our website, registerwithus.com, you can easily search and read about legal advertising.
                                    We designed Register with Us to be as simple and user-friendly as possible.
                                </p>
                                <span className="text-primary">
                                    Learn More <i className="fas fa-arrow-right ms-2"></i>
                                </span>
                            </div>
                        </div>
                    </a>
                </div>

                {/* Blog Cards 2 & 3 */}
                <div className="col-md-6 d-flex flex-column justify-content-between">
                    {/* Blog Card 2 */}
                    <a href="/blogs" className="text-decoration-none mb-4 flex-grow-1 ">
                        <div className="card blog-card blog-card2 h-100">
                            <div className="row align-items-center h-100">
                                <div className="col-md-6 blog-text">
                                    <h5>Designed to be simple to use</h5>
                                    <p>
                                        On our website, registerwithus.com, you can easily explore and learn about legal advertising.
                                        We designed Register with Us to be as simple and user-friendly as possible.
                                    </p>
                                    <span className="text-primary">
                                        Learn More <i className="fas fa-arrow-right ms-2"></i>
                                    </span>
                                </div>
                                <div className="col-md-6">
                                    <img src="img/blog22.png" alt="Blog 2" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* Blog Card 3 */}
                    <a href="/blogs" className="text-decoration-none flex-grow-1 ">
                        <div className="card blog-card blog-card2 h-100">
                            <div className="row align-items-center h-100">
                                <div className="col-md-6">
                                    <img src="img/blog33.png" alt="Blog 3" className="img-fluid" />
                                </div>
                                <div className="col-md-6 blog-text">
                                    <h5>For personal and business use</h5>
                                    <p>
                                        On our website, registerwithus.com, you can easily search and learn about legal advertising.
                                        We designed Register with Us to be simple and easy to use.
                                    </p>
                                    <span className="text-primary">
                                        Learn More <i className="fas fa-arrow-right ms-2"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Blogs;
