import React, { useRef } from 'react';
import { API_BASE_URL } from '../../utils/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Swal from 'sweetalert2';
import './Hero3.css';

function Hero3() {
    const form = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.current) return;

        const formData = {
            user_name: form.current.user_name.value.trim(),
            user_phone: form.current.user_phone.value.trim(),
            user_email: form.current.user_email.value.trim(),
            message: form.current.message.value.trim(),
            form_type: "Quick Contact"
        };

        try {
            const response = await fetch(`${API_BASE_URL}/api/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.success) {
                Swal.fire({
                    icon: 'success',
                    title: '✅ Form Submitted Successfully!',
                    text: 'We will connect with you soon.'
                });
                form.current.reset();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: '❌ Form Submission Failed!',
                    text: 'Under Maintenance. Please try again later.'
                });
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: '❌ Server Error!',
                text: 'Something went wrong. Please try again later.'
            });
        }
    };

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
        <section className="biz-hero-section mt-5">
            <div className="biz-hero-overlay">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-lg-7 text-white biz-hero-content">
                            <h1 className="hero-title">
                                We help you <br />
                                <span className="highlight-yellow">Anyway</span> to rise, build, and lead.
                            </h1>
                            <h5 className="sub-head">Ignite Possibilities</h5>
                            <ul className="hero-features mt-4">
                                <li><i className="fas fa-check-circle text-success me-2"></i> Empowering startups with seamless registration</li>
                                <li><i className="fas fa-check-circle text-success me-2"></i> Compliance</li>
                                <li><i className="fas fa-check-circle text-success me-2"></i> Business growth services</li>
                            </ul>
                            <div className="btn-area my-4 d-flex align-items-center flex-wrap">
                                <a href="#" className="btn btn-yellow" onClick={scrollToFooter}>Explore More</a>
                                <button type="button" className="btn play-btnsss ms-3">
                                    <i className="fas fa-play me-2 text-black"></i>
                                    <a href="https://youtube.com" className='text-decoration-none text-black' target='_blank' rel="noopener noreferrer">Play Now</a>
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="styled-form-containers">
                                <p className='text-white'>
                                    Submit your details to get an instant <span className=''>All-inclusive</span> Quote to your email and a <span className=''>FREE</span> Expert Consultation
                                </p>
                                <form ref={form} onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="user_name"
                                        maxLength="50"
                                        onInput={(e) => {
                                            e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, '');
                                        }}
                                        className="form-control custom-inputs mb-3"
                                        placeholder="Your Name"
                                        required
                                    />

                                    <div className="input-group mb-3">
                                        <span className="input-group-text custom-addons">+91</span>
                                        <input
                                            type="tel"
                                            name="user_phone"
                                            maxLength="10"
                                            onInput={(e) => {
                                                e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                                            }}
                                            className="form-control custom-inputs"
                                            placeholder="Mobile Number"
                                            required
                                        />
                                    </div>

                                    <input
                                        type="email"
                                        name="user_email"
                                        className="form-control custom-inputs mb-3"
                                        placeholder="Email"
                                        required
                                    />

                                    <textarea
                                        name="message"
                                        className="form-control custom-inputs mb-3"
                                        placeholder="Message"
                                        rows="3"
                                        required
                                    ></textarea>

                                    <button type="submit" className="btn btn-gradients w-100 fw-bold">
                                        Register Now →
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero3;
