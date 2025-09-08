import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Faq() {
    return (
        <section>
            <div className="container my-5">
                {/* <h2 className="text-center text-primary fw-bold mb-4">Frequently Asked Questions</h2> */}
                <h2 className="section-title text-center text-dark d-block"><span className="about-us-heading" >Frequently Asked Questions</span></h2>

                <div className="accordion" id="faqAccordion">

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                1. What services does Register With Us provide for startups and smatt businesses?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <i class="fa fa-arrow-right me-2" aria-hidden="true"></i> We offer all-in-one business compliance platform services including company formation, GST
                                registration, FSSAI Licensing, trademark filings, tax returns, and more, entirely online.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                2. Can I apply for multiple registrations and licenses through Register With Us?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <i class="fa fa-arrow-right me-2" aria-hidden="true"></i> Yes! You can apply for licenses and compliance online, PAN, TAN, GST, EPF, MSME, FSSAI, IEC,
                                and more, all from one convenient dashboard.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                3. Is your platform suitable for freefancers or sole proprietors?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <i class="fa fa-arrow-right me-2" aria-hidden="true"></i> Absolutely. From online MSME registration to tax and license compliance, our platform is ideal
                                for freelancers, solopreneurs, and small businesses across India.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                4. How does Register With Us ensure timely filings and compliance?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <i class="fa fa-arrow-right me-2" aria-hidden="true"></i> As a trusted company compliance service provider in India, we use smart tools and expert
                                support to handle every deadline, filing, and renewal without delays.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                5. Can I register my company online without visiting any government office?
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <i class="fa fa-arrow-right me-2" aria-hidden="true"></i> Yes. You can start your company online with us. We handle the entire process digitally, from
                                DSC to DIN, incorporation, and certification.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                6. Does your service include FSSAI and trademark applications?
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <i class="fa fa-arrow-right me-2" aria-hidden="true"></i> Yes, we help you get your FSSAI license and apply for a trademark in India, ensuring your
                                brand and business are protected under law.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSeven">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                7. What kind of tax services do you offer for businesses?
                            </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <i class="fa fa-arrow-right me-2" aria-hidden="true"></i> Our online legal and tax services for businesses include GST returns, ITR filing (individual &
                                corporate), TDS filing, and support for tax audits and reconciliation.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingEight">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                8. How can I track my registration or license status?
                            </button>
                        </h2>
                        <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <i class="fa fa-arrow-right me-2" aria-hidden="true"></i> After submission, you’ll get live updates and support. We are India's trusted compliance &
                                registration partner, ensuring full visibility for atL filings.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingNine">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                9. Can I get  help updating directors, address, or capital in my company?
                            </button>
                        </h2>
                        <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <i class="fa fa-arrow-right me-2" aria-hidden="true"></i> Yes, we provide ROC compliance support including changes in directors, shareholding, office
                                address, and other company modifications under MCA guidelines.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTen">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                10.  Why  should I choose Register With Us over other platforms?
                            </button>
                        </h2>
                        <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <i class="fa fa-arrow-right me-2" aria-hidden="true"></i> We combine expert service, transparent pricing, and end-to-end support. As your government
                                registration service provider for business, we simplify every legal step.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Faq;
