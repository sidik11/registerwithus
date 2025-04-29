import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Taskey.css';

function Services() {
    return (
        <section className="hero-section">
            <div className="container">
                <h1 className="hero-title">
                    Start your business journey on the right path 
                    Register with our organization today!
                </h1>
                <a href="#" className="btn hero-btn">
                    Try Taskey <i className="fa-solid fa-arrow-right ms-2"></i>
                </a>
            </div>
        </section>
    );
}

export default Services;
