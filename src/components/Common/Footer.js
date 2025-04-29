import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import BlogPage from '../../pages/BlogPage';
import './Footer.css';

function Footer() {
    return (
        <footer className="bg-dark-blue text-white pt-5 pb-3">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-lg-4 col-sm-12 text-start">
                        <div className="d-flex align-items-center mb-3">
                            <div className="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center me-2 foot-icon">
                                <i className="fa-solid fa-r"></i>
                            </div>
                            <h5 className="fw-bold mb-0">Register With Us</h5>
                        </div>
                        <p className="small mb-1">Register with us was created for<br /> the new ways we live and work.</p>
                        <p className="small">We make a better register with<br /> us around the world</p>
                    </div>

                    <div className="col-lg-2 col-sm-6 text-start">
                        <h6 className="fw-bold mb-3">Resources</h6>
                        <ul className="list-unstyled small">
                            <li className="mb-2"><Link to="/blogs" className="text-white text-decoration-none">Blog</Link></li>
                            {/* <li className="mb-2"><Link to="/guides" className="text-white text-decoration-none">Guides & Tutorials</Link></li> */}
                            <li><Link to="/faqs" className="text-white text-decoration-none">FAQ's</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-sm-6 text-start">
                        <h6 className="fw-bold mb-3">Company</h6>
                        <ul className="list-unstyled small">
                            <li className="mb-2"><Link to="/about" className="text-white text-decoration-none">About</Link></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none">Careers</a></li>
                            <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-sm-12 text-start">
                        <h6 className="fw-bold mb-3">Try It Today</h6>
                        <p className="small mb-3">Get started for free. Add your<br /> whole team as your needs grow.</p>
                        <a href="#" className="btn btn-info text-dark fw-semibold px-4 py-2 rounded-3">
                            Start today <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a>
                    </div>
                </div>

                <hr className="border-secondary my-4" />
                <div className="d-flex flex-wrap justify-content-between align-items-center text-center text-md-start small">
                    <div className="mb-2 mb-md-0 text-start">
                        <a href="#" className="text-white me-4 text-decoration-none">Terms & privacy</a>
                        <a href="#" className="text-white me-4 text-decoration-none">Security</a>
                        <a href="#" className="text-white me-4 text-decoration-none">Status</a>
                        <span>©2025 TECHGEERING</span>
                    </div>
                    <div className="text-start">
                        <a href="#" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-white"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;