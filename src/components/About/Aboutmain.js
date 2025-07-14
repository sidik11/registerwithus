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
                        {/* <h2 className="fw-bold mb-3">Who we are?</h2>
                        <p>
                        Register with Us is a well-recognized group of individual professionals that has positioned itself as a leader in guiding entrepreneurs and corporate entities. We specialize in Company Incorporation, Taxation, and a wide range of professional services tailored to meet business needs. Our platform is dedicated to assisting startups and business owners by offering expert consultations and customized solutions designed for your business growth and compliance.
                        </p>
                        <p>
                        We operate through a network of independent professionals, and no member has the authority to obligate or bind Register with Us or any other member in dealings with third parties. Likewise, Register with Us does not have the authority to bind any individual professional or firm on our platform.
                        </p>
                        <p>
                            A key feature of our platform is that the experts do not engage in advertising or solicitation. Instead, clients themselves reach out with queries or cases, seeking out qualified professionals. This unique model ensures that clients are matched with the right experts based on their specific requirements, creating a reliable, transparent, and satisfactory experience.
                        </p> */}
                        <h2 className="fw-bold mb-3">Why We Exist?</h2>
                        <ul className='list-unstyled' >
                            <li><i class="fa-solid fa-check-double fa-icons me-2 text-dark"></i> We saw startups struggling with paperwork, delays, and hidden fees—so we built a smarter, clearer solution.</li>
                            <li><i class="fa-solid fa-check-double fa-icons me-2 text-dark"></i> Trusted by thousands already, we’re fixing online business registration in India with fast turnarounds and transparent pricing.</li>
                            <li><i class="fa-solid fa-check-double fa-icons me-2 text-dark"></i> From company formation to statutory compliance and post-registration support, we’ve got your legal backend covered.</li>
                        </ul>
                         <h2 className="fw-bold mb-3">Why We Do?</h2>
                         <p>Our services span the full lifecycle of business setup and compliance:</p>
                         <ul className='list-unstyled' >
                            <li><span className='fw-bold' ><i class="fa-solid fa-check-double fa-icons me-2 text-dark"></i> Company & LLP Registration: </span>Pvt Ltd, LLP, OPC, Public Ltd—tailored for founders, SMEs, and professionals</li>
                            <li><span className='fw-bold' ><i class="fa-solid fa-check-double fa-icons me-2 text-dark"></i> Compliance & Statutory Registrations: </span>EPF, ESIC, GST, MSME/Udyam, FSSAI, import‑export licenses and many more</li>
                            <li><span className='fw-bold' ><i class="fa-solid fa-check-double fa-icons me-2 text-dark"></i> Regulatory & Payroll Support: </span>ITR/GST filings, bookkeeping, payroll, and labor law compliance</li>
                            <li><span className='fw-bold' ><i class="fa-solid fa-check-double fa-icons me-2 text-dark"></i> Advisory & Connect Services: </span>Udyam/MSME, Startup India recognition, trademark applications, and funding access</li>
                         </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Aboutmain;
