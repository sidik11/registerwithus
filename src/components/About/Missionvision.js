import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Missionvision.css';

function Missionvision() {
  return (
    <section className="mission-vision-section py-5">
      <div className="container">

        {/* Mission */}
        <div className="row align-items-center mb-5">
          <div className="col-12 col-md-3 text-center mb-3 mb-md-0">
            <img src="img/mission.png" alt="Mission Icon"  className="img-fluid mission-vision" />
          </div>
          <div className="col-12 col-md-9 mission-text">
            <h2 className="fw-bold mission-text">Mission</h2>
            <p className="mb-1 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p className="mb-0 fs-5">Lorem Ipsum has been the industry's standard</p>
          </div>
        </div>

        {/* Vision */}
        <div className="row align-items-center">
          <div className="col-12 col-md-9 text-md-end text-center">
            <h2 className="fw-bold">Vision</h2>
            <p className="mb-1 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p className="mb-0 fs-5">Lorem Ipsum has been the industry's standard</p>
          </div>
          <div className="col-12 col-md-3 text-center mb-3 mb-md-0">
            <img src="img/vision.png" alt="Vision Icon"  className="img-fluid mission-vision" />
          </div>
        </div>

      </div>
    </section>

  );
}

export default Missionvision;
