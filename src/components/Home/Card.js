import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Card.css'

function Card() {
    return (
        <div className="container py-5">

            <div className="row text-center g-4">
                <div className="col-md-4">
                    <div className="solution-card">
                        <div className="icon"><i className="fas fa-user"></i></div>
                        <div className="title">Sole Trader</div>
                        <div className="card-details">
                            <p>We help sole traders streamline compliance and reduce burden with expert support.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="solution-card">
                        <div className="icon"><i className="fas fa-building"></i></div>
                        <div className="title">Limited Company</div>
                        <div className="card-details">
                            <p>Get customized solutions for your limited company with reliable, fast services.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="solution-card">
                        <div className="icon"><i className="fas fa-chart-line"></i></div>
                        <div className="title">Growing Business</div>
                        <div className="card-details">
                            <p>Scale confidently with tailored compliance strategies that grow with your business.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
