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
        <h2 className="section-title d-block mb-3 about-us-heading"><span>Our Services</span></h2>
        <h5 className='text-center' >Your one-stop AU-in-One Business Compliance Platform, from company setup to tax filings, we handle it all. As a leading Government Registration Service Provider for Business, we
          ensure you stay compliant, certified, and growth-ready.</h5>
        <div className="row g-4">

          {/* Business Registration */}
          <div className="col-md-6 col-lg-3">
            <div className="modern-card text-center">
              <div className="icon-wrapper mb-3">
                <i className="fas fa-scale-balanced"></i>
              </div>
              <h5 className="service-title mb-3">Business Registration</h5>
              <ul className="animated-list">
                <li className="list-item" ><a href="/sole-proprietorship-registration-online" className='text-decoration-none text-black' >Solo Proprietorship</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item" ><a href="/partnership-firm-registration-online" className='text-decoration-none text-black' >Partnership</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra" ><a href="/llp-registration-services-online" className='text-decoration-none text-black' >LLP Registration</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra" ><a href="/Foreign Company" className='text-decoration-none text-black' >Foreign Company</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra" ><a href="/NGO / Section 8 Company" className='text-decoration-none text-black' >NGO / Section 8 Company</a> <i className="fas fa-chevron-right"></i></li>
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
                <li className="list-item"><a href="/pan-card-registration-online" className='text-decoration-none text-black' >PAN</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item"><a href="/apply-gst-registration-online" className='text-decoration-none text-black' >GST</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra"><a href="/import-export-code-registration-online" className='text-decoration-none text-black' >IEC</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra"><a href="/udyam-msme-registration-online" className='text-decoration-none text-black' >MSME</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra"><a href="/apeda-registration-online" className='text-decoration-none text-black' >APEDA Registration</a> <i className="fas fa-chevron-right"></i></li>
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
                <li className="list-item"><a href="/share-transfers-online-registration" className='text-decoration-none text-black' >Share Transfers</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item"><a href="/share-transmission-online-registration" className='text-decoration-none text-black' >Share Transmission</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra"><a href="/share-allotments-online-registration" className='text-decoration-none text-black' >Share Allotments</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra"><a href="equity-debt-raising-online-registration" className='text-decoration-none text-black' >Equity / Debt. Raising</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra"><a href="/annual-fillings-online-registration" className='text-decoration-none text-black' >Annual Fillings</a> <i className="fas fa-chevron-right"></i></li>
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
                <li className="list-item"><a href="/individual-itr-fillings-online-registration" className='text-decoration-none text-black' >Individual ITR Filings</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item"><a href="/corporate-itr-fillings-online-registration" className='text-decoration-none text-black' >Corporate ITR Filings</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra"><a href="/gst-returns-online-registration" className='text-decoration-none text-black' >GST returns</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra"><a href="/tds-filings-online-registration" className='text-decoration-none text-black' >TDS Filings</a> <i className="fas fa-chevron-right"></i></li>
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
