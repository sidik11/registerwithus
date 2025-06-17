import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Faq() {
    return (
        <section>
            <div className="container my-5">
                {/* <h2 className="text-center text-primary fw-bold mb-4">Frequently Asked Questions</h2> */}
                <h2 className="section-title text-center text-dark pb-5 d-block"><span className="overlap-conte" >Frequently Asked Questions</span></h2>

                <div className="accordion" id="faqAccordion">

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Who is eligible for PF Registration ?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                            <i class="fa fa-arrow-right me-2" aria-hidden="true"></i> Employees earning less than ₹15,000 per month are mandatorily required to contribute to the EPF scheme.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                What does it mean to register with us?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <i class="fa fa-arrow-right me-2" aria-hidden="true"></i>Registering with us means getting professional support for compliance, documentation, and smooth onboarding to statutory requirements.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How do I register my business with you?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <i class="fa fa-arrow-right me-2" aria-hidden="true"></i>You can register your business with us by filling out an online form, uploading necessary documents, and making the required payment.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                What documents are required to register with us?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <i class="fa fa-arrow-right me-2" aria-hidden="true"></i>Basic documents like PAN card, Aadhar card, business address proof, and incorporation certificate (if applicable) are required.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                How long does it take to complete the registration process?
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <i class="fa fa-arrow-right me-2" aria-hidden="true"></i>Generally, the registration process takes between 7 to 10 working days after submission of all required documents.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Are you a government service?
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <i class="fa fa-arrow-right me-2" aria-hidden="true"></i>No, we are a private entity offering professional assistance for government-related registrations and compliance processes.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSeven">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                I am already employed, will I be eligible for the program?
                            </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <i class="fa fa-arrow-right me-2" aria-hidden="true"></i>Yes, as long as your employer is covered under PF regulations, you will be eligible regardless of your current employment status.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingEight">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                What types of services can I access when I register with us?
                            </button>
                        </h2>
                        <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <i class="fa fa-arrow-right me-2" aria-hidden="true"></i>Services like PF registration, compliance management, advisory services, and periodic filing support are available.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingNine">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                Is it safe to register with us?
                            </button>
                        </h2>
                        <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <i class="fa fa-arrow-right me-2" aria-hidden="true"></i>Yes, we ensure complete confidentiality, data protection, and secure processing of your registration details.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTen">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                Can I track the status of my application after I register with you?
                            </button>
                        </h2>
                        <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <i class="fa fa-arrow-right me-2" aria-hidden="true"></i>Yes, you will receive regular updates via email or SMS, and you can also contact our support team anytime for the latest status.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingEleven">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                What support will I receive after I register with you?
                            </button>
                        </h2>
                        <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven"
                            data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <i class="fa fa-arrow-right me-2" aria-hidden="true"></i>Post-registration, you will receive ongoing support for compliance updates, filings, advisory services, and any issue resolution.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Faq;
