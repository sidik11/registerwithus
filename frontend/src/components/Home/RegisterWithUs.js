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
                        <img src="img/Apps (1).png" alt="" className="img-fluid left-img" />
                    </div>

                    <div className="col-lg-6 text-lg-start text-center">
                        <h2 className="headline">
                            Work with Your 
                        </h2>
                        <h2 className="headline">
                        Favourite Apps Using 
                        </h2>
                        <h2 className="headline">
                        Register With Us 
                        </h2>
                        <p className="subtext icon-text">
                            <strong>Register With Us</strong> teams up with your favourite software. Integrate with over 1000+ apps
                            with Zapier to have all the tools you need for your project success.
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