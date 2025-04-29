import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Contactus.css';

function Contactus() {
  return (
    <section>
      <div className="container py-5">
        <div class="text-center py-3">
          <p className="cont-text">Our team is available to answer your questions about our services. Feel free to ask your question, and we will contact you as soon as possible.
            We have been working in the industry for more than 30 months. Cumulating all we have accomplished on the 100 pages of our websites is unjustifiable. Let us connect so we can discuss anything that eludes you further.</p>
          {/* <p>We have been working in the industry for more than 30 months. Cumulatively all we have accomplished on the 100 pages of our website is unjustifiable. Let us connect so we can discuss anything that eludes you further.</p> */}
        </div>

        <div class="mb-5">
          <div class="row g-4 d-flex align-items-center justify-content-center">
            <div class="col-lg-6 col-md-6 form-section border">
              <h2 class="mb-3 fw-bold">Get in touch</h2>
              <p>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
              <form>
                <div class="mb-3">
                  <label for="name" class="form-label">Your Name</label>
                  <input type="text" id="name" class="form-control" placeholder="Enter your name" />
                </div>
                <div className="row" >
                  <div className="col-6" >
                    <div class="mb-3">
                      <label for="email" class="form-label">Email address</label>
                      <input type="email" id="email" class="form-control" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="col-6" >
                    <div class="mb-3">
                      <label for="number" class="form-label">Phone Number</label>
                      <input type="number" id="number" class="form-control" placeholder="Enter your number" />
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">Your Message</label>
                  <textarea id="message" rows="4" class="form-control" placeholder="Type your message"></textarea>
                </div>
                <button type="submit" class="btn btn-primary w-100">Send Message</button>
              </form>
            </div>

            <div class="col-lg-6 col-md-6 map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.084078243192!2d-122.41990668468298!3d37.77492977975995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8ddf5dcd%3A0x5c2b210dfb71252f!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1689615907759!5m2!1sen!2sus"
                width="100%" height="520" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>

        <div class="text-center py-4">
          <div class="row justify-content-center g-4">
            <div class="col-12 col-md-4 d-flex flex-column align-items-center">
              <div class="icon-circle mb-2">
                <i class="fas fa-user fs-2"></i>
              </div>
              <div class="info-text mt-2">+91 43446537758</div>
            </div>
            <div class="col-12 col-md-4 d-flex flex-column align-items-center">
              <div class="icon-circle mb-2">
                <i class="fas fa-envelope fs-2"></i>
              </div>
              <div class="info-text mt-2">registerwithus@gmail.com</div>
            </div>
            <div class="col-12 col-md-4 d-flex flex-column align-items-center">
              <div class="icon-circle mb-2">
                <i class="fas fa-map-marker-alt fs-2"></i>
              </div>
              <div class="info-text mt-2">Bhubaneswar, Odisha</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contactus;
