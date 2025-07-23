import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Abouthero.css';

function Abouthero() {
    return (
        <section className="about-section">
            <div className="about-overlay">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        {/* Left Side Content */}
                        <div className="col-lg-7 text-white about-hero-content">
                            {/* <h5 className="sub-head">Learn. Grow. Succeed.</h5> */}
                            <h1 className="hero-title">
                                About <span className="highlight-yellow">Register With Us</span>
                            </h1>

                            <p className="fs-5 mt-3">
                               <span className='fw-bold' >Register With Us</span> is India’s go-to legal-tech hub for entrepreneurs, startups, and SMEs looking to set up and scale their businesses completely online. We cut the clutter, no repetitive office visits, no surprise or hidden charges, just simple registration and compliance handled by experts.
                            </p>

                            {/* <ul className="hero-features mt-4">
                                <li><i className="fas fa-check-circle text-success me-2"></i> Student-Centric Learning</li>
                                <li><i className="fas fa-check-circle text-success me-2"></i> Empowering Young Minds</li>
                                <li><i className="fas fa-check-circle text-success me-2"></i> Passionate Educators</li>
                            </ul>

                            <div className="btn-area mt-4 d-flex align-items-center flex-wrap">
                                <a href="#" className="btn btn-yellow">Explore More</a>
                                <button className="btn play-btnsss ms-3"><i className="fas fa-play me-2"></i> Watch Video</button>
                            </div> */}
                            <a href="#" className="btn cta-btn-glass">
                                <i className="fa-solid fa-phone me-2"></i>Call Now <i className="fa-solid fa-arrow-right ms-2"></i>
                            </a>
                        </div>

                        {/* Right Side Form */}
                        <div className="col-lg-5">
                            <div className="styled-form-containers">
                                <p className='text-white' >Submit your details to get an instant <span className='text-theme' >All-inclusive</span> Quote to your email and a <span className='text-theme' >FREE</span> Expert Consultation</p>
                                <form>
                                    <input type="text" className="form-control custom-inputs mb-3" placeholder="Your Name" required />
                                    <div className="input-group mb-3">
                                        <span className="input-group-text custom-addons">+91</span>
                                        <input type="tel" className="form-control custom-inputs" placeholder="Mobile Number" required />
                                    </div>
                                    <input type="email" className="form-control custom-inputs mb-3" placeholder="Email" required />
                                    <textarea className="form-control custom-inputs mb-3" placeholder="Message" rows="3" required></textarea>
                                    <button type="submit" className="btn btn-gradients w-100 fw-bold">Send Message →</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Abouthero;
