import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Hero3.css';

function Hero3() {
    return (
        <section className="biz-hero-section mt-5">
            <div className="biz-hero-overlay">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-lg-7 text-white biz-hero-content">
                            <h1 className="hero-title">
                                We help you <br />
                                <span className="highlight-yellow">Anyway</span> to rise, build, and lead.
                            </h1>
                            <h5 className="sub-head">Ignite Possibilities</h5>

                            <ul className="hero-features mt-4">
                                <li><i className="fas fa-check-circle text-success me-2"></i> Empowering startups with seamless registration</li>
                                <li><i className="fas fa-check-circle text-success me-2"></i> compliance</li>
                                <li><i className="fas fa-check-circle text-success me-2"></i> business growth services</li>
                            </ul>

                            <div className="btn-area mt-4 d-flex align-items-center flex-wrap">
                                <a href="#" className="btn btn-yellow">Explore More</a>
                                <button className="btn play-btnsss ms-3"><i className="fas fa-play me-2"></i> Play Now</button>
                            </div>
                        </div>
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
                                    <button type="submit" className="btn btn-gradients w-100 fw-bold">Register Now →</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero3;
