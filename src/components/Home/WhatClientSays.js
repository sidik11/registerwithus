import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './WhatClientSays.css';

function WhatClientSays() {
  return (
    <div className="container py-5 text-center">
      <h2 className="section-title d-block" >
        <span className="fw-bold mb-5">
          What Our Clients <span className="">Says</span>
        </span>
      </h2>

      <div
        id="testimonialCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        <div className="carousel-inner p-5">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="row g-4">
              {/* Card 1 */}
              <div className="col-md-4">
                <div className="testimonial-card text-start">
                  <i className="fas fa-quote-left quote-icon mb-3"></i>
                  <p><strong>Register With Us</strong> is designed as a collaboration tool for businesses that is a full
                    project management solution.</p>
                  <hr />
                  <div className="d-flex align-items-center mt-3">
                    <img src="img/portraits/f-2.jpeg" className="client-img me-3" alt="Trupti Jena" />
                    <div>
                      <div className="client-name">Trupti Jena</div>
                      <small>Head of Talent Acquisition, North America</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-4">
                <div className="testimonial-card text-start">
                  <i className="fas fa-quote-left quote-icon mb-3"></i>
                  <p><strong>Register With Us</strong> is designed as a collaboration tool for businesses that is a full
                    project management solution.</p>
                  <hr />
                  <div className="d-flex align-items-center mt-3">
                    <img src="img/portraits/m-1.jpeg" className="client-img me-3" alt="Rajesh Dhala" />
                    <div>
                      <div className="client-name">Rajesh Dhala</div>
                      <small>Head of Talent Acquisition, North America</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-4">
                <div className="testimonial-card text-start">
                  <i className="fas fa-quote-left quote-icon mb-3"></i>
                  <p><strong>Register With Us</strong> is designed as a collaboration tool for businesses that is a full
                    project management solution.</p>
                  <hr />
                  <div className="d-flex align-items-center mt-3">
                    <img src="img/portraits/m-4.jpeg" className="client-img me-3" alt="Mukesh Patra" />
                    <div>
                      <div className="client-name">Mukesh Patra</div>
                      <small>Head of Talent Acquisition, North America</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="row g-4">
              {/* Card 1 */}
              <div className="col-md-4">
                <div className="testimonial-card text-start">
                  <i className="fas fa-quote-left quote-icon mb-3"></i>
                  <p><strong>Register With Us</strong> helped streamline our operations and improved our team’s
                    collaboration dramatically.</p>
                  <hr />
                  <div className="d-flex align-items-center mt-3">
                    <img src="img/portraits/m-5.jpeg" className="client-img me-3" alt="Anita Kumar" />
                    <div>
                      <div className="client-name">Anita Kumar</div>
                      <small>Operations Manager, Europe</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-4">
                <div className="testimonial-card text-start">
                  <i className="fas fa-quote-left quote-icon mb-3"></i>
                  <p><strong>Register With Us</strong> is the most intuitive platform we’ve used for project tracking and
                    communication.</p>
                  <hr />
                  <div className="d-flex align-items-center mt-3">
                    <img src="img/portraits/m-6.jpeg" className="client-img me-3" alt="Sanjay Raut" />
                    <div>
                      <div className="client-name">Sanjay Raut</div>
                      <small>Project Lead, Asia Pacific</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-4">
                <div className="testimonial-card text-start">
                  <i className="fas fa-quote-left quote-icon mb-3"></i>
                  <p><strong>Register With Us</strong> gave us better visibility into tasks and progress across teams.</p>
                  <hr />
                  <div className="d-flex align-items-center mt-3">
                    <img src="img/portraits/f-3.jpeg" className="client-img me-3" alt="Nikita Agarwal" />
                    <div>
                      <div className="client-name">Nikita Agarwal</div>
                      <small>HR Director, India</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Dot Indicators */}
      {/* <div className="dot-indicator-wrapper position-relative mt-4">
        <div className="dot-indicator-bar d-flex justify-content-center">
          <div className="dot-indicator rounded-circle me-3 active" data-bs-target="#testimonialCarousel" data-bs-slide-to="0"></div>
          <div className="dot-indicator rounded-circle me-3" data-bs-target="#testimonialCarousel" data-bs-slide-to="1"></div>
        </div>
      </div> */}
    </div>
  );
}

export default WhatClientSays;
