import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Hero4.css';

function Hero4() {
  return (
    <section className="modern-hero-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-6 text-center text-lg-start modern-hero-content">
            <p className="sale-banner">Save 60% with Topzone during our Black Friday sale</p>
            <h1 className="hero-main-title">
              Connect with your <br /><span className="highlight">targeted audience</span>
            </h1>
            <p className="hero-desc">
              We help small businesses and start up with connecting audience, make sales and enlarge their business.
            </p>

            <div className="hero-buttons d-flex align-items-center flex-wrap">
              <a href="#" className="btn btn-deal me-3">Get the deal</a>
              <a href="#" className="btn btn-deal d-flex align-items-center">
                <i className="fas fa-play me-2"></i> Watch a demo
              </a>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-6 d-flex justify-content-center position-relative modern-hero-visual">
            <div className="circle-layer blue"></div>
            <div className="circle-layer pink"></div>

            <div className="hero-person hero-person-top">
              <img src="/img/clienttrust.jpg" alt="User 1" />
              <div className="badge-star">Client Trust</div>
            </div>

            <div className="hero-person hero-person-bottom">
              <img src="/img/leadgeneration.jpg" alt="User 2" />
              <div className="badge-service">Lead Generation</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero4;
