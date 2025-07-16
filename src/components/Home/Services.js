import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Services.css';

function Services() {
  const scrollToFooter = (e) => {
    e.preventDefault();
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="services-section pt-5">
      <div className="container">
        <h2 className="section-title d-block mb-5"><span>Our Services</span></h2>
        <div className="row g-4">

          {/* Business Registration */}
          <div className="col-md-6 col-lg-3">
            <div className="modern-card text-center">
              <div className="icon-wrapper mb-3">
                <i className="fas fa-scale-balanced"></i>
              </div>
              <h5 className="service-title mb-3">Business Registration</h5>
              <ul className="animated-list">
                <li className="list-item" onClick={() => scrollToId('solo-proprietorship')}>Solo Proprietorship <i className="fas fa-chevron-right"></i></li>
                <li className="list-item" onClick={() => scrollToId('partnership')}>Partnership <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra" onClick={() => scrollToId('llp-registration')}>LLP Registration <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra" onClick={() => scrollToId('foreign-company')}>Foreign Company <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra" onClick={() => scrollToId('ngo-section8')}>NGO/Section 8 Company <i className="fas fa-chevron-right"></i></li>
              </ul>
            </div>
          </div>

          {/* Trade Licenses */}
          <div className="col-md-6 col-lg-3">
            <div className="modern-card text-center">
              <div className="icon-wrapper mb-3">
                <i className="fas fa-file-circle-check"></i>
              </div>
              <h5 className="service-title mb-3">Trade Licenses</h5>
              <ul className="animated-list">
                <li className="list-item" onClick={() => scrollToId('pan')}>PAN <i className="fas fa-chevron-right"></i></li>
                <li className="list-item" onClick={() => scrollToId('gst')}>GST <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra" onClick={() => scrollToId('iec')}>IEC <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra" onClick={() => scrollToId('msme')}>MSME <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra" onClick={() => scrollToId('apeda-registration')}>APEDA Registration <i className="fas fa-chevron-right"></i></li>
              </ul>
            </div>
          </div>

          {/* Company Compliances */}
          <div className="col-md-6 col-lg-3">
            <div className="modern-card text-center">
              <div className="icon-wrapper mb-3">
                <i className="fas fa-shield-halved"></i>
              </div>
              <h5 className="service-title mb-3">Company Compliances</h5>
              <ul className="animated-list">
                <li className="list-item" onClick={() => scrollToId('share-transfers')}>Share Transfers <i className="fas fa-chevron-right"></i></li>
                <li className="list-item" onClick={() => scrollToId('share-transmission')}>Share Transmission <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra" onClick={() => scrollToId('share-allotments')}>Share Allotments <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra" onClick={() => scrollToId('equity-debt-raising')}>Equity/Debt. Raising <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra" onClick={() => scrollToId('annual-filing')}>Annual Filing <i className="fas fa-chevron-right"></i></li>
              </ul>
            </div>
          </div>

          {/* Tax Fillings */}
          <div className="col-md-6 col-lg-3">
            <div className="modern-card text-center">
              <div className="icon-wrapper mb-3">
                <i className="fas fa-award"></i>
              </div>
              <h5 className="service-title mb-3">Tax Fillings</h5>
              <ul className="animated-list">
                <li className="list-item" onClick={() => scrollToId('individual-itr')}>Individual ITR Filling <i className="fas fa-chevron-right"></i></li>
                <li className="list-item" onClick={() => scrollToId('corporate-itr')}>Corporate ITR Filling <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra" onClick={() => scrollToId('gst-returns')}>GST Returns <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra" onClick={() => scrollToId('tds-fillings')}>TDS Fillings <i className="fas fa-chevron-right"></i></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100px' }}>
          <a
            href="#"
            className="btn about-us-btn text-decoration-none"
            style={{ height: 'auto', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={scrollToFooter}
          >
            View All Services <i className="fas fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
