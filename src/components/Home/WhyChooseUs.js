import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './WhyChooseUs.css';

function WhyChooseUs() {
    return (
        <section class="whychooseus-section" >
            <div className="container py-5 text-center">
                <h2 className="section-title">
                    <span className="fw-bold text-white mb-4">Why Choose Us</span>
                </h2>

                <div className="row g-4 justify-content-center">
                    {/* Feature 1 */}
                    <div className="col-md-3">
                        <div className="feature-card text-center p-4">
                            <i className="fas fa-shield-alt feature-icon mb-3"></i>
                            <h5 className='fw-bold' >Security & Trust</h5>
                            <p>We ensure the highest level of security and reliability for all our services.</p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="col-md-3">
                        <div className="feature-card text-center p-4">
                            <i className="fas fa-cogs feature-icon mb-3"></i>
                            <h5 className='fw-bold' >Seamless Integration</h5>
                            <p>Effortlessly connect with various platforms and streamline your workflow.</p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="col-md-3">
                        <div className="feature-card text-center p-4">
                            <i className="fas fa-user-check feature-icon mb-3"></i>
                            <h5 className='fw-bold' >Customer Focus</h5>
                            <p>We prioritize your needs and tailor solutions to enhance your experience.</p>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="col-md-3">
                        <div className="feature-card text-center p-4">
                            <i className="fas fa-lightbulb feature-icon mb-3"></i>
                            <h5 className='fw-bold' >Innovation & Growth</h5>
                            <p>Constantly evolving to provide cutting-edge solutions that drive success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default WhyChooseUs;
