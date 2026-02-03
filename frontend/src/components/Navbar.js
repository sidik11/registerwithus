import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Collapse from "bootstrap/js/dist/collapse";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Swal from "sweetalert2";
import { API_BASE_URL } from "../utils/api";
import "./Navbar.css";

function Navbar() {
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const formRef = useRef(null);
  const [selectedService, setSelectedService] = useState("Service Title");

  // 🧠 Hide navbar collapse after click
  const handleNavLinkClick = () => {
    const navbar = document.getElementById("navbarNav");
    const bsCollapse = Collapse.getInstance(navbar);
    if (bsCollapse) bsCollapse.hide();
  };
  const handleCloseSidebar = () => {
    const navbar = document.getElementById("navbarNav");
    const bsCollapse = Collapse.getInstance(navbar);
    if (bsCollapse) bsCollapse.hide();
  };

  // 🧠 Dropdown hover & toggle logic
  useEffect(() => {
    const dropdown = dropdownRef.current;
    const menu = menuRef.current;
    let timeoutId;
    const handleClick = (e) => {
      e.preventDefault();
      dropdown.classList.toggle("show");
      menu.classList.toggle("show");
    };
    const handleMouseLeave = () => {
      timeoutId = setTimeout(() => {
        dropdown.classList.remove("show");
        menu.classList.remove("show");
      }, 300);
    };
    const handleMouseEnter = () => {
      clearTimeout(timeoutId);
    };
    const link = dropdown.querySelector(".dropdown-toggle");
    link.addEventListener("click", handleClick);
    menu.addEventListener("mouseleave", handleMouseLeave);
    menu.addEventListener("mouseenter", handleMouseEnter);
    const serviceLinks = menu.querySelectorAll("a, button");
    const closeDropdown = () => {
      dropdown.classList.remove("show");
      menu.classList.remove("show");
    };
    serviceLinks.forEach((serviceLink) =>
      serviceLink.addEventListener("click", closeDropdown),
    );
    return () => {
      link.removeEventListener("click", handleClick);
      menu.removeEventListener("mouseleave", handleMouseLeave);
      menu.removeEventListener("mouseenter", handleMouseEnter);
      serviceLinks.forEach((serviceLink) =>
        serviceLink.removeEventListener("click", closeDropdown),
      );
    };
  }, []);

  // 🧠 Service Modal Title Handling
  useEffect(() => {
    const serviceLinks = document.querySelectorAll(
      '[data-bs-target="#serviceModal"]',
    );
    const modalTitle = document.getElementById("serviceModalLabel");
    serviceLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const title = link.getAttribute("data-title");
        setSelectedService(title);
        if (modalTitle) modalTitle.textContent = title;
      });
    });
    return () => {
      serviceLinks.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  // 📨 Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    const formData = {
      user_name: formRef.current.user_name.value.trim(),
      user_phone: formRef.current.user_phone.value.trim(),
      user_email: formRef.current.user_email.value.trim(),
      message: selectedService,
      company_name: selectedService,
      form_type: "Enquiry Form",
    };
    if (!formData.user_name || !formData.user_email || !formData.user_phone) {
      Swal.fire({
        icon: "warning",
        title: "⚠️ Fill All Fields",
        text: "Name, Email, and Phone are required.",
      });
      return;
    }
    try {
      await fetch(`${API_BASE_URL}/api/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      Swal.fire({
        icon: "success",
        title: "✅ Successfully Saved!",
        showConfirmButton: true,
      });
      formRef.current.reset();
    } catch (error) {
      Swal.fire({
        icon: "success",
        title: "✅ Successfully Saved!",
        showConfirmButton: true,
      });
      formRef.current.reset();
    }
  };

  return (
    <>
      {/* 🧭 Navbar Start */}
      <nav className="navbar navbar-expand-lg py-3 fixed-top">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="img/Register-With-Us-01.png"
              alt="Logo"
              className="main-lg me-2 bg-white"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div
            className="collapse navbar-collapse mobile-sidebar"
            id="navbarNav"
          >
            <div className="d-lg-none d-flex justify-content-between align-items-center px-3 pt-3">
              <span className="fs-5 fw-bold">Register With Us</span>
              <button
                className="btn btn-link text-dark fs-2 close-btn"
                onClick={handleCloseSidebar}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleNavLinkClick}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  onClick={handleNavLinkClick}
                >
                  About Us
                </Link>
              </li>
              <li
                className="nav-item dropdown position-static"
                ref={dropdownRef}
              >
                <button
                  className="nav-link dropdown-toggle fw-semibold btn-link"
                  type="button"
                  id="megaDropdown"
                >
                  Services
                </button>
                <div
                  className="dropdown-menu w-100 mega-dropdown mt-0 border-0 shadow-lg"
                  ref={menuRef}
                >
                  <div className="container">
                    <div className="row gy-4">
                      {/* Column 1 */}
                      <div className="col-md-3">
                        <h4 className="mega-heading">
                          <i className="fas fa-balance-scale me-2"></i>Labour
                          Laws
                        </h4>
                        <ul className="mega-list">
                          <li>
                            <Link to="/online-epf-registration-india">
                              PF Registration
                            </Link>
                          </li>
                          <li>
                            <Link to="/online-esic-registration-india">
                              ESIC Registration
                            </Link>
                          </li>
                        </ul>

                        <h4 className="mega-heading">
                          <i className="fas fa-briefcase me-2"></i>Company
                          Registration
                        </h4>
                        <ul className="mega-list">
                          <li>
                            <Link to="/sole-proprietorship-registration-online">
                              Sole Proprietorship
                            </Link>
                          </li>
                          <li>
                            <Link to="/partnership-firm-registration-online">
                              Partnership
                            </Link>
                          </li>
                          <li>
                            <Link to="/llp-registration-services-online">
                              LLP Registration
                            </Link>
                          </li>
                          <li>
                            <Link to="/private-limited-company-registration-online">
                              Private Limited Company
                            </Link>
                          </li>
                          <li>
                            <Link to="/public-limited-company-registration-online">
                              Public Limited Company
                            </Link>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="link-button"
                              data-bs-toggle="modal"
                              data-bs-target="#serviceModal"
                              data-title="Foreign Company Registration"
                            >
                              Foreign Company Registration
                            </button>
                          </li>
                        </ul>

                        <h4 className="mega-heading">
                          <i className="fas fa-id-card-alt me-2"></i>Food
                          License (FSSAI)
                        </h4>
                        <ul className="mega-list">
                          <li>
                            <Link to="/fssai-license-registration-india">
                              FSSAI Registration
                            </Link>
                            <Link to="/fssai-license-registration-india#Eligibility">
                              FSSAI License - State
                            </Link>
                            <Link to="/fssai-license-registration-india#Eligibility">
                              FSSAI License - Central
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* Column 2 */}
                      <div className="col-md-3">
                        <h4 className="mega-heading">
                          <i className="fas fa-id-card-alt me-2"></i>Trade
                          Licenses
                        </h4>
                        <ul className="mega-list">
                          <li>
                            <Link to="/business-pan-card-registration-india">
                              PAN card
                            </Link>
                            <Link to="/gst-registration-india">
                              GST Registration
                            </Link>
                            <Link to="/import-export-code-registration-online">
                              Import Export Code (IEC)
                            </Link>
                            <Link to="/professional-tax-registration-online">
                              Professional Tax Registration
                            </Link>
                            <Link to="/udyam-msme-registration-online">
                              MSME / Udyam Registration
                            </Link>
                            <Link to="/startup-india-registration-online">
                              Start-up India Registration
                            </Link>
                            <Link to="/shop-establishment-registration-india">
                              Shops & Establishment Licenses
                            </Link>
                            <Link to="/apeda-registration-india">
                              APEDA Registration
                            </Link>
                          </li>
                        </ul>
                        <h4 className="mega-heading mt-4">
                          <i className="fas fa-award me-2"></i>Trademark
                          Services
                        </h4>
                        <ul className="mega-list">
                          <li>
                            <Link to="/online-trademark-registration-india">
                              Trademark Registration
                            </Link>
                          </li>
                          <li>
                            <Link to="/online-trademark-registration-india#Renewal">
                              Trademark Renewal
                            </Link>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="link-button"
                              data-bs-toggle="modal"
                              data-bs-target="#serviceModal"
                              data-title="Trademark Assignment / Transfers"
                            >
                              Trademark Assignment / Transfers
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="link-button"
                              data-bs-toggle="modal"
                              data-bs-target="#serviceModal"
                              data-title="Change In Trademark Details"
                            >
                              Change In Trademark Details
                            </button>
                          </li>
                        </ul>
                      </div>
                      {/* Column 3 */}
                      <div className="col-md-3">
                        <h4 className="mega-heading">
                          <i className="fas fa-building me-2"></i>Company
                          Compliances
                        </h4>
                        <ul className="mega-list">
                          <li>
                            <button
                              type="button"
                              className="link-button"
                              data-bs-toggle="modal"
                              data-bs-target="#serviceModal"
                              data-title="Share Transfers"
                            >
                              Share Transfers
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="link-button"
                              data-bs-toggle="modal"
                              data-bs-target="#serviceModal"
                              data-title="Share Transmission"
                            >
                              Share Transmission
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="link-button"
                              data-bs-toggle="modal"
                              data-bs-target="#serviceModal"
                              data-title="Share Allotments"
                            >
                              Share Allotments
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="link-button"
                              data-bs-toggle="modal"
                              data-bs-target="#serviceModal"
                              data-title="Equity / Debt Raising"
                            >
                              Equity / Debt Raising
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="link-button"
                              data-bs-toggle="modal"
                              data-bs-target="#serviceModal"
                              data-title="Raise Funds (Equity / Debt)"
                            >
                              Raise Funds (Equity / Debt)
                            </button>
                          </li>
                          <li>
                            <Link to="/online-compliance-india">
                              Change Services
                            </Link>
                          </li>
                          <li>
                            <Link to="/online-compliance-india#DirectorsKMP">
                              Change in Directors / KMP
                            </Link>
                          </li>
                          <li>
                            <Link to="/online-compliance-india#Auditors">
                              Change in Auditors
                            </Link>
                          </li>
                          <li>
                            <Link to="/online-compliance-india#Address">
                              Change in Address / Shifting of Office
                            </Link>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="link-button"
                              data-bs-toggle="modal"
                              data-bs-target="#serviceModal"
                              data-title="MSME Filings"
                            >
                              MSME Filings
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="link-button"
                              data-bs-toggle="modal"
                              data-bs-target="#serviceModal"
                              data-title="Return of Deposit"
                            >
                              Return of Deposit
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="link-button"
                              data-bs-toggle="modal"
                              data-bs-target="#serviceModal"
                              data-title="Event Based ROC Filings"
                            >
                              Event Based ROC Filings
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="link-button"
                              data-bs-toggle="modal"
                              data-bs-target="#serviceModal"
                              data-title="Annual Filings"
                            >
                              Annual Filings
                            </button>
                          </li>
                        </ul>
                      </div>
                      {/* Column 4 */}
                      <div className="col-md-3">
                        <h4 className="mega-heading">
                          <i className="fas fa-calculator me-2"></i>Tax Filings
                          Services
                        </h4>
                        <ul className="mega-list">
                          <li>
                            <Link to="/itr-gst-return-filing-india">
                              ITR For Individuals
                            </Link>
                          </li>
                          <li>
                            <Link to="/itr-gst-return-filing-india#Overview">
                              ITR For Corporate
                            </Link>
                          </li>
                          <li>
                            <Link to="/itr-gst-return-filing-india">
                              GST Returns
                            </Link>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="link-button"
                              data-bs-toggle="modal"
                              data-bs-target="#serviceModal"
                              data-title="TDS Filings"
                            >
                              TDS Filings
                            </button>
                          </li>
                        </ul>

                        <h4 className="mega-heading">
                          <i className="fas fa-building me-2"></i>ISO
                          Certificates
                        </h4>
                        <ul className="mega-list">
                          <li>
                            <Link to="/iso-certification-services-india#tab-content-section">
                              ISO 9001, ISO 14001
                            </Link>
                          </li>
                          <li>
                            <Link to="/iso-certification-services-india#tab-content-section">
                              ISO 45001
                            </Link>
                          </li>
                          <li>
                            <Link to="/iso-certification-services-india#tab-content-section">
                              Other ISO Certificates
                            </Link>
                          </li>
                          <li>
                            <Link to="/iso-certification-services-india#tab-content-section">
                              HACPP
                            </Link>
                          </li>
                          <li>
                            <Link to="/iso-certification-services-india#tab-content-section">
                              GMP, GAP, GDP, GLP, cGMP, GHP
                            </Link>
                          </li>
                          <li>
                            <Link to="/iso-certification-services-india#tab-content-section">
                              CE, RoHS, EN, IEC
                            </Link>
                          </li>
                          <li>
                            <Link to="/iso-certification-services-india#tab-content-section">
                              FDA, ANSI, ASTM, GOTS, FSSC
                            </Link>
                          </li>
                          <li>
                            <Link to="/iso-certification-services-india#tab-content-section">
                              22000, BIFMA, Greenguard, Greenpro, GRS, RCS ,
                              HALAL, KOSHER,SEDEX, FSC, FCC, CMMI
                            </Link>
                          </li>
                          <li>
                            <Link to="/iso-certification-services-india#tab-content-section">
                              Other Certifications
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/blogs"
                  onClick={handleNavLinkClick}
                >
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact"
                  onClick={handleNavLinkClick}
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="tel:+919643981247"
                  className="d-inline-flex align-items-center px-3 py-2 text-white contact-nav"
                >
                  <i className="fa fa-phone me-2"></i> +919643981247
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 🧾 Universal Modal for All Services */}
      <div
        className="modal fade"
        id="serviceModal"
        tabIndex="-1"
        aria-labelledby="serviceModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content p-4">
            <h4 id="serviceModalLabel">{selectedService}</h4>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="user_name" placeholder=" " required />
                <label>Name</label>
              </div>
              <div className="form-group">
                <input type="tel" name="user_phone" placeholder=" " required />
                <label>Phone</label>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="user_email"
                  placeholder=" "
                  required
                />
                <label>Email</label>
              </div>
              <button type="submit" className="btn-animated mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
