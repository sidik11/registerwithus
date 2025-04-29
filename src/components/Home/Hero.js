import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Hero.css'

function Hero() {
    return (
        <section className="hero py-5">
            <div className="container hero-cont">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 hero-text">
                        <h6>BEST DESTINATIONS AROUND THE WORLD</h6>
                        <h1 className="mt-3">
                            Get More <span className="underline-style">Done</span>
                            <br />
                            Register With Us
                        </h1>
                        <p>
                            Built Wicket longer admire do barton vanity itself do in it.
                            Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                        </p>
                        <div className="d-flex align-items-center flex-wrap mt-4">
                            <a href="#" className="btn btn-gradient">Find out more</a>
                            <a href="#" className="d-flex align-items-center text-decoration-none mt-lg-3 btn-play">
                                <div className="play-btn ms-3">
                                    <i className="fas fa-play"></i>
                                </div>
                                <span className="ms-3 text-dark fw-semibold">Play Demo</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 text-end">
                        <div>
                            <img src="img/New Project 1.png" alt="Hero" className="img-fluid custom-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
