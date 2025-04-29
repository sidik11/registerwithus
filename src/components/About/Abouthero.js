import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Abouthero.css'

function Abouthero() {
    return (
        <section className="about-section">
            <div className="about-overlay"></div>
            <div className="about-content px-3">
                <h1 className="fw-bold mb-3">About Us</h1>
                <p className="fs-5">
                    From preschool to pre-tertiary, our students enjoy fun, interactive and relevant lessons and are empowered to think beyond the confines of the classroom.
                </p>
            </div>
        </section>

    );
}

export default Abouthero;
