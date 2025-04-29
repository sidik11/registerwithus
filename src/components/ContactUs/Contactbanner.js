import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Contactbanner.css';

function Contactbanner() {
    return (
        <section className="cont-sec" >
            <div className="container py-5">
                <div class="position-relative w-100 bg-images">
                    {/* <img src="img/contactus.png" class="w-100 h-100 object-fit-cover" alt="Contact Us" /> */}

                    {/* <div class="position-absolute top-0 start-0 w-100 h-100 cont-pos"></div> */}

                    <div class="position-absolute top-50 start-50 translate-middle theme-color text-center">
                        <h1 class="fw-bold">Contact Us</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contactbanner;
