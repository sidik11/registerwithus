import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Contactus.css";

function Contactus() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  // alert("Form submission started"); // Step 1
  setResponseMsg("Sending...");

  try {
    // alert("Preparing data to send..."); // Step 2
    const payload = { ...formData, form_type: "ContactUs" };
    // alert("Payload: " + JSON.stringify(payload)); // Step 3

   const res = await fetch("http://localhost:3001/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // alert("Fetch completed"); // Step 4

    const result = await res.json();
    // alert("Response: " + JSON.stringify(result)); // Step 5

    if (res.ok && result.success) {
      alert("Submission success"); // Step 6
      setResponseMsg("Message sent successfully ✅");
      setFormData({
        user_name: "",
        user_email: "",
        user_phone: "",
        message: "",
      });
    } else {
      alert("Server responded but failed: " + result.message); // Step 7
      setResponseMsg("Failed to send message ❌");
    }
  } catch (err) {
    alert("Catch block triggered: " + err.message); // Step 8
    console.error("Submission error:", err);
    setResponseMsg("Something went wrong ❌");
  }
};

  return (
    <section>
      <div className="container py-5">
        <div className="text-center py-3">
          <p className="cont-text">
            Our team is available to answer your questions about our services.
            Feel free to ask your question, and we will contact you as soon as
            possible.
          </p>
        </div>

        <div className="mb-5">
          <div className="row g-4 d-flex align-items-center justify-content-center">
            <div className="col-lg-6 col-md-6 form-section border">
              <h2 className="mb-3 fw-bold">Get in touch</h2>
              <p>
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
                leo molestie vel, ornare non id blandit netus.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="user_name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="user_email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="user_email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={formData.user_email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="user_phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="user_phone"
                        className="form-control"
                        placeholder="Enter your number"
                        value={formData.user_phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="form-control"
                    placeholder="Type your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
                {responseMsg && (
                  <p className="mt-2 text-center">{responseMsg}</p>
                )}
              </form>
            </div>

            <div className="col-lg-6 col-md-6 map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.084078243192!2d-122.41990668468298!3d37.77492977975995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8ddf5dcd%3A0x5c2b210dfb71252f!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1689615907759!5m2!1sen!2sus"
                width="100%"
                height="520"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="text-center py-4">
          <div className="row justify-content-center g-4">
            <div className="col-12 col-md-4 d-flex flex-column align-items-center">
              <div className="icon-circle mb-2">
                <i className="fas fa-user fs-2"></i>
              </div>
              <a className="text-decoration-none" href="tel:+919643981247">
                <div className="info-text mt-2">+919643981247</div>
              </a>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column align-items-center">
              <div className="icon-circle mb-2">
                <i className="fas fa-envelope fs-2"></i>
              </div>
              <a
                className="text-decoration-none"
                href="mailto:info@registerwithus.in"
              >
                <div className="info-text mt-2">info@registerwithus.in</div>
              </a>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column align-items-center">
              <div className="icon-circle mb-2">
                <i className="fas fa-map-marker-alt fs-2"></i>
              </div>
              <div className="info-text mt-2">Bhubaneswar, Odisha</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactus;
