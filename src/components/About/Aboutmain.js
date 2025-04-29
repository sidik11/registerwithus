import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Aboutmain.css'

function Aboutmain() {
    return (
        <section>
            <div className="container py-5">
                <div className="row align-items-center">

                    <div className="col-md-6 text-center">
                        <img src="img/Aboutmain.png" alt="Who We Are" className="who-we-are-img img-fluid" />
                    </div>

                    <div className="col-md-6">
                        <h2 className="fw-bold mb-3">Who we are?</h2>
                        <p>
                        Register with Us is a well-recognized group of individual professionals that has positioned itself as a leader in guiding entrepreneurs and corporate entities. We specialize in Company Incorporation, Taxation, and a wide range of professional services tailored to meet business needs. Our platform is dedicated to assisting startups and business owners by offering expert consultations and customized solutions designed for your business growth and compliance.
                        </p>
                        <p>
                        We operate through a network of independent professionals, and no member has the authority to obligate or bind Register with Us or any other member in dealings with third parties. Likewise, Register with Us does not have the authority to bind any individual professional or firm on our platform.
                        </p>
                        <p>
                            A key feature of our platform is that the experts do not engage in advertising or solicitation. Instead, clients themselves reach out with queries or cases, seeking out qualified professionals. This unique model ensures that clients are matched with the right experts based on their specific requirements, creating a reliable, transparent, and satisfactory experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Aboutmain;
