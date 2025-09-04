import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Hero1.css';

function Hero1() {
    const [currentTab, setCurrentTab] = useState(0);

    const visualItems = [
        { src: "/img/businessconsultant.jpg", label: "Business Setup" },
        { src: "/img/clienttrust.jpg", label: "Client Trust" },
        { src: "/img/leadgeneration.jpg", label: "Lead Generation" },
    ];

    return (
        <section className="dream-launch-wrap py-5">
            <div className="container">
                <div className="row align-items-center layout-hero-zone">

                    {/* Left Content */}
                    <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 text-center text-lg-start text-launch-bloc">
                        <h6 className="section-tagline mb-2">Ignite Possibilities</h6>
                        <h1 className="headline-dream">
                            <span className="inline-type">We help you</span>
                            <span className="typing-hero"> rise, build, and lead.</span>
                        </h1>
                        <p className="desc-mission mt-3">
                            Empowering startups with seamless registration, compliance, and business growth services.
                        </p>
                        <div className="cta-launch-buttons mt-4 d-flex justify-content-center justify-content-lg-start">
                            <a href="#" className="btn primary-kickstart me-3">Get Started</a>
                            <a href="#" className="btn primary-kickstart">Play Demo <i className="fas fa-play ms-2"></i></a>
                        </div>
                    </div>

                    {/* Right Interactive Tabs */}
                    <div className="col-lg-6 col-md-12">
                        <div className="interactive-tab-slider text-center">
                            <div className="slider-visual-preview">
                                <img
                                    src={visualItems[currentTab].src}
                                    alt={visualItems[currentTab].label}
                                    className="img-fluid image-preview-box"
                                />
                            </div>
                            <div className="switch-buttons mb-3">
                                {visualItems.map((item, idx) => (
                                    <button
                                        key={idx}
                                        className={`switch-tab-btn ${currentTab === idx ? 'now-active' : ''}`}
                                        onClick={() => setCurrentTab(idx)}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero1;
