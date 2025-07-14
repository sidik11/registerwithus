import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Heroo.css'

function Heroo() {
    return (
        <section className="hero py-5 mt-5">
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
                            <a href="#" className="btn btn-gradients">Find out more</a>
                            <a href="#" className="btn btn-gradients ms-3">
                                <div className='text-decoration-none mt-lg-3 btn-play'>
                                    <i className="fas fa-play"></i> Play Demo
                                </div>
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

export default Heroo;