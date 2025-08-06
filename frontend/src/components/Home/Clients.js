import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Clients.css';

function Clients() {
    return (
        <section className="pb-5">
            <div className="container">
                <h2 className="section-title text-center text-dark d-block about-us-heading"><span className="overlap-conte" >Our Clients</span></h2>

                <div className="logo-container text-center">
                    <img src="img/logos/spinny.jpeg" alt="Spinny" className="client-logo" />
                    <img src="img/logos/marg.jpeg" alt="Marg" className="client-logo" />
                    <img src="img/logos/justdial.jpeg" alt="Justdial" className="client-logo" />
                    <img src="img/logos/fia.jpeg" alt="FIA" className="client-logo" />
                    <img src="img/logos/davinta.jpeg" alt="Davinta" className="client-logo" />
                    <img src="img/logos/Milton.jpg" alt="Milton" className="client-logo" />
                    <img src="img/logos/herbalife.jpeg" alt="Herbalife" className="client-logo" />
                </div>
            </div>
        </section>
    );
}

export default Clients;
