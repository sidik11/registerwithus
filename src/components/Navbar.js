import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Collapse from "bootstrap/js/dist/collapse";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Navbar.css";

function Navbar() {
  const handleNavLinkClick = () => {
    const navbar = document.getElementById("navbarNav");
    const bsCollapse = Collapse.getInstance(navbar);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg py-3 fixed-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="img/logo.png" alt="Logo" className="me-2" />
          REGISTER WITH US
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleNavLinkClick}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleNavLinkClick}>
                About Us
              </Link>
            </li>

            {/* Mega Dropdown Services */}
            <li className="nav-item dropdown position-static">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="megaDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <div className="dropdown-menu w-100 mega-dropdown mt-0 p-4 border-0 shadow">
                <div className="container">
                  <div className="row">
                    {/* Column 1 */}
                    <div className="col-md-3">
                      <h5 className="fw-bold mb-2"><i className="fas fa-file-alt me-2"></i>Business Registration</h5>
                      <ul className="list-unstyled">
                        <li className="fs-4" ><Link to="#">Solo Partnership</Link></li>
                        <li><Link to="/service">Partnership</Link></li>
                        <li><Link to="/service">LLP Registration</Link></li>
                        <li><Link to="/service">Company Registration</Link></li>
                        <ul className="list-unstyled" >
                          <li><Link to="/service"><i class="fa fa-arrow-right me-2" aria-hidden="true"></i>
                            Private Limited Company</Link></li>
                          <li><Link to="/service"><i class="fa fa-arrow-right me-2" aria-hidden="true"></i>
                            Private Limited Company</Link></li>
                          <li><Link to="/service"><i class="fa fa-arrow-right me-2" aria-hidden="true"></i>
                            Foreign Company</Link></li>
                          <li><Link to="/service"><i class="fa fa-arrow-right me-2" aria-hidden="true"></i>
                            NGO / Section & Company</Link></li>
                        </ul>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="col-md-2">
                      <h5 className="fw-bold mb-2"><i className="fas fa-hand-holding-heart me-2"></i>Trade Licenses</h5>
                      <ul className="list-unstyled">
                        <li><Link to="/service">PAN</Link></li>
                        <li><Link to="/service">GST</Link></li>
                        <li><Link to="/service">IEC</Link></li>
                        <li><Link to="/service">Food License/FSSAI</Link></li>
                        <li><Link to="/service">Profession Tax Registration</Link></li>
                        <li><Link to="/service">MSME</Link></li>
                        <li><Link to="/service">Start-up Registration</Link></li>
                        <li><Link to="/service">Shops & Establishment</Link></li>
                        <li><Link to="/service">APEDA Registration</Link></li>
                      </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="col-md-2">
                      <h5 className="fw-bold mb-2"><i className="fas fa-balance-scale me-2"></i>Labour Laws</h5>
                      <ul className="list-unstyled">
                        <li><Link to="/service">PF Registrations</Link></li>
                        <li><Link to="/service">ESIC Registrations</Link></li>
                      </ul>
                      <h5 className="fw-bold mb-2"><i className="fas fa-certificate me-2"></i>Trademarks</h5>
                      <ul className="list-unstyled">
                        <li><Link to="/service">TM Registrations</Link></li>
                        <li><Link to="/service">TM Renewals</Link></li>
                        <li><Link to="/service">TM Assignments / Transfers</Link></li>
                        <li><Link to="/service">TM Amendments</Link></li>
                      </ul>
                    </div>

                    {/* Column 4 */}
                    {/* <div className="col-md-3">
                      <h5 className="fw-bold mb-2"><i className="fas fa-balance-scale me-2"></i>Company Compliances</h5>
                      <li><Link to="/service">Transfers</Link></li>
                      <ul className="list-unstyled" >
                        <li><Link to="/service"><i class="fa fa-arrow-right me-2" aria-hidden="true"></i>
                          Share Transfers</Link></li>
                        <li><Link to="/service"><i class="fa fa-arrow-right me-2" aria-hidden="true"></i>
                          Share Transmissions</Link></li>
                      </ul>
                      <li><Link to="/service">Share Allotments</Link></li>
                      <li><Link to="/service">Equity / Debt Raising</Link></li>
                      <li><Link to="/service">Change</Link></li>
                      <ul className="list-unstyled" >
                        <li><Link to="/service"><i class="fa fa-arrow-right me-2" aria-hidden="true"></i>
                          MSME Fillings</Link></li>
                        <li><Link to="/service"><i class="fa fa-arrow-right me-2" aria-hidden="true"></i>
                          Return of Deposit</Link></li>
                        <li><Link to="/service"><i class="fa fa-arrow-right me-2" aria-hidden="true"></i>
                          Fund Raising</Link></li>
                        <li><Link to="/service"><i class="fa fa-arrow-right me-2" aria-hidden="true"></i>
                          Annual Filling</Link></li>
                      </ul>
                    </div> */}
                    <div className="col-md-3">
                      <h5 className="fw-bold mb-2"><i className="fas fa-file-alt me-2"></i>Company Compliances</h5>
                      <ul className="list-unstyled">
                        <li><Link to="/service">Transfers</Link></li>
                        <ul className="list-unstyled" >
                          <li><Link to="/service"><i class="fa fa-arrow-right me-2" aria-hidden="true"></i>
                            Share Transfers</Link></li>
                          <li><Link to="/service"><i class="fa fa-arrow-right me-2" aria-hidden="true"></i>
                            Share Transmissions</Link></li>
                        </ul>
                        <li><Link to="/service">Share Allotments</Link></li>
                        <li><Link to="/service">Equity / Debt Raising</Link></li>
                        <li><Link to="/service">Change</Link></li>
                        <ul className="list-unstyled" >
                          <li><Link to="/service"><i class="fa fa-arrow-right me-2" aria-hidden="true"></i>
                            MSME Fillings</Link></li>
                          <li><Link to="/service"><i class="fa fa-arrow-right me-2" aria-hidden="true"></i>
                            Return of Deposit</Link></li>
                          <li><Link to="/service"><i class="fa fa-arrow-right me-2" aria-hidden="true"></i>
                            Fund Raising</Link></li>
                          <li><Link to="/service"><i class="fa fa-arrow-right me-2" aria-hidden="true"></i>
                            Annual Filling</Link></li>
                        </ul>
                      </ul>
                    </div>

                    {/* Column 5 */}
                    <div className="col-md-2">
                      <h5 className="fw-bold mb-2"><i className="fas fa-utensils me-2"></i>Tax Fillings</h5>
                      <ul className="list-unstyled">
                        <li><Link to="/service">ITR Filling</Link></li>
                        <ul className="list-unstyled" >
                          <li><Link to="/service"><i class="fa fa-arrow-right me-2" aria-hidden="true"></i>
                            Individual</Link></li>
                          <li><Link to="/service"><i class="fa fa-arrow-right me-2" aria-hidden="true"></i>
                            Corporate</Link></li>
                        </ul>
                        <li><Link to="/service">GST Returns</Link></li>
                        <li><Link to="/service">TDS Fillings</Link></li>
                      </ul>
                      <h5 className="fw-bold mb-2"><i className="fas fa-utensils me-2"></i>Tax Fillings</h5>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/blogs" onClick={handleNavLinkClick}>
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleNavLinkClick}>
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="tel:+917855865181"
                className="d-inline-flex align-items-center px-3 py-2 text-white contact-nav"
              >
                <i className="fa fa-phone me-2"></i>
                +917855865181
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
