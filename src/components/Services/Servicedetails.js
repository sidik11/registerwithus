import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Servicedetails.css';

function Servicedetails() {

    const scrollTabs = (offset) => {
        const tabList = document.querySelector('.scroll-tabs');
        if (tabList) {
            tabList.scrollLeft += offset;
        }
    };

    useEffect(() => {
        const form = document.querySelector(".sticky-form");
        const section = document.getElementById("tab-content-section");

        const handleScroll = () => {
            if (!form || !section) return;

            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const scrollY = window.scrollY;
            const formHeight = form.offsetHeight;

            if (scrollY + 100 >= sectionTop && scrollY + formHeight + 150 <= sectionBottom) {
                form.classList.add("fixed-form");
                form.classList.remove("at-bottom");
            } else if (scrollY + formHeight + 150 > sectionBottom) {
                form.classList.remove("fixed-form");
                form.classList.add("at-bottom");
            } else {
                form.classList.remove("fixed-form");
                form.classList.remove("at-bottom");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const form = document.querySelector(".sticky-form");
        const section = document.getElementById("tab-content-section");
        const tabs = document.querySelector(".tab-wrapper");
        const pills = document.querySelectorAll(".nav-pills .nav-link");
        const tabPanes = document.querySelectorAll(".tab-pane");

        const handleScroll = () => {
            if (!form || !section || !tabs) return;

            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const scrollY = window.scrollY;
            const formHeight = form.offsetHeight;

            // Sticky Form logic
            if (scrollY + 100 >= sectionTop && scrollY + formHeight + 150 <= sectionBottom) {
                form.classList.add("fixed-form");
                form.classList.remove("at-bottom");
            } else if (scrollY + formHeight + 150 > sectionBottom) {
                form.classList.remove("fixed-form");
                form.classList.add("at-bottom");
            } else {
                form.classList.remove("fixed-form");
                form.classList.remove("at-bottom");
            }

            // Sticky Tabs logic
            if (scrollY >= sectionTop && scrollY + 150 <= sectionBottom) {
                tabs.classList.add("fixed-tabs");
            } else {
                tabs.classList.remove("fixed-tabs");
            }

            // Active pill based on scroll
            tabPanes.forEach(pane => {
                const rect = pane.getBoundingClientRect();
                const topOffset = window.scrollY + rect.top;

                if (scrollY + 150 >= topOffset && scrollY + 150 < topOffset + pane.offsetHeight) {
                    const id = pane.getAttribute("id");

                    pills.forEach(pill => {
                        const target = pill.getAttribute("href") || pill.getAttribute("data-bs-target");
                        if (target === `#${id}`) {
                            pill.classList.add("active");
                        } else {
                            pill.classList.remove("active");
                        }
                    });
                }
            });
        };

        // Pill click handler
        pills.forEach(pill => {
            pill.addEventListener("click", function () {
                pills.forEach(p => p.classList.remove("active"));
                this.classList.add("active");
            });
        });

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            pills.forEach(pill => {
                pill.removeEventListener("click", function () {
                    pills.forEach(p => p.classList.remove("active"));
                    this.classList.add("active");
                });
            });
        };
    }, []);

    return (
        <>
            {/* First Section */}
            <section className="py-4 bg-light hero-gradient-bg" style={{ minHeight: '100vh' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-4 mb-lg-0">
                            <h1 className="fw-bold mb-3 text-white">LLP Registration Online in India</h1>
                            <p className="mb-3 text-white">
                                Register your Limited Liability Partnership with ease and gain operational flexibility,
                                limited partner liability, and professional compliance handled by experts.
                            </p>
                            <ul className="list-unstyled lh-lg text-white">
                                <li><i class="fa-solid fa-check-double"></i> LLP Agreement Drafting</li>
                                <li><i class="fa-solid fa-check-double"></i> Incorporation Certificate, PAN & TAN</li>
                                <li><i class="fa-solid fa-check-double"></i> Name Approval</li>
                                <li><i class="fa-solid fa-check-double"></i> Expert MCA-Approved Professionals</li>
                                <li><i class="fa-solid fa-check-double"></i> Trusted by 20,000+ Businesses</li>
                            </ul>
                            <div className="d-flex mt-4 gap-3">
                                <div>
                                    <img src="https://www.gstatic.com/images/branding/product/1x/googlelogo_light_color_92x30dp.png" alt="Google Rating" height="24" />
                                    <p className="mb-0 text-white">4.6 out of 5 (2,400)</p>
                                </div>
                                <div>
                                    <img src="https://cdn.trustpilot.net/brand-assets/4.4.0/logo-white.svg" alt="Trustpilot Rating" height="24" />
                                    <p className="mb-0 text-white">4.1 out of 5 (1,886)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="styled-form-container">
                                <form>
                                    <div className="mb-3">
                                        {/* <label htmlFor="fullname" className="form-label">Full Name*</label> */}
                                        <input
                                            type="text"
                                            className="form-control custom-input"
                                            id="fullname"
                                            name="fullname"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        {/* <label htmlFor="phone" className="form-label">Phone Number*</label> */}
                                        <div className="input-group">
                                            <span className="input-group-text custom-addon">+91</span>
                                            <input
                                                type="tel"
                                                className="form-control custom-input"
                                                id="phone"
                                                name="phone"
                                                placeholder="Mobile Number"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        {/* <label htmlFor="email" className="form-label">Enter Your Email*</label> */}
                                        <input
                                            type="email"
                                            className="form-control custom-input"
                                            id="email"
                                            name="email"
                                            placeholder="Your email"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        {/* <label htmlFor="message" className="form-label">Enter Your Message*</label> */}
                                        <textarea
                                            className="form-control custom-input"
                                            id="message"
                                            name="message"
                                            rows="3"
                                            placeholder="Your message"
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-gradient w-100 fw-bold">Register Now →</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Tab Section */}
            <section id="tab-content-section" className="py-5 bg-light">
                <div className="container">
                    <div className="row">
                        {/* Left: Tabs + Content */}
                        <div className="col-lg-8">
                            <div className="tab-wrapper my-4">
                                <div className="tab-arrow left" onClick={() => scrollTabs(-200)}>
                                    <i className="fa fa-chevron-left"></i>
                                </div>

                                <ul className="nav nav-pills scroll-tabs flex-nowrap">
                                    <li className="nav-item"><a className="nav-link active" href="#overview">Overview</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#characteristics">Characteristics</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#benefits">Benefits</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#eligibility">Eligibility</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#documents">Documents Required</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#registration-process">Registration Process</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#fees">Registration Fees</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#certificate">Certificate</a></li>
                                    {/* <li className="nav-item"><a className="nav-link" href="#faqs">FAQs</a></li> */}
                                </ul>

                                <div className="tab-arrow right" onClick={() => scrollTabs(200)}>
                                    <i className="fa fa-chevron-right"></i>
                                </div>
                            </div>

                            {/* Sections */}
                            <div id="overview" className="mb-5">
                                <h4 className="fw-bold" >What is Sole Proprietorship Registration?</h4>
                                <p>The Ministry of Corporate Affairs reports that more than 63% of registered businesses in India operate as sole proprietorships, making entrepreneurs choose it the most popular business structure. This shows how simple and accessible this format is for small-scale operations and startups.</p>
                                <p>Sole proprietorship registration is the process of formally establishing a business owned and operated by a single individual under Indian law. This business structure provides the simplest form of business organization where the owner has complete control over business operations and decision-making.</p>
                                <p>The registration process involves obtaining various licenses, registrations, and compliances required to operate a business legally, including GST registration, shop and establishment license, and other industry-specific permits based on the nature of business activities.</p>
                            </div>
                            <div id="characteristics" className="mb-5"><h4>Characteristics</h4>
                                <h4 className="fw-bold" >Types of Sole Proprietorship Registration in India</h4>
                                <p>Sole proprietorships in India can encompass various business activities, often categorized by their nature and regulatory needs:</p>
                                <ul className="list-unstyled" >
                                    <li>
                                        <span className="fw-bold" ><h4>1.Service-Based Sole Proprietorship</h4></span>
                                        <p>This covers businesses providing professional services, consultancy, or skill-based offerings to clients.</p>
                                        <p><span className="fw-bold" >Example:</span>A freelance graphic designer registers their sole proprietorship to offer design services to corporate clients and maintain proper business records.</p>
                                    </li>
                                    <li>
                                        <span className="fw-bold" ><h4>2. Trading Business Sole Proprietorship</h4></span>
                                        <p>For businesses involved in buying and selling goods, whether retail or wholesale trading operations.</p>
                                        <p><span className="fw-bold" >Example:</span>An individual registers a sole proprietorship to operate a retail clothing store or an online marketplace business.</p>
                                    </li>
                                    <li>
                                        <span className="fw-bold" ><h4>3. Manufacturing Sole Proprietorship</h4></span>
                                        <p>Covers small-scale manufacturing operations where an individual produces goods for sale in the market.</p>
                                        <p><span className="fw-bold" >Example:</span>A person starts a small food processing unit or handicraft manufacturing business under a sole proprietorship structure.</p>
                                    </li>
                                    <li>
                                        <span className="fw-bold" ><h4>4. Online Business Sole Proprietorship</h4></span>
                                        <p>For digital businesses, e-commerce operations, or online service providers operating through digital platforms.</p>
                                        <p><span className="fw-bold" >Example:</span>An entrepreneur registers their sole proprietorship to operate an e-commerce website or provide digital marketing services online.</p>
                                    </li>
                                    <li>
                                        <span className="fw-bold" ><h4>5. Professional Practice Sole Proprietorship</h4></span>
                                        <p>For licensed professionals providing specialized services requiring professional qualifications or certifications.</p>
                                        <p><span className="fw-bold" >Example:</span>A chartered accountant, lawyer, or doctor establishing their independent practice under a sole proprietorship structure.</p>
                                    </li>
                                    <li>
                                        <span className="fw-bold" ><h4>6. Home-Based Business Sole Proprietorship</h4></span>
                                        <p>For businesses operated from residential premises, including small-scale operations and service providers.</p>
                                        <p><span className="fw-bold" >Example:</span>A person running a home-based catering service or tutoring center registers as a sole proprietorship for legal compliance.</p>
                                    </li>
                                    <li>
                                        <span className="fw-bold" ><h4>7. Freelance Business Sole Proprietorship</h4></span>
                                        <p>For independent contractors and freelancers providing specialized services to multiple clients on a project basis.</p>
                                        <p><span className="fw-bold" >Example:</span>A content writer or software developer registers their freelance business as a sole proprietorship for professional credibility.</p>
                                    </li>
                                </ul>
                            </div>
                            <div id="benefits" className="mb-5"><h4>Benefits</h4>
                                <h4 className="fw-bold" >Characteristics of Sole Proprietorship Registration</h4>
                                <p>Sole proprietorship registration has several distinctive characteristics that define its legal status and operational framework:</p>
                                <ul className="list-unstyled" >
                                    <li>
                                        <span className="fw-bold" ><h4>1.Single Owner Structure</h4></span>
                                        <p>The business is owned and operated by one individual with complete control over operations.</p>
                                        <ul>
                                            <li>Only one person can be the proprietor; no partners or co-owners are allowed.</li>
                                            <li>Complete decision-making authority rests with the sole proprietor.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="fw-bold" ><h4>2. No Separate Legal Entity</h4></span>
                                        <p>The business and the owner are legally considered as one entity under the law.</p>
                                        <ul>
                                            <li>No distinction between personal and business legal identity.</li>
                                            <li>Business assets and liabilities are treated as personal assets and liabilities.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="fw-bold" ><h4>3. Unlimited Liability Framework</h4></span>
                                        <p>The proprietor bears unlimited personal liability for all business debts and obligations.</p>
                                        <ul>
                                            <li>In a sole proprietorship, there is no legal separation between the owner and the business. This means personal assets like savings, property, or valuables can be used to pay off business debts or legal claims. If the business owes money or faces lawsuits, the owner is personally responsible for covering those obligations.</li>
                                            <li>No limit on the extent of personal liability for business-related matters.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div id="eligibility" className="mb-5"><h4></h4>
                                <h4 className="fw-bold" >Eligibility Criteria for Sole Proprietorship Registration</h4>
                                <p>Eligibility for sole proprietorship registration is straightforward but requires meeting certain basic criteria under Indian law and regulations.</p>
                                <ul className="list-unstyled" >
                                    <li>
                                        <span className="fw-bold" ><h4>1. Individual Ownership Requirement:</h4></span>
                                        <p>Only a person can establish and operate a sole proprietorship; corporate entities or groups cannot form this business structure.</p>
                                        <span className="fw-bold" ><h4>2. Age and Legal Capacity:</h4></span>
                                        <p>The proprietor must be a major (18 years or above) with legal capacity to enter into contracts and conduct business.</p>
                                        <span className="fw-bold" ><h4>3. Indian Residency Status:</h4></span>
                                        <p>While Indian citizenship is not mandatory, the proprietor should have legal residency status and necessary permissions to conduct business in India.</p>
                                    </li>
                                </ul>
                            </div>
                            <div id="documents" className="mb-5"><h4></h4>
                                <h4 className="fw-bold" >Documents Required for Sole Proprietorship Registration</h4>
                                <p>Proper documentation is essential for successful sole proprietorship registration, with specific documents required for various aspects of business establishment:</p>
                                <h5 className="fw-bold" >1. Identity and Address Documents</h5>
                                <ul>
                                    <li>PAN Card: Original and photocopy of the proprietor's Permanent Account Number.</li>
                                    <li>Aadhaar Card: Identity and address proof with current details.</li>
                                    <li>Passport: For identity verification and address proof (if applicable).</li>
                                    <li>Voter ID Card: Alternative identity proof acceptable for registration purposes.</li>
                                </ul>
                                <h5 className="fw-bold" >2. Business Address Proof</h5>
                                <ul>
                                    <li>For owned premises: Property deed, tax receipts, or utility bills in the proprietor's name.</li>
                                    <li>For rented premises: Rent agreement along with the owner's NOC and property documents.</li>
                                    <li>For residential premises: Utility bills and residential address proof documents.</li>
                                    <li>Municipal permissions: Any required permissions for operating a business from the chosen location.</li>
                                </ul>
                            </div>
                            <div id="registration-process" className="mb-5"><h4></h4>
                                <h4 className="fw-bold" >How to Register a Sole Proprietorship in India?</h4>
                                <p>Registering a sole proprietorship in India involves a systematic process that establishes your business with proper legal compliance and documentation:</p>
                                {/* <h5 className="fw-bold" >1. Identity and Address Documents</h5> */}
                                <ul>
                                    <li>Choose Business Name and Activity: Select an appropriate business name and clearly define your business activities, ensuring the name is not already in use by others in your area.</li>
                                    <li>Obtain Required Identity Documents: Gather essential documents, including PAN card, Aadhaar card, address proof, and passport-size photographs for registration purposes.</li>
                                    <li>Secure Business Address Documentation: Arrange proper address proof for your business location, including rent agreement, property documents, or utility bills as applicable.</li>
                                    <li>Apply for PAN Card (if not available): Obtain a PAN card in your name, which will serve as the business PAN for tax compliance and other registrations.</li>
                                    <li>Register for GST (if applicable): Rs. 20 lakhs" is generally for services/goods. For special category states (Rs. 10 lakhs), the goods threshold is different.</li>
                                    <li>Obtain Shop and Establishment License: Apply for shop and establishment registration with local municipal authorities or the state labor department as required.</li>
                                    <li>Open a Business Bank Account: Open a current bank account in your business name using the obtained registrations and required documentation for financial operations.</li>
                                    <li>Apply for Professional Tax Registration: Register for professional tax with state authorities if applicable, based on your state's professional tax laws and business nature.</li>
                                    <li>Obtain Industry-Specific Licenses: Apply for additional licenses like FSSAI for food business, trade license from local authorities, or other sector-specific permits.</li>
                                    <li>Complete MSME Registration (optional): Consider registering under MSME (Udyam Registration) for benefits like easier loan access and government scheme eligibility.</li>
                                    <li>Set up Accounting and Compliance System: Establish proper books of accounts and a compliance management system for tax filings and regulatory requirements.</li>
                                </ul>
                                <p>Our expert consultants ensure a seamless sole proprietorship registration journey, providing continuous support and guidance through all registration processes until your business is fully compliant and operational.</p>
                            </div>
                            <div id="fees" className="mb-5"><h4></h4>
                                <h4 className="fw-bold" >Fees for Sole Proprietorship Registration</h4>
                                <p>Costs for registering a sole proprietorship help entrepreneurs budget better when starting their business.</p>
                                <h5 className="fw-bold" >1. Registration Charges</h5>
                                <p>In India, registering a sole proprietorship includes paying various government fees for professional services related to different types of registrations.</p>
                                <ul>
                                    <li>GST Registration: Free of cost for online applications; Rs. 100 for offline applications.</li>
                                    <li>Shop and Establishment License: Rs. 1,000 - Rs. 5,000 depending on the state and business nature.</li>
                                    <li>Trade License: Rs. 500 - Rs. 2,000 from local municipal authorities.</li>
                                    <li>Professional Tax Registration: Rs. 300 - Rs. 1,000 based on state regulations.</li>
                                    <li>FSSAI Registration: Rs. 100 for Basic, Rs. 3,000 for State, Rs. 7,500 for Central license.</li>
                                    <li>Bank Account Opening: Rs. 500 - Rs. 2,000 as account opening charges and minimum balance.</li>
                                    <li>Professional Service Fees: Rs. 5,000 - Rs. 15,000 for complete registration assistance from consultants.</li>
                                </ul>
                            </div>
                            <div id="certificate" className="mb-5"><h4>Certificate</h4>
                                <h4 className="fw-bold" >Sole Proprietorship Registration Certificate</h4>
                                <p>This sole proprietorship registration certificate is the official proof of your business's legal establishment.</p>
                                <p>It includes essential registration details and business identification numbers, which are crucial for establishing your business identity and enabling business operations like bank account opening and license applications.</p>
                                <h5 className="fw-bold" >1. Registration Charges</h5>
                                <p>In India, registering a sole proprietorship includes paying various government fees for professional services related to different types of registrations.</p>
                                <ul>
                                    <li>GST Registration: Free of cost for online applications; Rs. 100 for offline applications.</li>
                                    <li>Shop and Establishment License: Rs. 1,000 - Rs. 5,000 depending on the state and business nature.</li>
                                    <li>Trade License: Rs. 500 - Rs. 2,000 from local municipal authorities.</li>
                                    <li>Professional Tax Registration: Rs. 300 - Rs. 1,000 based on state regulations.</li>
                                    <li>FSSAI Registration: Rs. 100 for Basic, Rs. 3,000 for State, Rs. 7,500 for Central license.</li>
                                    <li>Bank Account Opening: Rs. 500 - Rs. 2,000 as account opening charges and minimum balance.</li>
                                    <li>Professional Service Fees: Rs. 5,000 - Rs. 15,000 for complete registration assistance from consultants.</li>
                                </ul>
                            </div>
                            {/* <div id="faqs" className="mb-5"><h4>FAQs</h4><p>...</p></div> */}
                        </div>

                        {/* Right: Sticky Form */}
                        <div className="col-lg-4">
                            <div className="bg-white p-4 rounded shadow sticky-form">
                                <h5 className="fw-bold mb-3">Talk To Our Experts</h5>
                                <form>
                                    <input type="text" className="form-control mb-3" placeholder="Your Name" />
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">+91</span>
                                        <input type="tel" className="form-control" placeholder="Phone" />
                                    </div>
                                    <input type="email" className="form-control mb-3" placeholder="Email" />
                                    <button className="btn btn-warning w-100">Request Callback</button>
                                    <p className="small mt-2 text-muted">We never share your details.</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Servicedetails;
