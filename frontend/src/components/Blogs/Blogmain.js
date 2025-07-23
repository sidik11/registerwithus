import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Blogmain.css';

function Blogmain() {
    return (
        <section className="services-section">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="fw-bold theme-color">Resources and insights</h2>
                    <p className="text-muted fs-5">The latest industry news, interviews, technologies, and resources.</p>
                </div>

                <div className="d-flex justify-content-end mb-4">
                    <input type="search" className="form-control search-box" placeholder="Search" />
                </div>

                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <img src="img/blog1.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="category mb-1">Design</div>
                                <h5 className="card-title">
                                    <Link to="/blogdetails" className="text-decoration-none text-dark">
                                        Mastering ChatGPT
                                    </Link>
                                </h5>
                                <p className="card-text">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                            </div>
                            <div className="card-footer bg-white border-0 d-flex align-items-center">
                                <img src="https://i.pravatar.cc/32?img=1" alt="Author" className="author-img me-2" />
                                <small>Olivia Rhye &middot; 20 Jan 2022</small>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <img src="img/blog2.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="category mb-1">Product</div>
                                <h5 className="card-title">
                                <Link to="/blogdetails" className="text-decoration-none text-dark">
                                Migrating to Linear 101
                                    </Link>
                                </h5>
                                <p className="card-text">Linear helps streamline software projects, sprints, tasks, and bug tracking.</p>
                            </div>
                            <div className="card-footer bg-white border-0 d-flex align-items-center">
                                <img src="https://i.pravatar.cc/32?img=2" alt="Author" className="author-img me-2" />
                                <small>Phoenix Baker &middot; 19 Jan 2022</small>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <img src="img/blog3.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="category mb-1">Software Engineering</div>
                                <h5 className="card-title">
                                <Link to="/blogdetails" className="text-decoration-none text-dark">
                                Building your API Stack
                                    </Link>
                                </h5>
                                <p className="card-text">The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>
                            </div>
                            <div className="card-footer bg-white border-0 d-flex align-items-center">
                                <img src="https://i.pravatar.cc/32?img=3" alt="Author" className="author-img me-2" />
                                <small>Lana Steiner &middot; 18 Jan 2022</small>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <img src="img/blog4.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="category mb-1">Management</div>
                                <h5 className="card-title">
                                <Link to="/blogdetails" className="text-decoration-none text-dark">
                                Bill Walsh leadership lessons
                                    </Link>
                                </h5>
                                <p className="card-text">Learn how the secrets of transforming a 2-14 team into a Super Bowl-winning dynasty!</p>
                            </div>
                            <div className="card-footer bg-white border-0 d-flex align-items-center">
                                <img src="https://i.pravatar.cc/32?img=4" alt="Author" className="author-img me-2" />
                                <small>Alex Wilkins &middot; 17 Jan 2022</small>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <img src="img/blog5.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="category mb-1">Product</div>
                                <h5 className="card-title">
                                <Link to="/blogdetails" className="text-decoration-none text-dark">
                                PM mental models
                                    </Link>
                                </h5>
                                <p className="card-text">Mental models are simple expressions of complex processes or relationships.</p>
                            </div>
                            <div className="card-footer bg-white border-0 d-flex align-items-center">
                                <img src="https://i.pravatar.cc/32?img=5" alt="Author" className="author-img me-2" />
                                <small>Drew Wilkinson &middot; 16 Jan 2022</small>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <img src="img/blog6.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="category mb-1">Design</div>
                                <h5 className="card-title">
                                <Link to="/blogdetails" className="text-decoration-none text-dark">
                                What is Wireframing?
                                    </Link>
                                </h5>
                                <p className="card-text">Introduction to Wireframing and its principles. Learn from the best in the industry.</p>
                            </div>
                            <div className="card-footer bg-white border-0 d-flex align-items-center">
                                <img src="https://i.pravatar.cc/32?img=6" alt="Author" className="author-img me-2" />
                                <small>Candice Wu &middot; 15 Jan 2022</small>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='py-5 text-center' >
                    <button className='btn theme-bg-color text-white' >Load More</button>
                </div>
            </div>
        </section>
    );
}

export default Blogmain;
