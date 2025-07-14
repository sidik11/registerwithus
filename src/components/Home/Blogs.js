import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Blogs.css';

function Blogs() {
    return (
        <section class="container py-5">
            <h2 class="section-title d-block"><span className="pb-5">Our Blogs</span></h2>

            <div class="row g-4 align-items-stretch">
                <div class="col-md-6 d-flex">
                    <div class="card blog-card w-100 d-flex flex-column justify-content-center blog-card1">
                        <img src="img/blog11.png" alt="Blog 1" class="blog-image mx-auto d-block" />
                        <div class="blog-text">
                            <h5>Accessible on all your devices</h5>
                            <p>
                                On our website, registerwithus.com, you can easily search and read about legal advertising.
                                We designed Register with Us to be as simple and user-friendly as possible.
                            </p>
                            <a href="/blogs" className="text-decoration-none">
                                Learn More <i className="fas fa-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 d-flex flex-column justify-content-between">
                    <div class="card blog-card mb-4 flex-grow-1 blog-card2">
                        <div class="row align-items-center h-100">
                            <div class="col-md-6 blog-text">
                                <h5>Designed to be simple to use</h5>
                                <p>
                                    On our website, registerwithus.com, you can easily explore and learn about legal advertising.
                                    We designed Register with Us to be as simple and user-friendly as possible.
                                </p>
                                <a href="/blogs" className="text-decoration-none">
                                    Learn More <i className="fas fa-arrow-right ms-2"></i>
                                </a>
                            </div>
                            <div class="col-md-6">
                                <img src="img/blog22.png" alt="Blog 2" class="img-fluid" />
                            </div>
                        </div>
                    </div>

                    <div class="card blog-card flex-grow-1 blog-card2">
                        <div class="row align-items-center h-100">
                            <div class="col-md-6">
                                <img src="img/blog33.png" alt="Blog 3" class="img-fluid" />
                            </div>
                            <div class="col-md-6 blog-text">
                                <h5>For personal and business use</h5>
                                <p>
                                    On our website, registerwithus.com, you can easily search and learn about legal advertising.
                                    We designed Register with Us to be simple and easy to use.
                                </p>
                                <a href="/blogs" className="text-decoration-none">
                                    Learn More <i className="fas fa-arrow-right ms-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blogs;
