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
    const submenuElements = document.querySelectorAll(".dropdown-submenu");

    const mouseEnterHandler = (event) => {
      const submenu = event.currentTarget.querySelector(".dropdown-menu");
      if (submenu) submenu.classList.add("show");
    };

    const mouseLeaveHandler = (event) => {
      const submenu = event.currentTarget.querySelector(".dropdown-menu");
      if (submenu) submenu.classList.remove("show");
    };

    submenuElements.forEach((element) => {
      element.addEventListener("mouseenter", mouseEnterHandler);
      element.addEventListener("mouseleave", mouseLeaveHandler);
    });

    return () => {
      submenuElements.forEach((element) => {
        element.removeEventListener("mouseenter", mouseEnterHandler);
        element.removeEventListener("mouseleave", mouseLeaveHandler);
      });
    };
  }, []);

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

  const preventDefault = (e) => e.preventDefault();

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

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
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

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={preventDefault}
              >
                Services
              </a>

              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li className="dropdown-submenu">
                  <Link className="dropdown-item dropdown-toggle" to="/service" onClick={preventDefault}>Business Registration</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/service">Solo Partnership</Link></li>
                    <li><Link className="dropdown-item" to="/service">Partnership</Link></li>
                    <li><Link className="dropdown-item" to="/service">LLP Registration</Link></li>
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item dropdown-toggle" to="/service">Company Registration</Link>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/service">Private Limited Company</Link></li>
                        <li><Link className="dropdown-item" to="/service">Public Limited Company</Link></li>
                        <li><Link className="dropdown-item" to="/service">Foreign Company</Link></li>
                        <li><Link className="dropdown-item" to="/service">NGO / Section 8 Company</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="dropdown-submenu">
                  <Link className="dropdown-item dropdown-toggle" to="/service" onClick={preventDefault}>Trade Licenses</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/service">PAN</Link></li>
                    <li><Link className="dropdown-item" to="/service">GST</Link></li>
                    <li><Link className="dropdown-item" to="/service">IEC</Link></li>
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item dropdown-toggle" to="/service">Food Licenses / FSSAI</Link>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/service">Manufacturer</Link></li>
                        <li><Link className="dropdown-item" to="/service">Wholesale / Retail</Link></li>
                        <li><Link className="dropdown-item" to="/service">Relabeler</Link></li>
                      </ul>
                    </li>
                    <li><Link className="dropdown-item" to="/service">Professional Tax Registrations</Link></li>
                    <li><Link className="dropdown-item" to="/service">MSME</Link></li>
                    <li><Link className="dropdown-item" to="/service">Start-up Registration</Link></li>
                    <li><Link className="dropdown-item" to="/service">Shops and Establishment</Link></li>
                    <li><Link className="dropdown-item" to="/service">APEDA Registration</Link></li>
                  </ul>
                </li>

                <li className="dropdown-submenu">
                  <Link className="dropdown-item dropdown-toggle" to="/service" onClick={preventDefault}>Labour Laws</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/service">PF Registrations</Link></li>
                    <li><Link className="dropdown-item" to="/service">ESIC Registrations</Link></li>
                  </ul>
                </li>

                <li className="dropdown-submenu">
                  <Link className="dropdown-item dropdown-toggle" to="/service/trademarks" onClick={preventDefault}>Trademarks</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/service">TM Registrations</Link></li>
                    <li><Link className="dropdown-item" to="/service">TM Renewals</Link></li>
                    <li><Link className="dropdown-item" to="/service">TM Assignments / Transfers</Link></li>
                    <li><Link className="dropdown-item" to="/service">TM Amendments</Link></li>
                  </ul>
                </li>

                <li className="dropdown-submenu">
                  <Link className="dropdown-item dropdown-toggle" to="/service" onClick={preventDefault}>Company Compliances</Link>
                  <ul className="dropdown-menu">
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item dropdown-toggle" to="/service" onClick={preventDefault}>Transfers</Link>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/service">Share Transfers</Link></li>
                        <li><Link className="dropdown-item" to="/service">Share Transmissions</Link></li>
                      </ul>
                    </li>
                    <li><Link className="dropdown-item" to="/service">Share Allotments</Link></li>
                    <li><Link className="dropdown-item" to="/service">Equity / Debt Raising</Link></li>
                    <li><Link className="dropdown-item" to="/service">Equity / Debt Raising</Link></li>
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item dropdown-toggle" to="/service" onClick={preventDefault}>Change</Link>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/service">MSME Filings</Link></li>
                        <li><Link className="dropdown-item" to="/service">Return of Deposit</Link></li>
                        <li><Link className="dropdown-item" to="/service">Fund Raise</Link></li>
                        <li><Link className="dropdown-item" to="/service">Annual Filing</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="dropdown-submenu">
                  <Link className="dropdown-item dropdown-toggle" to="/service" onClick={preventDefault}>Tax Filings</Link>
                  <ul className="dropdown-menu">
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item dropdown-toggle" to="/service" onClick={preventDefault}>ITR Filing</Link>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/service">Individual</Link></li>
                        <li><Link className="dropdown-item" to="/service">Corporate</Link></li>
                      </ul>
                    </li>
                    <li><Link className="dropdown-item" to="/service">GST Returns</Link></li>
                    <li><Link className="dropdown-item" to="/service">TDS Filing</Link></li>
                  </ul>
                </li>

                <li><Link className="dropdown-item" to="/service">ISO Certifications</Link></li>
              </ul>
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
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
