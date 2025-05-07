import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Servicedetails.css'

function Servicedetails() {
    return (
        <section>
            <div className="container py-5 mt-5">
                <div class="row align-items-center mb-5">
                    <div class="col-md-7">
                        <h3 class="fw-bold">Get Online EPF Registration</h3>
                        <p>
                            In India, the Employees’ Provident Fund (EPF) is a savings scheme governed by the Employees’ Provident Funds & Miscellaneous Provisions Act, 1952, and managed by the Employees’ Provident Fund Organisation (EPFO). Any establishment employing 20 or more individuals is required to register for PF. However, even businesses with fewer than 20 employees can voluntarily register for EPF, provided they meet certain conditions and exemptions. Upon retirement or resignation, employees receive a lump sum that includes both their own contributions and those made by the employer, along with accrued interest.
                        </p>
                    </div>
                    <div class="col-md-5 text-center">
                        <img src="img/service-details1.png" class="img-fluid" alt="EPF Registration" />
                    </div>
                </div>

                <div class="mb-5">
                    <h4 class="fw-bold text-center mb-3">Objectives of PF</h4>
                    <p className="text-align-justify" >PFO stands for Employees’ Provident Fund Organisation. It is a non-constitutional body under the Ministry of Labour & Employment, Government of India, established in 1951. The primary objective of EPFO is to encourage employees to save a portion of their salary for retirement, ensuring financial security and stability in their post-employment life.</p>
                    <div className="row d-flex justify-content-center align-items-center" >
                        <div className="col-lg-7 col-sm-12" >
                            <ul class="list-unstyled">
                                <li className="fw-bold" >✅ To Promote Retirement Savings</li>
                                <p>Encourage employees to save systematically during their working years  security after retirement.</p>
                                <li className="fw-bold" >✅ To Provide Social Security</li>
                                <p>Offer benefits such as provident fund, pension, and insurance to employees and their families.</p>
                                <li className="fw-bold" >✅ To Ensure Compliance with Labor Laws</li>
                                <p>Enforce and regulate adherence to the Employees’ Provident Funds & Miscellaneous Provisions Act, 1952.</p>
                                <li className="fw-bold" >✅ To Enable Transparent and Efficient Fund Management</li>
                                <p>Manage and maintain employee provident fund accounts with transparency through digital systems like UAN and the EPFO portal.</p>
                                <li className="fw-bold" >✅ To Support Employees in Times of Need</li>
                                <p>Allow partial withdrawals during emergencies like medical needs, education, home construction, or unemployment.</p>
                            </ul>
                        </div>
                        <div className="col-lg-5 col-sm-12" >
                            <img src="img/service-details2.png" class="img-fluid d-block mx-auto mt-3 obj-img" alt="Objectives" />
                        </div>
                    </div>
                </div>

                <h4 class="fw-bold text-center mb-4">PF Registration Rules & Compliance in India</h4>
                <div class="row align-items-center mb-5">
                    <div class="col-md-5 text-center">
                        <img src="img/pf.png" class="img-fluid" alt="Compliance" />
                    </div>
                    <div class="col-md-7">
                        <p>
                            In India, it is mandatory for an employer to obtain EPF (Employees' Provident Fund) Registration within one month of reaching a workforce strength of 20 employees or more. Failure to comply within this period may lead to penalties and legal consequences.
                        </p>
                        <p>Once registered, an establishment remains covered under the EPF Act, even if the number of employees later falls below 20. Additionally, the Central Government has the authority to extend the applicability of the EPF Act to organizations with fewer than 20 employees by issuing a notification with at least 2 months’ prior notice.</p>
                        <p>Furthermore, if the majority of employees and the employer mutually agree, they can voluntarily opt for EPF coverage by submitting a joint request to the Central PF Commissioner. Upon approval, the Commissioner may apply the provisions of the Act from the agreed date or any other specified date by issuing a notification in the Official Gazette.</p>
                    </div>
                </div>

                <div class="mb-5">
                    <h4 class="fw-bold text-center mb-4">Benefits of PF in India</h4>
                    <div className="row d-flex justify-content-center align-items-center" >
                        <div className="col-lg-7 col-sm-12lg-" col-sm-12 >
                            <ul class="list-unstyled">
                                <li className="fw-bold" >✅ Retirement Savings</li>
                                <p>PF helps employees build a secure financial cushion for their retirement through monthly contributions and interest accumulation.</p>
                                <li className="fw-bold" >✅ Tax Benefits</li>
                                <p>Contributions to PF are eligible for tax deductions under Section 80C of the Income Tax Act, making it a tax-saving investment.</p>
                                <li className="fw-bold" >✅ Employer Contribution</li>
                                <p>Employers also contribute an equal amount (generally 12%) to the employee’s PF account, boosting overall savings.</p>
                                <li className="fw-bold" >✅ Emergency Fund Access</li>
                                <p>Partial withdrawals are allowed for emergencies like medical treatment, education, home loan repayment, or marriage.</p>
                                <li className="fw-bold" >✅ Pension & Insurance Coverage</li>
                                <p>PF subscribers are also covered under the Employees’ Pension Scheme (EPS) and Employees’ Deposit Linked Insurance (EDLI) scheme, providing additional financial protection.</p>
                            </ul>
                        </div>
                        <div className="col-lg-5 col-sm-12lg-" col-sm-12 >
                            <div class="d-flex justify-content-around mt-4 flex-wrap gap-3">
                                <img src="img/benifits-pf.png" class="img-fluid" alt="Benefit 1" />
                            </div>
                        </div>
                    </div>

                </div>

                <h4 class="fw-bold text-center mb-4">Eligibility Criteria for PF Registration in India</h4>
                <div class="row align-items-center mb-5">
                    <div class="col-md-6 text-center">
                        <img src="img/employees.png" class="img-fluid" alt="Eligibility" />
                    </div>
                    <div class="col-md-6">
                        <p>Provident Fund (PF) is one of the most essential retirement savings schemes for employees in India, managed by the Employees’ Provident Fund Organisation (EPFO). The Employees’ Provident Fund & Miscellaneous Provisions Act, 1952 outlines the eligibility for PF participation and registration.</p>
                        <h5><strong>For Employees:</strong></h5>
                        <ul class="list-unstyled">
                            <li>✅ Employees earning less than ₹15,000 per month are mandatorily required to contribute to the PF scheme.</li>
                            <li>✅ Employees earning more than ₹15,000 per month at the time of joining are not automatically required to contribute. However, they can voluntarily opt-in to the PF scheme with the mutual consent of the employer and approval from the Assistant PF Commissioner.</li>
                        </ul>
                        <h5><strong>For Employers:</strong></h5>
                        <ul class="list-unstyled">
                            <li>✅ PF Registration is mandatory for every business or organization that employs 20 or more people.</li>
                            <li>✅ For organizations with less than 20 employees, PF Registration may still be required if directed by a Central Government notification.</li>
                        </ul>
                    </div>
                </div>

                <div class="mb-5">
                    <div className="row d-flex justify-content-center align-items-center" >
                        <div className="col-lg-7 col-sm-12" >
                            <h4 class="fw-semibold">Documents Required for PF Registration</h4>
                            <ul class="list-unstyled">
                                <li>✅ PAN Card of the Company</li>
                                <li>✅ Certificate of Incorporation</li>
                                <li>✅ Address Proof</li>
                                <li>✅ Bank Details</li>
                                <li>✅ ID Proof of Proprietor / Director / Partner</li>
                                <li>✅ Digital Signature Certificate (DSC)</li>
                                <li>✅ Details of Employees</li>
                            </ul>
                        </div>
                        <div className="col-lg-5 col-sm-12" >
                            <div class="text-center">
                                <img src="img/doc-pf.png" class="img-fluid" alt="Documents" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Servicedetails;
