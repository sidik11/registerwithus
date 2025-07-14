import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Servicedetails.css';
import tabData from './services.json';

function Servicedetails() {
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const serviceName = params.get("name");

        if (serviceName) {
            const matched = tabData.find(
                item => item.service.toLowerCase().trim() === serviceName.toLowerCase().trim()
            );

            if (matched) {
                const heroHeading = document.querySelector(".hero-gradient-bg h1");
                const heroSubtext = document.querySelector(".hero-gradient-bg p.mb-3");
                const heroList = document.querySelector(".hero-gradient-bg ul");
                const trustLogo = document.querySelector(".hero-gradient-bg img");
                const trustText = document.querySelector(".hero-gradient-bg .d-flex p");

                if (heroHeading) heroHeading.innerText = matched?.tabs?.[0]?.title || matched.service || "Business Service";
                if (heroSubtext) {
                    heroSubtext.innerText = matched?.intro || matched?.tabs?.[0]?.intro || "Start your journey with our professional services.";
                }
                if (heroList && Array.isArray(matched.tabs)) {
                    heroList.innerHTML = matched.tabs
                        .map(tab => tab.title)
                        .filter(Boolean)
                        .slice(0, 6)
                        .map(title => `<li><i class="fa-solid fa-check-double me-2"></i> ${title}</li>`)
                        .join("");
                }

                if (trustLogo) trustLogo.src = "https://cdn.trustpilot.net/brand-assets/4.4.0/logo-white.svg";
                if (trustText) trustText.innerText = "4.1 out of 5 based on 1,886 reviews";

                // 🛠 Delay DOM injection
                setTimeout(() => {
                    matched.tabs.forEach(tab => {
                        const container = document.getElementById(tab.id);
                        if (!container) return;

                        let html = "";
                        if (tab.title) html += `<h4>${tab.title}</h4>`;
                        if (Array.isArray(tab.content)) html += tab.content.map(p => `<p>${p}</p>`).join("");
                        if (tab.intro) html += `<p>${tab.intro}</p>`;
                        if (Array.isArray(tab.types)) {
                            html += `<div class="mb-4">` +
                                tab.types.map(type => `
                                <div class="mb-3">
                                    <h5 class="fw-semibold">${type.heading}</h5>
                                    <p>${type.description}</p>
                                    <p class="text-muted"><em>${type.example}</em></p>
                                </div>
                            `).join("") + `</div>`;
                        }
                        if (Array.isArray(tab.points)) {
                            html += tab.points.map(point => `
                            <div class="mb-3">
                                <h5>${point.title}</h5>
                                <p>${point.description}</p>
                                ${Array.isArray(point.subpoints) ? `<ul>${point.subpoints.map(sp => `<li>${sp}</li>`).join("")}</ul>` : ""}
                            </div>
                        `).join("");
                        }
                        if (Array.isArray(tab.identityDocuments)) {
                            html += `<h5 class="mt-3">Identity Documents</h5><ul>${tab.identityDocuments.map(doc => `<li>${doc}</li>`).join("")}</ul>`;
                        }
                        if (Array.isArray(tab.addressProof)) {
                            html += `<h5 class="mt-3">Address Proof</h5><ul>${tab.addressProof.map(doc => `<li>${doc}</li>`).join("")}</ul>`;
                        }
                        if (Array.isArray(tab.steps)) {
                            html += `<ol>${tab.steps.map(step => `<li>${step}</li>`).join("")}</ol>`;
                        }
                        if (tab.note) {
                            html += `<p class="fst-italic">${tab.note}</p>`;
                        }
                        if (Array.isArray(tab.charges)) {
                            html += `<h5 class="mt-3">Charges</h5><ul>${tab.charges.map(charge => `<li>${charge}</li>`).join("")}</ul>`;
                        }
                        if (Array.isArray(tab.details)) {
                            html += tab.details.map(d => `<p>${d}</p>`).join("");
                        }

                        container.innerHTML = html;
                    });
                }, 100);
            } else {
                alert("No matching service found in JSON");
            }
        }

        const form = document.querySelector(".sticky-form");
        const section = document.getElementById("tab-content-section");
        const tabs = document.querySelector(".tab-wrapper");
        const pills = document.querySelectorAll(".nav-pills .nav-link");

        const buffer = 20;
        let lastFormState = "";

        const handleScroll = () => {
            if (!form || !section) return;

            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const scrollY = window.scrollY;
            const formHeight = form.offsetHeight;
            const fixedTop = 190;
            const scrollBottom = scrollY + formHeight + fixedTop;

            // Sticky form logic
            if (
                scrollY + fixedTop >= sectionTop &&
                scrollBottom + buffer < sectionBottom
            ) {
                if (lastFormState !== "fixed") {
                    form.classList.add("fixed-form");
                    form.classList.remove("at-bottom");
                    lastFormState = "fixed";
                }
            } else if (scrollBottom + buffer >= sectionBottom) {
                if (lastFormState !== "bottom") {
                    form.classList.remove("fixed-form");
                    form.classList.add("at-bottom");
                    lastFormState = "bottom";
                }
            } else {
                if (lastFormState !== "static") {
                    form.classList.remove("fixed-form", "at-bottom");
                    lastFormState = "static";
                }
            }

            // Tabs fixed logic
            if (scrollY >= sectionTop && scrollY + 150 <= sectionBottom) {
                tabs?.classList.add("fixed-tabs");
            } else {
                tabs?.classList.remove("fixed-tabs");
            }

            // Scroll spy logic
            const offsetMargin = 220;
            pills.forEach(pill => {
                const id = pill.getAttribute("href")?.replace("#", "") || pill.getAttribute("data-bs-target")?.replace("#", "");
                const target = document.getElementById(id);
                if (!target) return;

                const targetTop = target.offsetTop - offsetMargin;
                const targetBottom = targetTop + target.offsetHeight;

                if (scrollY >= targetTop && scrollY < targetBottom) {
                    pills.forEach(p => p.classList.remove("active"));
                    pill.classList.add("active");
                }
            });
        };

        pills.forEach(pill => {
            pill.addEventListener("click", function (e) {
                e.preventDefault();
                const id = this.getAttribute("href")?.replace("#", "") || this.getAttribute("data-bs-target")?.replace("#", "");
                const target = document.getElementById(id);
                if (!target) return;

                const navHeight = document.querySelector(".navbar")?.offsetHeight || 0;
                const tabHeight = tabs?.offsetHeight || 0;
                const offset = navHeight + tabHeight + 20;

                window.scrollTo({
                    top: target.offsetTop - offset,
                    behavior: "smooth"
                });

                pills.forEach(p => p.classList.remove("active"));
                this.classList.add("active");
            });
        });

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [location.search]);

    const scrollTabs = (offset) => {
        const tabList = document.querySelector('.scroll-tabs');
        if (tabList) tabList.scrollLeft += offset;
    };

    return (
        <>
            {/* Hero Section */}
            <section className="py-4 bg-light hero-gradient-bg">
                <div className="container">
                    <div className="row align-items-center banner-vh">
                        <div className="col-lg-7 mb-4 mb-lg-0 text-white">
                            <h1 className="fw-bold mb-3">LLP Registration Online in India</h1>
                            <p className="mb-3">Register your Limited Liability Partnership with ease and gain operational flexibility with tax advantages.</p>
                            <ul className="list-unstyled lh-lg">
                                <li><i className="fa-solid fa-check-double me-2"></i> LLP Agreement Drafting</li>
                                <li><i className="fa-solid fa-check-double me-2"></i> Incorporation Certificate, PAN & TAN</li>
                                <li><i className="fa-solid fa-check-double me-2"></i> Name Approval</li>
                                <li><i className="fa-solid fa-check-double me-2"></i> Expert MCA-Approved Professionals</li>
                                <li><i className="fa-solid fa-check-double me-2"></i> Trusted by 20,000+ Businesses</li>
                            </ul>
                            <div className="d-flex align-items-center mt-3">
                                <img
                                    src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                                    alt="Google Reviews"
                                    height="24"
                                />
                                <p className="mb-0 ms-2">4.7 out of 5 based on 2,345 reviews</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="styled-form-container">
                                <form>
                                    <p className='text-dark' >Submit your details to get an instant <span className='text-theme' >All-inclusive</span> Quote to your email and a <span className='text-theme' >FREE</span> Expert Consultation</p>
                                    <input type="text" className="form-control custom-input mb-3" placeholder="Your Name" required />
                                    <div className="input-group mb-3">
                                        <span className="input-group-text custom-addon">+91</span>
                                        <input type="tel" className="form-control custom-input" placeholder="Mobile Number" required />
                                    </div>
                                    <input type="email" className="form-control custom-input mb-3" placeholder="Email" required />
                                    <textarea className="form-control custom-input mb-3" placeholder="Message" rows="3" required></textarea>
                                    <button type="submit" className="btn btn-gradient w-100 fw-bold">Register Now →</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="startup-info-section py-5">
                <div className="container">
                    <h2 className="startup-info-heading fw-bold mb-3">
                        Details Required for Application for Startup India Registration
                    </h2>
                    <p className="startup-info-subtitle text-muted mb-4">
                        You are required to provide the following details to apply for Startup India registration:
                    </p>
                    <ul className="startup-info-list list-unstyled">
                        {[
                            ["Name of Startup", "Enter the official name of your business or startup as registered."],
                            ["Type of Organisation", "Select your business structure - Private Limited Company, LLP, or Partnership Firm."],
                            ["Company PAN Number", "Provide the Permanent Account Number issued in your company's name."],
                            ["Email ID", "Enter a valid and active business email address for correspondence."],
                            ["Mobile Number", "Provide the mobile number of the authorized representative for OTP verification and updates."],
                            ["Name of Authorized Person", "Mention the full name of the individual authorized to represent the startup."],
                            ["Personal PAN Number", "Enter the PAN of the authorized person for identification purposes."],
                            ["Address of Business", "Fill in the complete official address where your business operates."],
                            ["City", "Specify the city of your business location."],
                            ["State", "Select the relevant state from the list provided."],
                            ["Pincode", "Enter the postal code corresponding to your business address."],
                            ["Does your Company Have a GST Number?", "Indicate whether your business is GST-registered by selecting Yes or No."]
                        ].map(([title, desc], idx) => (
                            <li className="startup-info-item d-flex align-items-start mb-3" key={idx}>
                                <i className="fa fa-check-circle text-primary me-2 mt-1"></i>
                                <div><strong>{title}:</strong> {desc}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Tab Content Section */}
            <section id="tab-content-section" className="py-5 bg-light">
                <div className="container">
                    <div className="row">
                        {/* Tab Content Left */}
                        <div className="col-lg-8">
                            <div className="tab-wrapper mb-4">
                                <div className="tab-arrow left" onClick={() => scrollTabs(-200)}>
                                    <i className="fa fa-chevron-left"></i>
                                </div>
                                <ul className="nav nav-pills scroll-tabs">
                                    <li className="nav-item"><a className="nav-link active" href="#overview">Overview</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#characteristics">Characteristics</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#benefits">Benefits</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#eligibility">Eligibility</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#documents">Documents</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#registration-process">Registration Process</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#fees">Fees</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#certificate">Certificate</a></li>
                                </ul>
                                <div className="tab-arrow right" onClick={() => scrollTabs(200)}>
                                    <i className="fa fa-chevron-right"></i>
                                </div>
                            </div>

                            <div className="tab-content">
                                {/* Sections */}
                                <div id="overview" className="mb-5">
                                </div>
                                <div id="characteristics" className="mb-5"><h4>Characteristics</h4>

                                </div>
                                <div id="benefits" className="mb-5"><h4>Benefits</h4>

                                </div>
                                <div id="eligibility" className="mb-5"><h4></h4>

                                </div>
                                <div id="documents" className="mb-5"><h4></h4>

                                </div>
                                <div id="registration-process" className="mb-5"><h4></h4>

                                </div>
                                <div id="fees" className="mb-5"><h4></h4>

                                </div>
                                <div id="certificate" className="mb-5"><h4>Certificate</h4>

                                </div>
                                {/* <div id="faqs" className="mb-5"><h4>FAQs</h4><p>...</p></div> */}
                            </div>
                        </div>

                        {/* Sticky Form Right */}
                        <div className="col-lg-4 position-relative">
                            <div className="bg-white p-4 rounded shadow sticky-form">
                                <h5 className="fw-bold mb-3">Talk To Our Experts</h5>
                                <form>
                                    <input type="text" className="form-control mb-3" placeholder="Your Name" />
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">+91</span>
                                        <input type="tel" className="form-control" placeholder="Phone" />
                                    </div>
                                    <input type="email" className="form-control mb-3" placeholder="Email" />
                                    <button className="btn btn-request w-100">Request Callback</button>
                                    <p className="small mt-2 text-muted">We never share your details.</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
        </>
    );
}

export default Servicedetails;
