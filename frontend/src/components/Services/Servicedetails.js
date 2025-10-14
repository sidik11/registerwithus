// ========================== Imports ==========================
import React, { useEffect, useRef } from 'react';
import { API_BASE_URL } from '../../utils/api';
import { useLocation, useParams } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Swal from 'sweetalert2';
import './Servicedetails.css';
import tabData from './services.json';
import { Collapse } from 'bootstrap';

// ========================== Component ==========================
function Servicedetails() {
    const location = useLocation();
    const { serviceSlug } = useParams();
    const form = useRef();

    // ====================== useEffect (Dynamic Content + Scroll) ======================
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const serviceName = params.get("name") || serviceSlug; // fallback

        const startupSection = document.querySelector(".startup-info-section");
        if (window.location.pathname === "/startup-india-registration-online") {
            if (startupSection) startupSection.style.display = "block";
        } else {
            if (startupSection) startupSection.style.display = "none";
        }

        if (serviceName) {
            const matched = tabData.find(
                item => item.service.toLowerCase().trim() === serviceName.toLowerCase().trim()
            );

            if (matched) {

                if (matched.metaTitle) document.title = matched.metaTitle;

                const setMeta = (name, content) => {
                    let element = document.querySelector(`meta[name="${name}"]`);
                    if (!element) {
                        element = document.createElement("meta");
                        element.name = name;
                        document.head.appendChild(element);
                    }
                    element.content = content;
                };

                if (matched.metaDescription) setMeta("description", matched.metaDescription);
                if (matched.metaKeywords) setMeta("keywords", matched.metaKeywords);

                // ---------- Hero Section Injection ----------
                const heroHeading = document.querySelector(".hero-gradient-bg h1");
                const heroSubtext = document.querySelector(".hero-gradient-bg p.mb-3");
                const heroList = document.querySelector(".hero-gradient-bg ul");
                const trustLogo = document.querySelector(".hero-gradient-bg img");
                const trustText = document.querySelector(".hero-gradient-bg .d-flex p");

                if (heroHeading) heroHeading.innerText = matched?.tabs?.[0]?.title || matched.service || "Business Service";
                if (heroSubtext) heroSubtext.innerText = matched?.intro || matched?.tabs?.[0]?.intro || "Start your journey with our professional services.";
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

                // ---------- Inject Tab Content ----------
                setTimeout(() => {
                    matched.tabs.forEach(tab => {
                        const container = document.getElementById(tab.id);
                        if (!container) return;

                        let html = "";

                        // Title
                        if (tab.title) html += `<h4>${tab.title}</h4>`;
                        // Intro
                        if (tab.intro) html += `<p>${tab.intro}</p>`;
                        // Content
                        if (Array.isArray(tab.content)) {
                            html += tab.content.map(p => {
                                if (p.trim().endsWith(":")) {
                                    return `<h4>${p.replace("•", "").trim()}</h4>`;
                                } else if (p.includes(":")) {
                                    const parts = p.split(":");
                                    return `<p><strong>${parts[0].replace("•", "").trim()}:</strong>${parts.slice(1).join(":")}</p>`;
                                } else {
                                    return `<p>${p}</p>`;
                                }
                            }).join("");
                        }

                        // Helper for list rendering
                        const renderList = items => items.map(item => {
                            if (item.includes(":")) {
                                const parts = item.split(":");
                                return `<li><strong>${parts[0].trim()}:</strong>${parts.slice(1).join(":")}</li>`;
                            }
                            return `<li>${item}</li>`;
                        }).join("");

                        // Points with subpoints
                        if (Array.isArray(tab.points)) {
                            html += tab.points.map(point => `
                                <div class="mb-3">
                                  <h5>${point.title}</h5>
                                  <p>${point.description}</p>
                                  ${Array.isArray(point.subpoints) ? `<ul>${renderList(point.subpoints)}</ul>` : ""}
                                </div>
                            `).join("");
                        }

                        // Types
                        if (Array.isArray(tab.types)) {
                            html += `
                                <div class="mb-4">
                                  ${tab.types.map(type => `
                                    <div class="mb-3">
                                      <h5 class="fw-semibold">${type.heading}</h5>
                                      <p>${type.description}</p>
                                      <p class="text-muted"><em>${type.example}</em></p>
                                    </div>
                                  `).join("")}
                                </div>
                            `;
                        }

                        // Identity Documents
                        if (Array.isArray(tab.identityDocuments)) {
                            html += `<h5 class="mt-3">Identity Documents</h5><ul>${renderList(tab.identityDocuments)}</ul>`;
                        }

                        // Address Proof
                        if (Array.isArray(tab.addressProof)) {
                            html += `<h5 class="mt-3">Address Proof</h5><ul>${renderList(tab.addressProof)}</ul>`;
                        }

                        // Charges
                        if (Array.isArray(tab.charges)) {
                            html += `<h5 class="mt-3">Charges</h5><ul>${renderList(tab.charges)}</ul>`;
                        }

                        // Steps
                        if (Array.isArray(tab.steps)) {
                            html += `<h5 class="mt-3">Steps</h5><ol>${tab.steps.map(step => `<li>${step}</li>`).join("")}</ol>`;
                        }

                        // Note
                        if (tab.note) html += `<p class="fst-italic">${tab.note}</p>`;

                        // Details
                        if (Array.isArray(tab.details)) {
                            html += tab.details.map(d => `<p>${d}</p>`).join("");
                        }

                        container.innerHTML = html;
                    });

                    // ---------- FAQs ----------
                    if (matched?.faqs) {
                        const faqSection = document.querySelector("#faqAccordion");
                        if (faqSection) {
                            let html = "";
                            let currentQuestion = null;

                            matched.faqs.forEach((faq, index) => {
                                if (!faq.startsWith("→")) {
                                    currentQuestion = faq;
                                } else if (currentQuestion) {
                                    const id = `faq-${index}`;
                                    html += `
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="heading${id}">
                                                <button class="accordion-button collapsed" 
                                                        type="button" 
                                                        data-bs-toggle="collapse" 
                                                        data-bs-target="#collapse${id}" 
                                                        aria-expanded="false" 
                                                        aria-controls="collapse${id}">
                                                    ${currentQuestion}
                                                </button>
                                            </h2>
                                            <div id="collapse${id}" 
                                                 class="accordion-collapse collapse" 
                                                 aria-labelledby="heading${id}" 
                                                 data-bs-parent="#faqAccordion">
                                                <div class="accordion-body">
                                                    <i class="fa fa-arrow-right me-2" aria-hidden="true"></i>${faq.replace("→", "").trim()}
                                                </div>
                                            </div>
                                        </div>
                                    `;
                                    currentQuestion = null;
                                }
                            });

                            faqSection.innerHTML = html;
                        }
                    }

                }, 100);
            } else {
                window.location.href = "/Error404";
            }
        }

        // ---------- Sticky Form + Tabs + Scroll Spy ----------
        const formEl = document.querySelector(".sticky-form");
        const section = document.getElementById("tab-content-section");
        const tabs = document.querySelector(".tab-wrapper");
        const pills = document.querySelectorAll(".nav-pills .nav-link");
        const buffer = 20;
        let lastFormState = "";

        const handleScroll = () => {
            if (!formEl || !section) return;

            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const scrollY = window.scrollY;
            const formHeight = formEl.offsetHeight;
            const fixedTop = 190;
            const scrollBottom = scrollY + formHeight + fixedTop;

            // Sticky Form Logic
            if (scrollY + fixedTop >= sectionTop && scrollBottom + buffer < sectionBottom) {
                if (lastFormState !== "fixed") {
                    formEl.classList.add("fixed-form");
                    formEl.classList.remove("at-bottom");
                    lastFormState = "fixed";
                }
            } else if (scrollBottom + buffer >= sectionBottom) {
                if (lastFormState !== "bottom") {
                    formEl.classList.remove("fixed-form");
                    formEl.classList.add("at-bottom");
                    lastFormState = "bottom";
                }
            } else {
                if (lastFormState !== "static") {
                    formEl.classList.remove("fixed-form", "at-bottom");
                    lastFormState = "static";
                }
            }

            // Tabs Fixed + Show/Hide Logic
            if (scrollY + fixedTop >= sectionTop && scrollBottom + buffer < sectionBottom) {
                tabs?.classList.add("fixed-tabs");
                tabs?.classList.remove("d-none");
            } else if (scrollBottom + buffer >= sectionBottom || scrollY + fixedTop < sectionTop) {
                tabs?.classList.remove("fixed-tabs");
                tabs?.classList.add("d-none");
            }

            // Scroll Spy
            if (!tabs?.classList.contains("d-none")) {
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
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        // Tab Link Click Scroll (smooth)
        const handleTabClick = (e) => {
            e.preventDefault();
            const id = e.currentTarget.getAttribute("href")?.replace("#", "");
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
            e.currentTarget.classList.add("active");
        };

        pills.forEach(pill => pill.addEventListener("click", handleTabClick));

        // Initial scroll on hash
        if (location.hash) {
            const id = location.hash.replace("#", "");
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    const navHeight = document.querySelector(".navbar")?.offsetHeight || 0;
                    const tabHeight = tabs?.offsetHeight || 0;
                    const offset = navHeight + tabHeight + 20;
                    window.scrollTo({
                        top: el.offsetTop - offset,
                        behavior: "smooth"
                    });
                }
            }, 200);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            pills.forEach(pill => pill.removeEventListener("click", handleTabClick));
        };
    }, [location.pathname, location.search, serviceSlug]);

    // Scroll tabs
    const scrollTabs = (offset) => {
        const tabList = document.querySelector('.scroll-tabs');
        if (tabList) tabList.scrollLeft += offset;
    };

    // Quick Contact Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.current) return;

        const formData = {
            user_name: form.current.user_name.value.trim(),
            user_phone: form.current.user_phone.value.trim(),
            user_email: form.current.user_email.value.trim(),
            message: form.current.message.value.trim(),
            form_type: "Quick Contact"
        };

        try {
            const response = await fetch(`${API_BASE_URL}/api/submit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (result.success) {
                Swal.fire({
                    icon: 'success',
                    title: '✅ Form Submitted Successfully!',
                    text: 'We will connect with you soon.'
                });
                form.current.reset();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: '❌ Form Submission Failed!',
                    text: 'Under Maintenance. Please try again later.'
                });
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: '❌ Server Error!',
                text: 'Something went wrong. Please try again later.'
            });
        }
    };

    // Talk to Expert Form Submit
    const handleExpertSubmit = async (e) => {
        e.preventDefault();
        const expertForm = e.target;

        const formData = {
            user_name: expertForm.expert_name?.value,
            user_phone: expertForm.expert_phone?.value,
            user_email: expertForm.expert_email?.value,
            form_type: "Talk To Expert"
        };

        try {
            const response = await fetch(`${API_BASE_URL}/api/submit`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (result.success) {
                Swal.fire("✅ Success", "Expert form submitted successfully!", "success");
                expertForm.reset();
            } else {
                Swal.fire("❌ Failed", "Server responded with failure", "error");
            }
        } catch (error) {
            console.error("❌ Error caught in catch block:", error);
            Swal.fire("❌ Error", "Server/network error caught. See console.", "error");
        }
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
                            {/* <div className="d-flex align-items-center mt-3">
                                <img
                                    src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                                    alt="Google Reviews"
                                    height="24"
                                />
                                <p className="mb-0 ms-2">4.7 out of 5 based on 2,345 reviews</p>
                            </div> */}
                        </div>
                        <div className="col-lg-5">
                            <div className="styled-form-containers">
                                <p className='text-white'>
                                    Submit your details to get an instant <span className=''>All-inclusive</span> Quote to your email and a <span className=''>FREE</span> Expert Consultation
                                </p>
                                <form ref={form} onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="user_name"
                                        maxLength="50"
                                        onInput={(e) => {
                                            e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, '');
                                        }}
                                        className="form-control custom-inputs mb-3"
                                        placeholder="Your Name"
                                        required
                                    />

                                    <div className="input-group mb-3">
                                        <span className="input-group-text custom-addons">+91</span>
                                        <input
                                            type="tel"
                                            name="user_phone"
                                            maxLength="10"
                                            onInput={(e) => {
                                                e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                                            }}
                                            className="form-control custom-inputs"
                                            placeholder="Mobile Number"
                                            required
                                        />
                                    </div>

                                    <input
                                        type="email"
                                        name="user_email"
                                        className="form-control custom-inputs mb-3"
                                        placeholder="Email"
                                        required
                                    />

                                    <textarea
                                        name="message"
                                        className="form-control custom-inputs mb-3"
                                        placeholder="Message"
                                        rows="3"
                                        required
                                    ></textarea>

                                    <button type="submit" className="btn btn-gradients w-100 fw-bold">
                                        Register Now →
                                    </button>
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
                                    {tabData
                                        .find(item =>
                                            item.service.toLowerCase().trim() ===
                                            serviceSlug?.toLowerCase().trim()
                                        )
                                        ?.tabs?.map((tab, index) => (
                                            <li className="nav-item" key={index}>
                                                <a className={`nav-link ${index === 0 ? "active" : ""}`} href={`#${tab.id}`}>
                                                    {tab.id}
                                                </a>
                                            </li>
                                        ))}
                                </ul>
                                <div className="tab-arrow right" onClick={() => scrollTabs(200)}>
                                    <i className="fa fa-chevron-right"></i>
                                </div>
                            </div>

                            <div className="tab-content" id="tab-content-section">
                                {tabData
                                    .find(item =>
                                        item.service.toLowerCase().trim() ===
                                        serviceSlug?.toLowerCase().trim()
                                    )
                                    ?.tabs?.map((tab, index) => (
                                        <div id={tab.id} className="mb-5" key={index}>
                                            {/* tab content will be injected here dynamically */}
                                        </div>
                                    ))}
                            </div>

                        </div>

                        {/* Sticky Form Right */}
                        <div className="col-lg-4 position-relative">
                            <div className="bg-white p-4 rounded shadow sticky-form">
                                <h5 className="fw-bold mb-3">Talk To Our Experts</h5>
                                <form onSubmit={handleExpertSubmit}>
                                    <input type="text" name="expert_name" className="form-control mb-3" placeholder="Your Name" required />
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">+91</span>
                                        <input type="tel" name="expert_phone" className="form-control" placeholder="Phone" required />
                                    </div>
                                    <input type="email" name="expert_email" className="form-control mb-3" placeholder="Email" required />
                                    <button type="submit" className="btn btn-request w-100">Request Callback</button>
                                    <p className="small mt-2 text-muted">We never share your details.</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container py-5">
                    <h2 className="section-title text-center text-dark d-block">
                        <span className="overlap-conte">Frequently Asked Questions</span>
                    </h2>
                    <div className="accordion" id="faqAccordion"></div>
                </div>
            </section>

        </>
    );
}

export default Servicedetails;
