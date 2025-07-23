import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Collapse from "bootstrap/js/dist/collapse";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Navbar.css";

function Navbar() {
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

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

    return () => {
      link.removeEventListener("click", handleClick);
      menu.removeEventListener("mouseleave", handleMouseLeave);
      menu.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg py-3 fixed-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="img/mainlogo.png" alt="Logo" className="main-lg me-2 bg-white" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse mobile-sidebar" id="navbarNav">
          <div className="d-lg-none d-flex justify-content-between align-items-center px-3 pt-3">
            <span className="fs-5 fw-bold">Register With Us</span>
            <button className="btn btn-link text-dark fs-2 close-btn" onClick={handleCloseSidebar}>
              <i className="fas fa-times"></i>
            </button>
          </div>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleNavLinkClick}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleNavLinkClick}>About Us</Link>
            </li>

            <li className="nav-item dropdown position-static" ref={dropdownRef}>
              <a className="nav-link dropdown-toggle fw-semibold" href="#" id="megaDropdown" role="button">
                Services
              </a>
              <div className="dropdown-menu w-100 mega-dropdown mt-0 border-0 shadow-lg" ref={menuRef}>
                <div className="container">
                  <div className="row gy-4">
                    {/* Column 1 */}
                    {/* Column 1 */}
                    <div className="col-md-3">
                      <h4 className="mega-heading"><i className="fas fa-briefcase me-2"></i>Business Registration</h4>
                      <ul className="mega-list">
                        <li><Link to="/sole-proprietorship-registration-online">Solo Proprietorship</Link></li>
                        <li><Link to="/partnership-firm-registration-online">Partnership</Link></li>
                        <li><Link to="/llp-registration-services-online">LLP Registration</Link></li>
                        <li>
                          <Link to="/Company Registration">Company Registration</Link>
                          <ul className="sub-list">
                            <li><Link to="/private-limited-company-registration-online">Private Limited Company</Link></li>
                            <li><Link to="/public-limited-company-registration-online">Public Company Limited</Link></li>
                            <li><Link to="/Foreign Company">Foreign Company</Link></li>
                            <li><Link to="/NGO / Section 8 Company">NGO / Section 8 Company</Link></li>
                          </ul>
                        </li>
                      </ul>
                      <h4 className="mega-heading"><i className="fas fa-calculator me-2"></i>Tax Filings</h4>
                      <ul className="mega-list">
                        <li>
                          <Link to="/ITR Filing">ITR Filing</Link>
                          <ul className="sub-list">
                            <li><Link to="/Individual">Individual</Link></li>
                            <li><Link to="/Corporate">Corporate</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/GST Returns">GST Returns</Link></li>
                        <li><Link to="/TDS Filings">TDS Filings</Link></li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="col-md-3">
                      <h4 className="mega-heading"><i className="fas fa-id-card-alt me-2"></i>Trade Licenses</h4>
                      <ul className="mega-list">
                        <li><Link to="/pan-card-registration-online">PAN</Link></li>
                        <li><Link to="/apply-gst-registration-online">GST</Link></li>
                        <li><Link to="/import-export-code-registration-online">IEC</Link></li>
                        <li>
                          <Link to="/fssai-registration-online-india">Food Licenses / FSSAI</Link>
                          <ul className="sub-list">
                            <li><Link to="/Private Limited Company">Manufactures</Link></li>
                            <li><Link to="/Private Limited Company">Wholesale / Retail</Link></li>
                            <li><Link to="/Foreign Company">Relabeler</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/professional-tax-registration-online">Professional Tax Registration</Link></li>
                        <li><Link to="/udyam-msme-registration-online">MSME</Link></li>
                        <li><Link to="/startup-india-registration-online">Start-up Registration</Link></li>
                        <li><Link to="/shop-and-establishment-act-registration">Shops & Establishment</Link></li>
                        <li><Link to="/apeda-registration-online">APEDA Registration</Link></li>
                      </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="col-md-3">
                      <h4 className="mega-heading"><i className="fas fa-balance-scale me-2"></i>Labour Laws</h4>
                      <ul className="mega-list">
                        <li><Link to="/epf-registration-online">One Time PF Registration</Link></li>
                        <li><Link to="/esic-registration-online">ESIC Registration</Link></li>
                      </ul>
                      <h4 className="mega-heading mt-4"><i className="fas fa-award me-2"></i>Trademarks</h4>
                      <ul className="mega-list">
                        <li><Link to="/online-trademark-registration-india">TM Registration</Link></li>
                        <li><Link to="/TM Renewal">TM Renewal</Link></li>
                        <li><Link to="/TM Assignment">TM Assignment / Transfers</Link></li>
                        <li><Link to="/TM Amendment">TM Amendments</Link></li>
                      </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="col-md-3">
                      <h4 className="mega-heading"><i className="fas fa-building me-2"></i>Company Compliances</h4>
                      <ul className="mega-list">
                        <li>
                          <Link to="/Company Registration">Transfers</Link>
                          <ul className="sub-list">
                            <li><Link to="/Private Limited Company">Share Transfers</Link></li>
                            <li><Link to="/Private Limited Company">Share Transmission</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/Allotments">Share Allotments</Link></li>
                        <li><Link to="/Equity / Debt Raising">Equity / Debt Raising</Link></li>
                        <li>
                          <Link to="/Changes">Change</Link>
                          <ul className="sub-list">
                            <li><Link to="/MSME Filing">Change in Directors / KMP</Link></li>
                            <li><Link to="/Fund Raising">Change in Auditors</Link></li>
                            <li><Link to="/Return of Deposit">Change in Address / Shifting of Office</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/Allotments">MSME Fillings</Link></li>
                        <li><Link to="/Allotments">Return Of Deposit</Link></li>
                        <li><Link to="/Allotments">Fund Raise</Link></li>
                        <li><Link to="/Allotments">Annual Filling</Link></li>
                      </ul>
                    </div>

                    {/* Column 5 */}
                    {/* <div className="col-md-2">
                      
                    </div> */}

                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/blogs" onClick={handleNavLinkClick}>Blogs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleNavLinkClick}>Contact Us</Link>
            </li>
            <li className="nav-item">
              <a href="tel:+919643981247" className="d-inline-flex align-items-center px-3 py-2 text-white contact-nav">
                <i className="fa fa-phone me-2"></i> +919643981247
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
