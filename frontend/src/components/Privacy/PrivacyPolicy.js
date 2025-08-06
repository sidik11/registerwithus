import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <section className="privacy-policy py-5">
      <div className="container">
        {/* <h2 className="text-center mb-5">
          <i className="fas fa-user-shield me-2"></i>Privacy Policy
        </h2> */}

        <div className="section mb-5">
          <h4><i className="fas fa-info-circle me-2 text-primary"></i>Introduction</h4>
          <p>
            We value your trust. This Privacy Policy explains how we collect, use, and protect your personal information
            when you use our services. By accessing or using our website, you agree to this policy.
          </p>
        </div>

        <div className="section mb-5">
          <h4><i className="fas fa-database me-2 text-success"></i>Information We Collect</h4>
          <ul className="custom-list">
            <li><i className="fas fa-check-circle text-success me-2"></i>Personal details like name, email, phone number.</li>
            <li><i className="fas fa-check-circle text-success me-2"></i>Browser and device information for analytics.</li>
            <li><i className="fas fa-check-circle text-success me-2"></i>Payment and transaction data (encrypted).</li>
          </ul>
        </div>

        <div className="section mb-5">
          <h4><i className="fas fa-user-lock me-2 text-warning"></i>How We Use Your Data</h4>
          <ul className="custom-list">
            <li><i className="fas fa-check-circle text-warning me-2"></i>To deliver services you request.</li>
            <li><i className="fas fa-check-circle text-warning me-2"></i>To improve user experience and platform performance.</li>
            <li><i className="fas fa-check-circle text-warning me-2"></i>For legal compliance and fraud prevention.</li>
          </ul>
        </div>

        <div className="section mb-5">
          <h4><i className="fas fa-lock me-2 text-danger"></i>Data Security</h4>
          <p>
            We use industry-standard encryption and strict internal procedures to safeguard your data. Access is limited
            to authorized personnel only.
          </p>
        </div>

        <div className="section mb-5">
          <h4><i className="fas fa-exchange-alt me-2 text-info"></i>Third-Party Sharing</h4>
          <p>
            We do not sell or rent your data. Limited sharing may occur with trusted partners for service delivery (e.g.,
            payment gateways), all of whom are bound by confidentiality agreements.
          </p>
        </div>

        <div className="section mb-5">
          <h4><i className="fas fa-edit me-2 text-secondary"></i>Your Rights</h4>
          <ul className="custom-list">
            <li><i className="fas fa-check-circle text-secondary me-2"></i>Right to access or update your information.</li>
            <li><i className="fas fa-check-circle text-secondary me-2"></i>Right to request deletion of your data.</li>
            <li><i className="fas fa-check-circle text-secondary me-2"></i>Right to withdraw consent at any time.</li>
          </ul>
        </div>

        <div className="section text-center bg-secondary p-5">
          <h2 className="mb-2 text-white">Have questions?</h2>
          <a href="mailto:info@registerwithus.in" className="btn btn-primary">
            <i className="fas fa-envelope me-2"></i>Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
