import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './RegisterWithUs.css';

function RegisterWithUs() {
    return (
        <section className="integration-section py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 d-flex justify-content-center mb-5 mb-lg-0">
                        <img src="img/app-1x.png" alt="service" className="img-fluid left-img" />
                    </div>

                    <div className="col-lg-6 text-lg-start text-center">
                        <h2 className="headline">
                            Run Your Business 
                        </h2>
                        <h2 className="headline">
                        Smoothly with Tools 
                        </h2>
                        <h2 className="headline">
                       You Already Use 
                        </h2>
                        <p className="subtext icon-text">
                            <strong>Register With Us</strong> connects with your favorite apps like Gmail, Drive, Stack, and more, so you can manage company filings and government registrations online without leaving your workflow. Get business compliance and tools in one place.
                        </p>
                        {/* <a href="#" className="btn btn-customs">
                            Read more <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RegisterWithUs;