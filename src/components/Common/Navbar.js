import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="img/logo.png" alt="Logo" className="me-2" />
          REGISTER WITH US
        </a>
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
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
            
            {/* Mega Dropdown */}
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
              <div className="dropdown-menu w-100 mt-0 border-0 rounded-0 shadow mega-dropdown" aria-labelledby="megaDropdown">
                <div className="container">
                  <div className="row py-4">
                    <div className="col-md-3">
                      <h6 className="text-uppercase">Web Services</h6>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">Web Design</a></li>
                        <li><a href="#" className="dropdown-item">Web Development</a></li>
                        <li><a href="#" className="dropdown-item">eCommerce</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <h6 className="text-uppercase">Digital Marketing</h6>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">SEO</a></li>
                        <li><a href="#" className="dropdown-item">Google Ads</a></li>
                        <li><a href="#" className="dropdown-item">Social Media</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <h6 className="text-uppercase">IT Solutions</h6>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">Cloud Hosting</a></li>
                        <li><a href="#" className="dropdown-item">Cybersecurity</a></li>
                        <li><a href="#" className="dropdown-item">Maintenance</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <img src="img/services.jpg" alt="Services" className="img-fluid rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item"><a className="nav-link" href="#">Blogs</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
