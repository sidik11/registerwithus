import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Hero.css';

function Hero() {
    return (
        <section className="hero-section py-5">
            <div className="container">
                <div className="row align-items-center justify-content-between hero-cont">

                    {/* Left Content */}
                    <div className="col-lg-6 col-md-12 hero-content mb-5 mb-lg-0">
                        <h6 className="text-uppercase text-white">Launch Your Dream</h6>
                        <h1 className='text-white' >
                            Start Your <span className="highlight">Business</span><br /> with Confidence
                        </h1>
                        <p className='text-white' >
                            We help you register, license, and manage compliance for your startup, seamlessly and efficiently.
                        </p>

                        <div className="d-flex align-items-center flex-wrap mt-4 justify-content-center">
                            <a href="#" className="btn btn-gradient">Find out more</a>
                            <a href="#" className="btn btn-gradient d-flex align-items-center text-decoration-none mt-lg-3 btn-play ms-3">
                                <div className="play-btnss ms-3">
                                    <i className="fas fa-play"></i>
                                </div>
                                <span className="ms-3 text-dark fw-semibold">Play Demo</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Image Carousel */}
                    <div className="col-lg-6 col-md-12">
                        <div id="heroImageCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="/img/businessconsultant.jpg" className="d-block w-100 hero-img" alt="Slide 1" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/img/clienttrust.jpg" className="d-block w-100 hero-img" alt="Slide 2" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/img/leadgeneration.jpg" className="d-block w-100 hero-img" alt="Slide 3" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#heroImageCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#heroImageCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;
