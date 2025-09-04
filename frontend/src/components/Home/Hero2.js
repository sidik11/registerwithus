import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Hero2.css';

function Hero2() {
    return (
        <section className="neo-hero-zone py-5">
            <div className="container">
                <div className="row align-items-center justify-content-between layout-split-wrap">

                    {/* Left Image with floating badges */}
                    <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 image-badge-block">
                        <div className="image-display-wrap position-relative">
                            <img src="/img/leadgeneration.jpg" alt="Business Visual" className="main-display-image img-fluid" />
                            <div className="floating-label label-top-left">
                                <i className="fas fa-chart-line me-2"></i> Growth
                            </div>
                            <div className="floating-label label-bottom-right">
                                <i className="fas fa-shield-alt me-2"></i> Compliance
                            </div>
                        </div>
                    </div>

                    {/* Right Side Content */}
                    <div className="col-lg-6 col-md-12 content-section-text text-center text-lg-start">
                        <div className="highlighted-tag bg-gradient-tag mb-3 d-inline-block px-3 py-1">
                            <span className="text-white fw-bold">Startup Simplified</span>
                        </div>
                        <h1 className="heading-neo mb-3">
                            Build Your <span className="text-focus">Business</span><br /> Without the Hassle
                        </h1>
                        <p className="desc-neo mb-4">
                            We assist entrepreneurs in launching their ideas into reality — legally, safely, and fast.
                        </p>
                        <div className="action-area-launch d-flex flex-wrap justify-content-center justify-content-lg-start">
                            <a href="#" className="btn get-started-btn me-3">Start Now</a>
                            <a href="#" className="btn learn-more-outline">Learn More <i className="fas fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero2;
