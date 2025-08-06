import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Card.css';

function Card() {
  return (
    <section className="about-us-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src="/img/consultant3.jpeg"
              alt="About Us"
              className="about-us-image img-fluid"
            />
          </div>

          {/* Right Side Content */}
          <div className="col-lg-6 about-us-content">
            <h2 className="about-us-heading mb-3">
              About Us
            </h2>
            <p className="about-us-description">
              We are not just a service provider — we are your strategic partners in achieving compliance and sustainable growth. Our passionate team is committed to delivering personalized business solutions that address the unique needs of every client.
            </p>
            <p className="about-us-description">
              Whether you're a startup or an established enterprise, we bring clarity, efficiency, and trust to every project we handle.
            </p>

            <a href="/about" className="btn about-us-btn mt-4">
              Learn More <i className="fas fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
